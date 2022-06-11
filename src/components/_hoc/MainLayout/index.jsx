import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Container} from "_components/Container";
import {setIsVisibleNavigation} from "_redux/reducers/main_reducer";
import styles from './styles.module.scss';

export const MainLayout = ({children}) => {
    const dispatch = useDispatch();
    const {isVisibleNavigation} = useSelector(state => state.main)

    const toggleVisibleCatalog = () => {
        dispatch(setIsVisibleNavigation(!isVisibleNavigation))
    }

    return (
        <div className={styles.mainLayout}>
            <Container stylesClass={styles.mainLayoutContainer}>
                <header className={styles.header}>
                    <button className={styles.catalogBtn} onClick={toggleVisibleCatalog}>Catalog</button>
                    <div className={styles.search}>Search</div>
                    <div className={styles.control}>
                        <button>Favorite</button>
                        <button>Settings</button>
                    </div>
                </header>
                {children}
            </Container>
        </div>
    )
}