import { React } from '!/app';
import {Route, Switch} from 'react-router-dom';

import Index from './pages/index';

export default class Router extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Index}/>
            </Switch>
        )
    }
}
