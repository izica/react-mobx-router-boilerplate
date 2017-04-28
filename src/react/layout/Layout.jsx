import React from 'react';

import { observer } from 'mobx-react';

import { Header } from './Header.jsx';
import { Footer } from './Footer.jsx';


export class Layout extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                {this.props.children}
                 <Footer/>
            </div>
        )
    }
}
