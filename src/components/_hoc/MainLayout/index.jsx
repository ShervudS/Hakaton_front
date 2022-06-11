import React from "react";
import {useLocation} from 'react-router-dom';
import {Container} from "_components/Container";
import {AppIcon} from "_components/_ui/AppIcon";
import AppLogo from "_images/logo.svg";
import styles from './styles.module.scss';
import {InlineBtn} from "_components/_ui/InlineBtn";

// == [Temp data]
const categoriesGoodsData = ['Продукты питания', 'Одежда и обувь', 'Электроника', 'Бытовая техника', 'Детские товары', 'Одежда и обувь']
// == [end temp data]

export const MainLayout = ({children}) => {
    let location = useLocation();

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

        <div className={styles.filters}>
            <Container stylesClass={styles.filtersContainer}>
                <InlineBtn
                    styleClass={styles.filterItem}
                    onClick={() => console.log(123)}
                    label='Острая не хватка товара'
                />
                <InlineBtn
                    styleClass={styles.filterItem}
                    onClick={() => console.log(123)}
                    label='Не хватает комплектующих'
                />
                <InlineBtn
                    styleClass={styles.filterItem}
                    onClick={() => console.log(123)}
                    label='Ходовые товары'
                />
            </Container>
        </div>

        <div className={styles.categoriesGood}>
            <Container>
                {categoriesGoodsData.map((elem, idx) => (
                    <span className={styles.categoryGood} key={idx}>{elem}</span>))}
            </Container>
        </div>

        <div className={styles.breadcrumbs}>
            <Container>
                {location.pathname === "/catalog" ? 'Популярные категории товаров' : ""}
            </Container>
        </div>


        <Container stylesClass={styles.mainLayoutContainer}>
            {children}
        </Container>
    </div>)
}