import React from "react";
import { Link} from 'react-router-dom';


const Home = () => {
  return (
    <>
      <header>
        <h1>Lambda Eats</h1>
        <p>Where Hunger Meets Coding.</p>
        <Link to={"/Pizza"}>
        <button>Order Now</button>
        </Link>
      </header>

    </>  

  );
};
export default Home;
