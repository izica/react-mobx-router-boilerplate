import React from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

import CatalogBasket from './CatalogBasket';
import CatalogItems from './CatalogItems';

import Input from '~/Input';

@observer
export default class Catalog extends React.Component {
    @observable text = "some value";

    render() {
        return (
            <div className="catalog">
                <Input value={this.text} onChange={e => this.text = e.target.value}/>
                <CatalogItems />
                <CatalogBasket />
            </div>
        )
    }
}
