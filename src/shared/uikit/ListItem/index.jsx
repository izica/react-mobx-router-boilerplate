import { React, PropTypes, classnames } from '!/app';

import './style.scss';

export default class ListItem extends React.Component {
    static propTypes = {
        name: PropTypes.string,
        className: PropTypes.string
    };

    render = () => {
        let className = classnames(
            this.props.className,
            'list-item'
        );

        return(
            <div className={className}>{this.props.name}</div>
        )
    };
}
