import { React } from '!/app';

export default class Layout extends React.Component {
    render = () => {
        return (
            <React.Fragment>
                <header>header</header>
                <main>{this.props.children}</main>
                <footer>footer</footer>
            </React.Fragment>
        )
    }
}
