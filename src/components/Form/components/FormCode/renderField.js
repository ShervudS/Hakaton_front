import React from 'react';
import { useDispatch } from 'react-redux';
import InputMask from 'react-input-mask';
import classNames from 'classnames';
import { AppIcon } from '_components/_ui/AppIcon';
import { setPolicyOpened } from '_redux/reducers/main_reducer';
import styles from '../../styles.module.scss';

export const renderField = (props) => {
    const { input, placeholder, label, type, meta } = props;
    const { error, active, dirty } = meta;

    const dispatch = useDispatch();

    const onOpenPolicy = () => {
        dispatch(setPolicyOpened(true));
    };

    // labels
    const inputLabel = dirty && label && (
        <span className={styles.label}>{label}</span>
    );

    // inputs  => text/email | phone | checkbox
    const inputClassName = classNames(styles.input, {
        [styles.inputError]: !active && error,
    });

    const checkmarkClassName = classNames(styles.termsCheckmark, {
        [styles.termsCheckmarkError]: !active && error,
    });

    const inputText = (
        <input
            {...input}
            placeholder={placeholder}
            type={type}
            className={inputClassName}
        />
    );

    const inputPhone = (
        <InputMask
            {...input}
            placeholder={placeholder}
            type={type}
            className={inputClassName}
            inputMode={'numeric'}
            pattern={'[0-9]*'}
            mask={'09999999999?????'}
            formatChars={{ 0: '[0-9+]', 9: '[0-9]', '?': '[0-9 ]' }}
            maskChar={null}
        />
    );

    const inputCheckbox = (
        <label className={styles.terms}>
            <input {...input} type={type} className={styles.termsCheckbox} />

            <span className={checkmarkClassName}>
                <AppIcon name={'check'} />
            </span>

            <span className={styles.termsText}>
                Нажимая на кнопку «Получить», я подтверждаю свое согласие
                на&nbsp;
                <button onClick={onOpenPolicy} type="button">
                    обработку персональных данных.
                </button>
            </span>
        </label>
    );

    const inputFields = {
        text: inputText,
        email: inputText,
        tel: inputPhone,
        checkbox: inputCheckbox,
    };

    // errors
    const inputError = !active && error && type !== 'checkbox' && (
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
