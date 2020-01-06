import React from 'react'
import CardList from './CardList'

const AppContent = (props) => {

      return (
        <div className="col-lg-6 col-md-9 col-sm-auto col-xl-8 p-0 app-scrollable" >
            <CardList />
        </div>
      );
  }

export default AppContent;