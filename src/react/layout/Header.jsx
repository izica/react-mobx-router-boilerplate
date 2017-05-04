import React from 'react';

import HeaderMenu from './HeaderMenu';

export default class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="header-logo">React + Mobx boilerplate</div>
                <HeaderMenu/>
            </div>
        )
    }
}
