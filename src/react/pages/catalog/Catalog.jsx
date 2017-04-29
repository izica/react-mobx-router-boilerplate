import React from 'react';
import { observer } from 'mobx-react';

import CatalogBasket from './CatalogBasket.jsx';
import CatalogItems from './CatalogItems.jsx';

export default class Catalog extends React.Component {
    render() {
        return (
            <div className="">
                <CatalogItems />
                <CatalogBasket />
            </div>
        )
    }
}
