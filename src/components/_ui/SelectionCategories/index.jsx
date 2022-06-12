import React from "react";
import classNames from "classnames";
import {Link} from "react-router-dom";
import styles from './styles.module.scss';

const colors = (percent) => {
    if (percent >= 60) return {color: '#0393E3'}
    if (percent < 60 && percent > 20) return {color: '#F2994A'}
    return {color: '#EB5757'}
}

const CategoryCard = ({label, relevance, name, imageName}) => (
    <Link to={name} className={styles.categoryCard}>
        <div>
            <p>{label}</p>
            <span style={colors(relevance)}>{relevance}%</span>
        </div>
        {imageName && <div className={styles.categoryImage}>
            <img src={require(`_images/${imageName}.png`)} alt={imageName}/>
        </div>}
    </Link>
)

export const SelectionCategories = ({data, variantSmall = false}) => {
    const selectionCategoriesClass = classNames(styles.selectionCategories, {
        [styles.categoriesRowAndSmall]: variantSmall,
    });
    return (
        <div className={selectionCategoriesClass}>
            {data.map((elem, idx) => (
                <CategoryCard
                    label={elem.label}
                    relevance={elem.relevance}
                    name={elem.name}
                    imageName={elem.imageName}
                    key={elem.name + idx.toString()}
                />))}
        </div>
    )
}
