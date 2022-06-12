import React from "react";
import {Link} from "react-router-dom";
import {TestLabel} from "_components/_ui/TestLabel";
import styles from './styles.module.scss';

const ProductCard = ({name,label, manufacturer}) => {
    if (!manufacturer) return (<div className={styles.productDisabledCard}>
        <p>{label}</p>
        <p>не производится</p>
    </div>)

    return (<Link to={name} className={styles.productCard}>
        <p>{label}</p>
        <p>{manufacturer} производителя</p>
    </Link>)
}

export const SelectionProducts = ({title, data}) => (<div className={styles.selectionProductsWrapper}>
    <h3 className={styles.title}>{title}</h3>
    <div className={styles.selectionProducts}>
        {data.map((elem, idx) => (<ProductCard
            name={elem.name}
            label={elem.label}
            manufacturer={elem.manufacturer}
            key={elem.name + idx.toString()}
        />))}
    </div>
    <div className={styles.moreBtn}>
        <TestLabel>
            <button>Еще</button>
        </TestLabel>
    </div>

</div>)