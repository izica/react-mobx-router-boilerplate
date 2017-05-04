import React from 'react';
import { observer, inject } from 'mobx-react';

import CatalogItem from './CatalogItem';

@inject('CatalogStore')
@observer
export default class CatalogItems extends React.Component {
    render() {
        let { CatalogStore } = this.props;
        return (
            <div className="catalog-items">
                { CatalogStore.items.map(item => <CatalogItem key={ item.id } item={ item } />) }
            </div>
        )
    }
}
