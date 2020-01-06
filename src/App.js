import React, { Component } from 'react';
import HeaderBar from './HeaderBar';
import AppContent from './AppContent';
import Brand from './Brand';
import NotificationList from './NotificationList';
import NotificationIcon from './NotificationIcon'
import MainMenu from './MainMenu';
import CreateNotification from './CreateNotification';
import CreateTrip from './CreateTrip';
import CreateAppointment from './CreateAppointment';
import CreateCheckListItem from './CreateCheckListItem';

class App extends Component {
  constructor(props){
    super(props);
    
    this.handleNotificationToggle = this.handleNotificationToggle.bind(this);
    this.handleMenuToggle = this.handleMenuToggle.bind(this);
    this.handleNotificiationUpdate = this.handleNotificiationUpdate.bind(this);
    this.handleDismissed = this.handleDismissed.bind(this);
    this.state={
      showMenu: true,
      showNotifications: false,
      isLoaded: false,
      notifications: []
    }
    
  }

  componentDidMount() {

    fetch('http://10.0.5.63:5000/notifications')
      .then(res => res.json())
      .then(
        (result) => {
          this.handleNotificiationUpdate(result);
        })
      .then(
        this.setState({
          isLoaded: true
        })
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
      )
  }

  handleNotificationToggle() {
    this.setState(state => ({showNotifications: !state.showNotifications}));
    
  }

  handleMenuToggle() {
    this.setState(state => ({showMenu: !state.showMenu}));
  }

  handleNotificiationUpdate = (result) => {
    // eslint-disable-next-line array-callback-return
    this.setState({
      notifications: result
    });
  }

  handleDismissed = (indexToChange) => {
    console.log(indexToChange + " Will be Removed")
    fetch('http://10.0.5.63:5000/notifications/' + indexToChange, {
          method: 'PUT',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            dismissed: true
          })
        })
        .then(res => res.json())
        .then(res => {
          this.handleNotificiationUpdate(res)
        })
  }
  

  render() {

    return (
      <div>
          <HeaderBar 
            brand={
              <Brand />
            }
            handleMenuToggle={this.handleMenuToggle}>


              <NotificationIcon active={this.state.showNotifications} count={this.state.notifications.length} onNotificationToggle={this.handleNotificationToggle}/>
              <NotificationList active={this.state.showNotifications} notifications={this.state.notifications} handleDismissed={this.handleDismissed}/>
            </HeaderBar>

        <div className="container vh-head" >
          <div className="row h-100">
            <MainMenu active={this.state.showMenu}/>
            <AppContent />
            
          </div>
        </div>
        <CreateAppointment/>
        <CreateCheckListItem />
        <CreateNotification handleNewNotification={this.handleNotificiationUpdate}/>
        <CreateTrip/>
      </div>
    );
  }
}

export default App;



