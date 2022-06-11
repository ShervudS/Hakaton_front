'use strict';

// === environment
require('dotenv').config();

// === requirements
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const expressStaticGzip = require('express-static-gzip');
const { createLogger, format, transports } = require('winston');

// === logger init
const logger = createLogger({
    level: 'info',
    format: format.combine(
        format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss',
        }),
        format.errors({ stack: true }),
        format.splat(),
        format.json()
    ),
    defaultMeta: { service: 'hakaton-expressjs' },
    transports: [
        //
        // - Write to all logs with level `info` and below to `combined.log`.
        // - Write all logs error (and below) to `error.log`.
        //
        new transports.File({
            filename: './logs/error.log',
            level: 'error',
            maxSize: '50m',
            maxFiles: '30d',
        }),
        new transports.File({
            filename: './logs/combined.log',
            maxSize: '50m',
            maxFiles: '30d',
        }),
    ],
});

// if we're not in production then **ALSO** log to the `console`
if (process.env.NODE_ENV !== 'production') {
    logger.add(
        new transports.Console({
            format: format.combine(format.colorize(), format.simple()),
        })
    );
}

const app = express();

// === config
const config = require(__dirname + '/config');

const { env, port, } = config;

// === middleware
app.use(cors());
app.use(
    helmet({
        crossOriginEmbedderPolicy: false,
    })
);

app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// === static
app.use('/', expressStaticGzip(__dirname + '/public'));

// === run server
const server = app.listen(port, (err) => {
    if (err) {
        logger.log('error', err);
        process.exit(1);
    }

    logger.log('info', `Server listening on port: ${port}`);
    logger.log('info', `Environment: ${env}`);
});

// === terminal signals handling
// NOTE: although it is tempting, the SIGKILL signal (9) cannot be intercepted and handled
const signals = {
    SIGHUP: 1,
    SIGINT: 2,
    SIGTERM: 15,
};

// === shutdown logic
const shutdown = (signal, value) => {
    logger.log('info', 'Shutdown!');

    server.close(() => {
        logger.log('info', `Server stopped by ${signal} with value ${value}`);
        process.exit(128 + value);
    });
};

// === create a listener for each of the signals that we want to handle
Object.keys(signals).forEach((signal) => {
    process.on(signal, () => {
        logger.log(
            'info',
            `\nProcess received a ${signal} signal from terminal`
        );
        shutdown(signal, signals[signal]);
    });
});
