import React from 'react';
import { observer } from 'mobx-react';

import OrderStore from '../../stores/OrderStore.js';
// import { CatalogItem } from './CatalogItem.jsx';

@observer
export class CatalogBasket extends React.Component {
    render() {
        console.log('catalog basket');
        return (
            <ul>
                { OrderStore.items.map(item => <li onClick={e => item.name = 23} key={item.id}>{item.name}, {item.quantity}</li>) }
            </ul>
        )
    }
}
