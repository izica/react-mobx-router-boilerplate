import { React } from '!/app';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader'
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';


const App = props => {
    return (
        <BrowserRouter>
            <Router/>
        </BrowserRouter>
    )
}
render(App);

if(module.hot)
    module.hot.accept(App, () => render(App.default));


function render(App) {
    ReactDOM.render(
        <AppContainer>
            <App/>
        </AppContainer>,
        document.getElementById('app')
    )
}
