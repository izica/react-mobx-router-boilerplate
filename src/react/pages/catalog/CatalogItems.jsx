import React from 'react';
import { observer } from 'mobx-react';

import ItemStore from '../../stores/ItemStore.js';
import OrderStore from '../../stores/OrderStore.js';

@observer
export class CatalogItems extends React.Component {
    render() {
        console.log('catalog items');
        return (
            <ul>
                { ItemStore.items.map(item => <li key={item.id}>{item.name}</li>) }
            </ul>
        )
    }
}
