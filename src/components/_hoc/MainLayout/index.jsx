import React from "react";
import {Container} from "_components/Container";
import {AppIcon} from "_components/_ui/AppIcon";
import AppLogo from "_images/logo.svg";
import styles from './styles.module.scss';

export const MainLayout = ({children}) => {

    return (<div className={styles.mainLayout}>
        <header className={styles.header}>
            <Container stylesClass={styles.headerContainer}>
                <div className={styles.logo}>
                    <AppLogo/>
                </div>

                <div className={styles.search}>
                    <div className={styles.searchIcon}>
                        <AppIcon name="search"/>
                    </div>
                    <input/>
                </div>

                <div className={styles.control}>
                    <span>Вы вошли как инвестор</span>
                    <button>
                        <AppIcon name="user"/>
                    </button>
                </div>
            </Container>
        </header>

        <div className={styles.breadcrumbs}>
            <Container>
                {location.pathname === "/catalog" ? 'Основные категории' : ""}
            </Container>
        </div>

        <main className={styles.main}>
            {children}
        </main>
    </div>)
}