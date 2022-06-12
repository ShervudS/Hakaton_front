import React from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';

export const renderField = (props) => {
    const { input, placeholder, label, type, meta } = props;
    const { error, active, dirty } = meta;

    const inputClassName = classNames(styles.input, {
        [styles.inputError]: !active && error,
    });

    // labels
    const inputLabel = dirty && label && (
        <span className={styles.label}>{label}</span>
    );

    const inputText = (
        <input
            {...input}
            placeholder={placeholder}
            type={type}
            className={inputClassName}
        />
    );

    const inputFields = {
        email: inputText,
        pass: inputText,
    };

    // errors
    const inputError = !active && error && (
        <span className={styles.error}>{error}</span>
    );

    return (
        <div className={styles.field}>
            {inputLabel}
            {inputFields[type]}
            {inputError}
        </div>
    );
};
