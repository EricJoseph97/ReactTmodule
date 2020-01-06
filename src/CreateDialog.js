import React from 'react';



const CreateDialog = (props) => {


return(

    <div className="modal fade" id={props.modalID} tabIndex="-1" role="dialog" aria-labelledby="modal" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="modal">{props.title}</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div>
                  {props.children}  
                </div>


            </div>
        </div>
    </div>

);
    
}

export default CreateDialog