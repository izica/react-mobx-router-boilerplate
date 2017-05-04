import React from 'react';

export default class Input extends React.Component {
    render() {
        return (
            <div className="input">
                <input className="" type="text" value={this.props.value} onChange={this.props.onChange}/>
            </div>
        )
    }
}
