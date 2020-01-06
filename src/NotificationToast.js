/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react'
import $ from 'jquery'



class NotificationToast extends React.Component {
  constructor(props) {
    super(props);

    this.handleDismissed = this.props.handleDismissed.bind(this);
    
  }

  render() {
    var currentDate = new Date();
    var date = new Date(this.props.timesent);
    var dateDiff = new Date(currentDate.valueOf() - date.valueOf());
    var dateString = ""

    if (this.props.timesent !== null) {
        if(dateDiff > 86400000) {
          dateString = Math.floor(dateDiff.valueOf() / 86400000) + (dateDiff < 172800000 ? " day ago" : " days ago");
        } else if (dateDiff > 3600000) {
          dateString = Math.floor(dateDiff.valueOf() / 3600000) + (dateDiff < 7200000 ? " hour ago" : " hours ago");
        } else if (dateDiff > 60000) {
          dateString = Math.floor(dateDiff.valueOf() / 60000) + (dateDiff < 120000 ? " minute ago" : " minutes ago");
        } else {
          dateString = Math.floor(dateDiff.valueOf() / 1000) + " seconds ago";
        }
      }

    return(
        <div ref="_notification" id={this.props.id} className="notification" role="status" aria-live="polite" aria-atomic="true">
            <div className="notification-header">
              <strong  className="mr-auto">{ this.props.title }</strong>
              <small>{dateString}</small>
              <button type="button" className="ml-2 mb-1 close" aria-label="Close" onClick={this.handleDismissed}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="notification-body">
              <p>{this.props.message}</p>
            </div>
        </div>
    );
  }
}

export default NotificationToast;
