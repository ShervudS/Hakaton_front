import React from "react";
import styles from './styles.module.scss';

export const TestLabel = ({children}) => (
    <div className={styles.testLabel}>{children}</div>
)