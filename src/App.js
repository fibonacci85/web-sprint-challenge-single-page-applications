import React from "react";
import {Route, Link} from 'react-router-dom';
import Pizza from './components/Pizza'
import Home from './components/Home';
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
    
    </>
  );
};
export default App;
