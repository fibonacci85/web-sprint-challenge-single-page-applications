import React from "react";
import { Link} from 'react-router-dom';
import './Home.css'


const Home = () => {
  return (
    <div className="mainBox">
      <div className='home'>
        <h1>Lambda Eats</h1>
        <h2>Where Hunger Meets Coding.</h2>
        <Link to={"/Pizza"}>
        <button>Order Now</button>
        </Link>
        <br/>
      </div>
      <div className="heroImage">
      <img src='https://images.unsplash.com/photo-1591484506290-803ed645eb54?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=807&q=80' alt="dog eating pizza"/>
      </div>

    </div>  

  );
};
export default Home;
