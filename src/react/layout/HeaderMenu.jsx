import React from 'react';

import { NavLink } from 'react-router-dom';

export default class HeaderMenu extends React.Component {
    render() {
        return (
            <div className="header-menu">
                <NavLink className="header-menu__item" activeClassName="header-menu__item--active" to="/catalog">Catalog</NavLink>
                <NavLink className="header-menu__item" activeClassName="header-menu__item--active" to="/basket">Basket</NavLink>
            </div>
        )
    }
}
