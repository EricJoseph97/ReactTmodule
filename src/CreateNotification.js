import React from 'react';

import CreateDialog from './CreateDialog'

class CreateNotification extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        title: '',
        message: ''
      };
      
      this.handleNewNotification = this.props.handleNewNotification.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      var target = event.target;
      var value = target.value;
      var name = target.name;
      this.setState({[name]: value});
    }
  
    handleSubmit(event) {

      fetch('http://10.0.5.63:5000/notifications', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            title: this.state.title,
            message: this.state.message
        })
      })
      .then(res => res.json())
      .then(res => {this.handleNewNotification(res)})

      .catch(error =>  {  
        console.log('Request failure: ', error);  
      });

      event.preventDefault();
    }
  
    render() {
      return (
          <CreateDialog modalID="CreateNotification" title="Create Notificiation" show={false} backdrop={false}>
                <form onSubmit={this.handleSubmit}>
                    <div className="modal-body">
                      <label >Title:</label>
                      <input className="form-control" type="text" name="title" value={this.state.title} onChange={this.handleChange} />
                      <label> Message: </label>
                      <textarea className="form-control" type="text" name="message" value={this.state.message} onChange={this.handleChange} />
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="submit" className="btn btn-primary" value="Submit">Save changes</button>
                    </div>
                </form>
            </CreateDialog>

      );
    }
  }

  export default CreateNotification