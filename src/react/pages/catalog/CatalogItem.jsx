import React from 'react';
import { observer, inject } from 'mobx-react';

@inject('OrderStore')
@observer
export default class CatalogItems extends React.Component {
    render() {
        let {
            OrderStore,
            item
        } = this.props;
        return (
            <div className="catalog-item">
                <div className="catalog-item__name">{item.name}</div>
                <div className="catalog-item__photo" style={{backgroundImage: item.photo}}></div>
                <div className="button button--gradient" onClick={ e => OrderStore.add(item)}>
                    {item.price}$ | Add to cart
                </div>
            </div>
        )
    }
}
