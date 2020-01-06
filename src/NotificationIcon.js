import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'

class NotificationIcon extends React.Component {

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.props.onNotificationToggle();
    }

    render() {
        var counter;
            if (this.props.count > 0) {
                counter = <span className="fa-layers-counter bg-danger fa-lg">{this.props.count}</span>
            }
            
            return (
                <span className={"fa-layers fa-fw " + (this.props.active ? "text-primary" : "text-reset")} onClick={this.handleClick}>
                    <FontAwesomeIcon icon={faBell} />
                    {counter}
                </span>
            );

    }
}

export default NotificationIcon;