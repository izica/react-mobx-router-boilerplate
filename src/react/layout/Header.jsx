import React from 'react';

import { HeaderMenu } from './HeaderMenu.jsx';

export class Header extends React.Component {
    render() {
        return (
            <div>
                Logo
                <HeaderMenu/>
            </div>
        )
    }
}
