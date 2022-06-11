// === [libs, configs and components]
import React from 'react';
import { FormTitle } from './components/FormTitle';
import { FormSubtitle } from './components/FormSubtitle';
import { ButtonClose } from '_components/ButtonClose';
import { FormCode } from './components/FormCode';
import classNames from 'classnames';

// === [redux]
import { useSelector, useDispatch } from 'react-redux';
import { setFormOpened } from '_redux/reducers/main_reducer';

// === [styles]
import styles from './styles.module.scss';

export const Form = (props) => {
    const { handleSubmit, invalid, pristine } = props;
    const dispatch = useDispatch();
    const { isFormOpened, messageType } = useSelector((state) => state.main);
    const closeForm = () => dispatch(setFormOpened(false));

    const formClass = classNames(styles.form, {
        [styles.formHidden]: messageType !== 'closed',
    });

    return (
        isFormOpened && (
            <div className={formClass}>
                <div className={styles.inner}>
                    <ButtonClose
                        onClick={closeForm}
                        styles={styles.buttonClose}
                    />
                    <FormTitle title={'Подтвердите, что вы не робот'} />
                    <FormSubtitle
                        subtitle={
                            'Заполните форму и файл сохранится на ваше устройство в папку "Загрузки"'
                        }
                    />
                    <FormCode />
                </div>

                <div className={styles.background} onClick={closeForm} />
            </div>
        )
    );
};
