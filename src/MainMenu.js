import React from 'react';


const MainMenu = (props) => {
    if(props.active) {
    return (
        <div className="col-lg-3 col-md-3 col-xl-2 side-menu p-0 app-scrollable">
            <div className="list-group">
                <button href="#" className="list-group-item list-group-item-action active">Cras justo odio</button>
                <button href="#" className="list-group-item list-group-item-action">Dapibus ac facilisis in</button>
                <button href="#" className="list-group-item list-group-item-action">Morbi leo risus</button>
                <button className="list-group-item list-group-item-action" data-toggle="modal" data-target="#CreateAppointment" >Create Appointment</button>
                <button className="list-group-item list-group-item-action" data-toggle="modal" data-target="#CreateTrip" >Create Trip</button>
                <button className="list-group-item list-group-item-action" data-toggle="modal" data-target="#CreateCheckListItem" >Create Check List Item</button>
            </div>
        </div>
    );
    }else{
        return ""
    }
}
export default MainMenu;