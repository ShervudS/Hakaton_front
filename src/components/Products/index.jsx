import React from "react";
import {MainLayout} from "_components/_hoc/MainLayout";
import {Container} from "_components/Container";
import {SelectionProducts} from "_components/_ui/SelectionProducts";
import {ProductGroup} from "_components/_ui/ProductGroup";
import styles from './styles.module.scss';


// == [temp data]
import {productsData, productGroup1} from '_configs/tempData'
// == [end temp data]

export const Products = () => {
    return (
        <MainLayout>
            <Container stylesClass={styles.productContainer}>
                <div className={styles.aside}>
                    <ProductGroup
                        title="Крупная техника для кухни"
                        data={productGroup1}
                        onMore={true}
                    />
                    <ProductGroup
                        title="Техника для дома"
                        data={productGroup1}
                    />
                    <ProductGroup
                        title="Мелкая техника для кухни"
                        data={productGroup1}
                    />
                    <ProductGroup
                        title="Встраиваемая техника"
                        data={productGroup1}
                        onMore={true}
                    />
                    <ProductGroup
                        title="Климатическая техника"
                        data={productGroup1}
                        onMore={true}
                    />
                </div>

                <div className={styles.products}>
                    <SelectionProducts
                        title="Крупная техника для кухни"
                        data={productsData}/>

                    <SelectionProducts
                        title="Техника для дома"
                        data={productsData}/>
                </div>
            </Container>
        </MainLayout>
    )
}