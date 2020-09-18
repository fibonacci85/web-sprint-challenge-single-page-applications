import React from "react";
import {Route, Link} from 'react-router-dom';
import Pizza from './components/Pizza'
import Home from './components/Home';
import Success from './components/Success'
import * as yup from 'yup'



const App = () => {
  return (
    <>
     <Route exact path="/">
          <Home />
      </Route>

      <Route path="/Pizza">
          <Pizza />
      </Route>

      <Route path="/Success">
          <Success />
      </Route>
    
    </>
  );
};
export default App;
