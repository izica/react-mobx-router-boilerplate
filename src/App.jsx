import { React } from '!/app';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader'
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';
import Layout from './layout/Layout';


const App = props => {
    return (
        <BrowserRouter>
            <Layout>
                <Router/>
            </Layout>
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
