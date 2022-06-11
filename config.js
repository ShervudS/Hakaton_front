'use strict';

module.exports = {
    env: process.env.NODE_ENV || 'production',
    host: process.env.NODE_HOST || '0.0.0.0',
    port: process.env.NODE_PORT || 3000,

    baseUrl: process.env.BASE_URL || '/',
};
