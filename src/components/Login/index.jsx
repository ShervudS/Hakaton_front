import React from "react";
import {Container} from "_components/Container";
import {AppIcon} from "_components/AppIcon";
import {FormLogin} from "_components/Login/components/FormLogin";
import AppLogo from '_images/icons/logo.svg'
import styles from './styles.modules.scss';
import {InlineBtn} from "_components/_ui/InlineBtn";


// const LoginLink = ({url, label}) => (
//     <Link className={styles.link} to={url}>{label}</Link>
// )

export const Login = () => {
    return (
        <div className={styles.login}>
            <Container stylesClass={styles.loginContainer}>
                <div className={styles.loginWindow}>

                    <div className={styles.logo}>
                        <AppLogo/>
                    </div>

                    <FormLogin/>

                    <InlineBtn styleClass={styles.loginOnPhoneBtn} label="Войти по номеру телефона"/>

                    <button className={styles.loginOnGosuslugiBtn}>
                        <AppIcon name="gosuslugi"/>
                    </button>

                    <InlineBtn label="Не удаётся войти?"/>

                </div>
            </Container>
        </div>
    )
}