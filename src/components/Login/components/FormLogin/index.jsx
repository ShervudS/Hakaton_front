import React, {useState} from "react";
import {Field, reduxForm} from "redux-form";
import {renderField} from './renderField';
import {FORM_NAME} from "_configs/main_config";
import { validateForm } from '_utils/helpers';
import styles from './styles.module.scss';

const FormButtonSubmit = ({isFormLoading, invalid, pristine}) => {
    return (
        <button type="submit" className={styles.submitBtn} disabled={isFormLoading || invalid || pristine}>
            {isFormLoading ? (
                <span className={styles.loader}>Отправка...</span>
            ) : (
                <span>Войти</span>
            )}
        </button>
    );
};

const validate = (values, {dirty}) => {
    if (dirty) {
        console.log('validation')
        const errors = validateForm(values);
        return errors;
    }
};

const Form = (props) => {
    const {handleSubmit, invalid, pristine} = props;
    const [isFormLoading, setIsFormLoading] = useState(false);

    const logIn = (values) => {
        console.log(values)
        setIsFormLoading(true)
    }

    return (
        <form
            className={styles.formContent}
            onSubmit={handleSubmit(logIn)}
            noValidate
        >
            <div className={styles.fields}>
                <Field
                    type={'email'}
                    name={'email'}
                    component={renderField}
                    placeholder={'Электронная почта'}
                    label={'Электронная почта'}
                />

                <Field
                    type={'pass'}
                    name={'pass'}
                    component={renderField}
                    placeholder={'Пароль'}
                    label={'Пароль*'}
                />
            </div>

            <FormButtonSubmit
                isFormLoading={isFormLoading}
                invalid={invalid}
                pristine={pristine}
            />
        </form>
    )
};

export const FormLogin = reduxForm({
    form: FORM_NAME,
    validate,
    initialValues: {},
})(Form);