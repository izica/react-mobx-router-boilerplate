import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'mobx-react';

import CatalogStore from './stores/CatalogStore.js';
import OrderStore from './stores/OrderStore.js';

import Layout from './layout/Layout.jsx';
import Catalog from './pages/catalog/Catalog.jsx';
import Basket from './pages/basket/Basket.jsx';

// require('../../scss/app.scss');

const stores = {
    CatalogStore,
    OrderStore
};

ReactDOM.render(
    <BrowserRouter>
        <Provider {...stores}>
            <Layout>
                <Route path='/catalog' component={ Catalog } />
                <Route path='/basket' component={ Basket }/>
            </Layout>
        </Provider>
    </BrowserRouter>,
    document.getElementById('app')
);
