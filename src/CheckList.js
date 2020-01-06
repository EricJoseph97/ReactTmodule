import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faMinus } from '@fortawesome/free-solid-svg-icons'


class CheckList extends React.Component { 
  constructor(props){
    super(props);
    this.state = {
      checklist: []
    }

  }


  componentDidMount(){
    console.log(this.props.checklist)
    this.setState({checklist: this.props.checklist})
  }



  render() {
    if(this.props.checklist){
      return(
        <div>
        {this.props.checklist.map((item, id) => 
            <CheckListItem 
                key={id}       
                name={item.itemName}
                checked={item.checked}
                toggleConfirmationAt={this.props.toggleConfirmationAt}
            />
        )}
      </div>
      
      );
    }else{
      return "No Items Defined"
    }
  }
}

    const CheckListItem = (props) => {

      let iconType = props.checked ? faCheck : faMinus;
      let textColor = props.checked ? "text-success" : "text-danger";

      return(
          <div className="list-group-item" onClick={props.toggleConfirmationAt}>            
              <FontAwesomeIcon icon={iconType} className={textColor} onClick={props.toggleConfirmationAt}/>
              <span >{props.name}</span>
          </div>
      );
  }
export default CheckList;

    