import React from 'react'
import NotificationToast from './NotificationToast'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class NotificiationList extends React.Component {

constructor(props) {
  super(props);
  this.state = {
    
  }
}

render(){

    const items = this.props.notifications.map((notification, index) => 
           
      <NotificationToast 
      key={index}
      id={notification.id}
      timesent={notification.timesent}
      title={notification.title}
      message={notification.message}
      dismissed={notification.dismissed}
      handleDismissed={() => this.props.handleDismissed(notification.id)}
      />

  )
    
    return (

        <div className={(this.props.active ? "showing " : "not-showing ") + "bg-light shadow notification-box"}>
          <div className="container app-scrollable">
            <div className="list-group" >
              <ReactCSSTransitionGroup
                transitionName="notification"
                transitionEnterTimeout={250}
                transitionLeaveTimeout={250}
              >
                {items}
              </ReactCSSTransitionGroup>
            </div>
          </div>
        </div>
   
    );


}

}

export default NotificiationList;
