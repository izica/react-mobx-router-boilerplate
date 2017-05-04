import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {Provider} from 'mobx-react';

import CatalogStore from './stores/CatalogStore.js';
import OrderStore from './stores/OrderStore.js';

import Layout from './layout/Layout.jsx';
import Catalog from './pages/catalog/Catalog.jsx';
import Basket from './pages/basket/Basket.jsx';

import {AppContainer} from 'react-hot-loader'

const App = props => {
    const stores = {
        CatalogStore,
        OrderStore
    };
    return (
        <BrowserRouter>
            <Provider {...stores}>
                <Layout>
                    <Route exact path="/" component={Catalog}/>
                    <Route path='/catalog' component={Catalog}/>
                    <Route path='/basket' component={Basket}/>
                </Layout>
            </Provider>
        </BrowserRouter>
    )
}
render(App);

if(module.hot)
    module.hot.accept(App, () => render(App.default));


function render(App) {
    ReactDOM.render(
        <AppContainer>
            <App/>
        </AppContainer>,
        document.getElementById('app')
    )
}
