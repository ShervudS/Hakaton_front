import React from "react";
import {useSelector} from "react-redux";
import classNames from "classnames";
import styles from './styles.module.scss'
import {MainLayout} from "_components/_hoc/MainLayout";

export const PrivatePerson = () => {
    const {isVisibleNavigation} = useSelector(state => state.main)

    const catalogNavClass = classNames(styles.catalogNav, {
        [styles.catalogNavVisible]: isVisibleNavigation,
    })

    const mainClass = classNames(styles.main, {
        [styles.catalogNavVisible]: isVisibleNavigation,
    })

    return (
        <MainLayout>
            <main className={mainClass}>

                <div className={catalogNavClass}>
                    каталог
                </div>


                <div className={styles.banner}>
                    Promo banner
                </div>

                <div className={styles.replaceBrands}>
                    <div className={styles.replaceItem}>
                        Brand replace
                    </div>
                    <div className={styles.replaceItem}>
                        Brand replace
                    </div>
                    <div className={styles.replaceItem}>
                        Brand replace
                    </div>
                    <div className={styles.replaceItem}>
                        Brand replace
                    </div>
                </div>

                <div className={styles.categories}>
                    <div className={styles.categoriesItem}>
                        Category product
                    </div>
                    <div className={styles.categoriesItem}>
                        Category product
                    </div>
                    <div className={styles.categoriesItem}>
                        Category product
                    </div>
                    <div className={styles.categoriesItem}>
                        Category product
                    </div>
                </div>

                <div className={styles.popularsProduct}>
                    <div className={styles.popularsItem}>
                        Category product
                    </div>
                    <div className={styles.popularsItem}>
                        Category product
                    </div>
                    <div className={styles.popularsItem}>
                        Category product
                    </div>
                    <div className={styles.popularsItem}>
                        Category product
                    </div>
                </div>
                <div className={styles.popularsProduct2}>
                    <div className={styles.popularsItem}>
                        Category product
                    </div>
                    <div className={styles.popularsItem}>
                        Category product
                    </div>
                    <div className={styles.popularsItem}>
                        Category product
                    </div>
                    <div className={styles.popularsItem}>
                        Category product
                    </div>
                </div>


                <div className={styles.promo1}>Реклама</div>
                <div className={styles.promo2}>Реклама</div>

            </main>
        </MainLayout>
    )
}