import React from 'react';
import {Routes, Route, Link} from "react-router-dom";
import {Login} from "_components/Login";
import {Categories} from '_components/Categories';
import {Products} from '_components/Products'


// === [redux]
import {Provider} from 'react-redux';
import {store} from '_redux/store';

// === [styles]
import '_styles/globals.scss';


export const App = () => (
    <Provider store={store}>
        <Link to="/">Home</Link>

        <Link to="/categories">categories</Link>


        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="categories" element={<Categories/>}/>
            <Route path="categories/:name" element={<Categories/>}/>
            <Route path="categories/:name/:name" element={<Categories/>}/>
            <Route path="categories/:name/:name/:products" element={<Products/>}/>
            {/*<Route path="categories/:name/:name" element={<Categories/>}/>*/}
        </Routes>
    </Provider>
)
