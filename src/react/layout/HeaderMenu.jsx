import React from 'react';

import { Link } from 'react-router-dom';

export class HeaderMenu extends React.Component {
    render() {
        return (
            <div>
                <Link to="/catalog">Catalog</Link>
                <Link to="/basket">Basket</Link>
            </div>
        )
    }
}
