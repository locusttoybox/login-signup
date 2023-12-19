import React from 'react';
import './TwoRowFlexGrid.css';
import LoginSignup from'./LoginSignupBase';


const Container = () => {

  return ( 
    <div className="row">
      <div className="column-1">
        <div className="welcome">
          <h1>Welcome to your name day app</h1>
        </div>
      </div>
      <div className="column-2">
        <div className="login-signup">
          <LoginSignup />
        </div>
      </div>
    </div>
  )
}

export default Container;

