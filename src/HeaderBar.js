import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'



const HeaderBar = (props) => {


        return (
            <div className="navbar navbar-light navbar-expand-lg bg-light shadow-sm head">
                <FontAwesomeIcon className="menu-toggle" icon={faBars} onClick={props.handleMenuToggle}/>
                <div className="navbar-brand">
                    {props.brand}
                </div>
                <span className="navbar-nav flex-row ml-md-auto d-md-flex fa-2x ">
                    <span className="icon ml-1">
                        <i className="fas fa-home" />
                    </span>
                    <span className="icon ml-1">
                        <i className="fas fa-plus" data-toggle="modal" data-target="#CreateNotification"/>
                    </span>
                    <span className="icon ml-1">
                        {props.children}
                    </span>
                </span>    
            </div>
        );

}


export default HeaderBar;