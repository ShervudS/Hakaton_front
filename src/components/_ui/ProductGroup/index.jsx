import React from "react";
import {TestLabel} from "_components/_ui/TestLabel";
import styles from './styles.module.scss';

export const ProductGroup = ({title, data, onMore = false}) => {
    return (
        <div className={styles.wrapper}>
            <p className={styles.title}>{title}</p>
            <ul className={styles.list}>
                {data.map((elem, idx) => (
                    <li
                        className={styles.item}
                        key={idx}
                    >
                        {elem}
                    </li>
                ))}
            </ul>
            {onMore && <TestLabel>
                <button>Еще</button>
            </TestLabel>}
        </div>
    )
}