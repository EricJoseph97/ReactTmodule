import React from 'react';

import CreateDialog from './CreateDialog'

class CreateCheckListItem extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        itemName: ''
      };
      
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

      fetch('http://10.0.5.63:5000/checklistitems', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            itemName: this.state.itemName,
            checked: false
        })
      })
      .then(res => res.json())
      .then(res => {console.log(res)})

      .catch(error =>  {  
        console.log('Request failure: ', error);  
      });

      event.preventDefault();
    }
  
    render() {
      return (
          <CreateDialog modalID="CreateCheckListItem" title="Create Check List Item" show={false} backdrop={false}>
                <form onSubmit={this.handleSubmit}>
                    <div className="modal-body">
                      <label >Title:</label>
                      <input className="form-control" type="text" name="itemName" value={this.state.itemName} onChange={this.handleChange} />
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

  export default CreateCheckListItem