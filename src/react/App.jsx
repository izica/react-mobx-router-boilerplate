import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// import { observer } from 'mobx-react';
// import { observable } from 'mobx';

import { Layout } from './layout/Layout.jsx';
import { Catalog } from './pages/catalog/Catalog.jsx';
import { Basket } from './pages/basket/Basket.jsx';

// require('../../scss/app.scss');

ReactDOM.render(
    <BrowserRouter>
        <Layout>
            <Route path='/catalog' component={ Catalog } />
            <Route path='/basket' component={ Basket }/>
        </Layout>
    </BrowserRouter>,
    document.getElementById('app')
);
