import React from 'react';
import styles from './styles.module.scss';

export const Loader = ({ text }) => (
    <span className={styles.loader}>{text}</span>
);
