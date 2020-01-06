import React from 'react';



const AppointmentCard = (props) => {


    return(
        <div className="card m-2">
            <div className="card-header">
                <h3>{ props.timeframe }</h3>
            </div>
            <div className="card-body">
                <div>
                  {props.children}
                </div>
            </div>
        </div>
    );
  }



export default AppointmentCard;

    