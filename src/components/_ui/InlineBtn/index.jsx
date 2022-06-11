import React from "react";
import classNames from "classnames";
import styles from './styles.module.scss';

export const InlineBtn = ({onClick, label, styleClass}) => {
    const btnClass = classNames(styles.inlineBtn, styleClass)
    return (<button className={btnClass} onClick={onClick}>
        <span>{label}</span>
    </button>)
}