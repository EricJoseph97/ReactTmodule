import React from 'react'
import AppointmentCard from './AppointmentCard'
import CheckList from './CheckList';

class CardList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false, 
      trips: []
    }
    this.toggleConfirmationAt = this.toggleConfirmationAt.bind(this);
  }


  componentDidMount() {

    fetch('http://10.0.5.63:5000/trips')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            trips: result
          });
        
        }
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
      )
  }

  toggleConfirmationAt = (listItem) => {
    this.setState(trips => ({
      ...trips,
      checkList: {
        ...trips.checkList.listItem,
          checked: !this.checked
      }
    }));
  }

  render() {

const trips = this.state.trips.map((trip, index) =>
  <AppointmentCard key={index} tripIndex={index} id={trip.id} timeframe={trip.startTime + " - " + trip.endTime}>
    <CheckList checklist={trip.checkList} toggleConfirmationAt={this.toggleConfirmationAt}/>
  </AppointmentCard>
)

      return (
        <div>
          <div className="d-inline-flex flex-wrap justify-content-center" >
            { trips }
          </div>
        </div>
      );
  }
}

export default CardList;

