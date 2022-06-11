// === [libs, configs and components]
import React from 'react';
import { Loader } from '_components/Loader';
import { saveAs } from 'file-saver';
import {
    FORM_NAME,
    SUBMIT_URL,
    DOWNLOAD_FILE_URL,
    DOWNLOAD_FILE_NAME,
} from '_configs/main_config';
import { validateForm, downloadFile } from '_utils/helpers';
import { renderField } from './renderField';
import classNames from 'classnames';

// === [redux]
import { reduxForm, Field, SubmissionError, reset } from 'redux-form';
import { useDispatch, useSelector } from 'react-redux';
import { setIsFormLoading, setMessageType } from '_redux/reducers/main_reducer';

// === [counters]
import ym from 'react-yandex-metrika';

// === [styles]
import styles from '../../styles.module.scss';

const FormButtonSubmit = ({ isFormLoading, invalid, pristine }) => {
    const buttonClass = classNames(styles.buttonSubmit, {
        [styles.buttonSubmitInactive]: isFormLoading || invalid || pristine,
    });

    return (
        <button type="submit" className={buttonClass}>
            {isFormLoading ? (
                <Loader text={'Отправка...'} />
            ) : (
                <span>Получить</span>
            )}
        </button>
    );
};

const validate = (values, { dirty }) => {
    if (dirty) {
        const errors = validateForm(values);
        return errors;
    }
};

const Form = (props) => {
    const { handleSubmit, invalid, pristine } = props;
    const dispatch = useDispatch();
    const openMessage = (type) => dispatch(setMessageType(type));
    const setLoading = (value) => dispatch(setIsFormLoading(value));
    const resetForm = () => dispatch(reset(FORM_NAME));
    const { isFormLoading } = useSelector((state) => state.main);

    const DOWNLOAD_URL = `${DOWNLOAD_FILE_URL}/${DOWNLOAD_FILE_NAME}`;

    const setCounters = () => {
        // YM send goal onSubmit
        ym('reachGoal', 'lead');
    };

    const showValidationError = (errors) => {
        throw new SubmissionError(errors);
    };

    const sendForm = (values) => {
        let _formData = JSON.stringify(values, null, 2);
        let fetchStatus = 'error';

        const submitOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: _formData,
        };

        setLoading(true);

        fetch(SUBMIT_URL, submitOptions)
            .then((response) => {
                if (response.status !== 200) {
                    fetchStatus = 'error';
                    return response.status;
                }
                if (response.status === 200) {
                    fetchStatus = 'ok';
                    return response.json();
                }
            })
            .then((data) => {
                setLoading(false);

                if (fetchStatus === 'ok') {
                    // == show 'success' message
                    openMessage('success');
                    resetForm();
                    downloadFile(DOWNLOAD_URL, DOWNLOAD_FILE_NAME, saveAs);
                    setCounters();
                } else {
                    // == show 'error' message
                    openMessage('error');
                    console.error('[ERROR:]', data);
                }
            })
            .catch((e) => console.error(e));
    };

    const submitForm = (values) => {
        const errors = validateForm(values);
        Object.keys(errors).length
            ? showValidationError(errors)
            : sendForm(values);
    };

    return (
        <form
            className={styles.formContent}
            onSubmit={handleSubmit(submitForm)}
            noValidate
        >
            <div className={styles.fields}>
                <Field
                    type={'text'}
                    name={'name'}
                    component={renderField}
                    placeholder={'Имя*'}
                    label={'Имя*'}
                />
                <Field
                    type={'tel'}
                    name={'phone'}
                    component={renderField}
                    placeholder={'+7 (123) 456-78-90*'}
                    label={'Телефон*'}
                />
                <Field
                    type={'email'}
                    name={'email'}
                    component={renderField}
                    placeholder={'Email'}
                    label={'Email'}
                />
                <Field
                    type={'checkbox'}
                    name={'terms'}
                    component={renderField}
                />
            </div>

            <FormButtonSubmit
                isFormLoading={isFormLoading}
                invalid={invalid}
                pristine={pristine}
            />
        </form>
    );
};

export const FormCode = reduxForm({
    form: FORM_NAME,
    validate,
    initialValues: { terms: true },
})(Form);
