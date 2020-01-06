import React from 'react';
import CreateDialog from './CreateDialog';
import {Formik, Field, Form, ErrorMessage} from 'formik';

class CreateAppointment extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        startDate: new Date(),
        endDate: new Date(),
        title: '',
        person: '',
        trips: []
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  


    handleChange(event) {
      console.log(event.target.value)
      this.setState(
        {
          
          startDate: new Date(event.target.value),
          endDate: new Date(event.target.value),


        }
      );
    }
  
    handleSubmit(event) {


    
    }
  
    render() {
      return (
        <CreateDialog modalID="CreateAppointment" title="Create Appointment">
          <Formik 
          onSubmit={(values, actions) =>       
            fetch('http://10.0.5.63:5000/appointments', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
   
              startDate: values.startDate,
              endDate: values.endDate,
              title: values.title,
              person: values.person,
              trips: []
            })
          })
          .then()} 
          render={({
            values,
            errors,
            status,
            touched,
            handleChange,
            handleSubmit,
            isSubmitting
          }) => (
            <div>
              <Form>
                <div className="modal-body">
                    
                  <label>Start Date</label>
                  <Field className="form-control" name="startDate" type="date"  />
                  
                  <label>End Date</label>
                  <Field className="form-control" name="endDate" type="date"  />
                  
                  <Field className="form-control" name="title" type="text"  />
        
                  <Field className="form-control" name="person" type="text" />

                    
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="submit" className="btn btn-primary" value="Submit" disabled={isSubmitting}>Save changes</button>
                  </div>
                </Form>
            </div>
          
          )}
        />
        </CreateDialog>

      );
    }
  }

  export default CreateAppointment