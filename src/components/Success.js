import React from "react";
import {Link} from 'react-router-dom';


const Success = () => {
  return (
    <>
      <header>
        <h1>SUCCESS!</h1>
        <p>Your Pizza is on the way!</p>
       
        <img src='https://images.unsplash.com/photo-1591484506290-803ed645eb54?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=807&q=80' alt="dog eating pizza"/>
        <br/>
        <Link to={"/"}>
        <button>Return Home</button>
        </Link>
      </header>

    </>  

  );
};
export default Success;