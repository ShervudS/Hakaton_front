import React from "react";
import {useLocation} from "react-router-dom";
import {MainLayout} from "_components/_hoc/MainLayout";
import {Container} from "_components/Container";
import {SelectionCategories} from "_components/_ui/SelectionCategories";

// == [temp data]
import {productsCategoriesData, selectionCategoriesData, vitalityCategoriesData} from '_configs/tempData';
// == [end temp data]


// == [hard code]
const dataCategories = {
    'categories': selectionCategoriesData,

    'vitality': vitalityCategoriesData,
    "safety": vitalityCategoriesData,
    'family': vitalityCategoriesData,
    'status': vitalityCategoriesData,
    'science': vitalityCategoriesData,
    'culture': vitalityCategoriesData,
    'realization': vitalityCategoriesData,

    'products': productsCategoriesData,
    'health': productsCategoriesData,
    'clothing': productsCategoriesData,
    'mobility': productsCategoriesData,
    'life': productsCategoriesData,
}
// == [end hard code]

export const Categories = () => {
    const location = useLocation();
    const currentLocation = location.pathname.split('/');

    return (
        <MainLayout>
            <Container>
                <SelectionCategories
                    data={dataCategories[currentLocation[currentLocation.length - 1]]}
                    variantSmall={currentLocation[currentLocation.length - 1] !== 'categories'}
                />
            </Container>
        </MainLayout>
    )
}