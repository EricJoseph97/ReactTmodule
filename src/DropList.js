import React from 'react';
import propTypes from 'prop-types';

const DropList = props => 
    <div className="input-group mb-3">
        <select name={props.name} value={props.value} className="custom-select" onChange={props.onChange} >    
        {props.droplist.map((item, id) => 
            <DropListItem 
                key={id}
                item={item}       
            />
        )}
        </select>
    </div>;

    DropList.propTypes = {
      droplist: propTypes.array.isRequired,

    };


    const DropListItem = props => <option value={props.item.id}>{props.item.itemName}</option>
    




export default DropList;
