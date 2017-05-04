import React from 'react';
import { observer, inject } from 'mobx-react';

import CatalogBasketItem from './CatalogBasketItem';

@inject('OrderStore')
@observer
export default class CatalogBasket extends React.Component {
    render() {
        let { OrderStore } = this.props;
        return (
            <div className="catalog-basket">
                { OrderStore.items.map(item => <CatalogBasketItem key={'cbi' + item.id} item={ item }/>) }
            </div>
        )
    }
}
