import React from 'react';
import CheckList from './CheckList';
import { throws } from 'assert';


class CreateTrip extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        date: '',
        startTime: '',
        endTime: '',
        checklist: '',
        checklistLU:[]
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
      fetch('http://10.0.5.63:5000/checklistitems',{
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
  
      })
      .then(res => res.json())
      .then(res => {
        this.setState({checklistLU: res})
      })
    }

    handleChange(event) {
      var target = event.target;
      var value = target.value;
      var name = target.name;
      this.setState({[name]: value});
      console.log(this.state)
    }
  
    handleSubmit(event) {

      fetch('http://10.0.5.63:5000/trips', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            date: this.state.date,
            startTime: this.state.startTime,
            endTime: this.state.endTime,
            checklist: this.state.checklist
        })
      })
      .then(trips => { console.log("Request Data: ", trips)})
      .catch(error =>  {  
        console.log('Request failure: ', error);  
      });

      event.preventDefault();
    }
  
    render() {
      return (
        <div className="modal fade" id="CreateTrip" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Create Trip</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div className="modal-body">
                        <label>
                            Date:
                            <input name="date" className="form-control" type="date" value={this.state.date} onChange={this.handleChange} />
                        </label>
                        <label>
                            Start time:
                            <input name="startTime" className="form-control" type="time" value={this.state.startTime} onChange={this.handleChange} />
                        </label>
                        <label>
                            End Time:
                            <input name="endTime" className="form-control" type="time" value={this.state.endTime} onChange={this.handleChange} />
                        </label>
                        <label>
                            Required Items:
                            <CheckList checklist={this.state.checklistLU} name="checklist" value={this.state.checklist} onChange={this.handleChange}/>
                        </label>


                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="submit" className="btn btn-primary" value="Submit">Save changes</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

      );
    }
  }

  export default CreateTrip