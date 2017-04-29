import React from 'react';
import { observer, inject } from 'mobx-react';

@inject('OrderStore')
@observer
export default class CatalogBasketItem extends React.Component {
    render() {
        let {
            OrderStore,
            item
        } = this.props;
        return (
            <div className="catalog-basket-item">
                <div className="catalog-basket-item__photo" style={{backgroundImage: item.photo}}></div>
                <div className="catalog-basket-item__name">{item.name}</div>
                <div className="catalog-basket-item__price">{item.price}$</div>
                <div className="catalog-basket-item__add" onClick={e => item.quantity++}>+</div>
                <div className="catalog-basket-item__quantity">{item.quantity}</div>
                <div className="catalog-basket-item__remove"
                    onClick={e => (item.quantity == 1) ? OrderStore.remove(item) : item.quantity--}>
                    -
                </div>
                <div className="catalog-basket-item__total">{item.total}</div>
            </div>
        )
    }
}
