import React from "react";
import classNames from "classnames";
import styles from './styles.module.scss'

export const Container = ({children, stylesClass}) => {
    const stylesContainer = classNames(styles.container, stylesClass)
    return (
        <div
            className={stylesContainer}> {children}
        </div>
    )
}