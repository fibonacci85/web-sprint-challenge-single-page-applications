import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import formSchema from '../validation/formSchema';
import * as yup from 'yup';
import axios from 'axios'



const Pizza = () => {

    //initial state
    const [formState, setFormState] = useState({

        name: "",
        size: "",
        peperoni: "",
        cheese: "",
        peppers: "",
        pineapple: "",
        special: ""
        
        });

    //state for errors

const [errors, setErrors] = useState({
    name: "",
    size: "",
    peperoni: "",
    cheese: "",
    peppers: "",
    pineapple: "",
    special: ""
  });


//button state

const [buttonDisabled, setButtonDisabled] = useState(true);

useEffect(() => {
formSchema.isValid(formState).then(valid => {
  setButtonDisabled(!valid)
})
},[formState]);

//post state

const [post, setPost] = useState([]);


/////////////////////

    //validation

const validateChange = e => {
    yup.reach(formSchema, e.target.name)
    .validate(e.target.value)
    .then(valid => {
      setErrors({
        ...errors,[e.target.name] : ""
      });
    })
  .catch(err => {
      setErrors({
          ...errors,[e.target.name] : err.errors[0]
      });
  });
};


const formSubmit = event => {
    event.preventDefault();
    axios.post('https://reqres.in/api/users', formState)
    .then(response => {
        setPost(response.data);
        console.log("success",post);
        
        setFormState({
            name: "",
            size: "",
            peperoni: "",
            cheese: "",
            peppers: "",
            pineapple: "",
            special: ""
        })
    })
    .catch( err => {
        console.log(err.response)
    })
};

const inputChange = event => {
    event.persist();
    const newFormData = {
      ...formState, [event.target.name] : event.target.type === 
      "checkbox" ? event.target.checked : event.target.value
    };
    validateChange(event);
    setFormState(newFormData);
  };
  return (
      // THE FORM
      <header>
    <>
        <h1>ORDER YOUR PIZZA</h1>
        <p>Fill out the form below</p>

      <br/>

      <form onSubmit={formSubmit}>
        <label htmlFor="name">
          Name:
          <input
          className="name" 
          type="text"
          name="name"
          id="name"
          value={formState.name}
          onChange={inputChange}
          />
          {errors.name.length > 0 ? <p className="error">{errors.name}</p> : null}
        </label>

        <br/>
        <br/>

        <label htmlFor="size">
          Size:
          <select
          name="size"
          id="size"
          value={formState.size}
          onChange={inputChange}
          >
              <option value="">Choose a size</option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>

          </select>
      
        </label>

        <br/>
        <br/>
        <p>Toppings:</p>    
        <label htmlFor="peperoni">
          Peperoni:
          <input 
          type="checkbox"
          name="peperoni"
          id="peperoni"
          checked={formState.peperoni}
          onChange={inputChange}
          />
         
        </label>
        <label htmlFor="cheese">
          Cheese:
          <input 
          type="checkbox"
          name="cheese"
          id="cheese"
          checked={formState.cheese}
          onChange={inputChange}
          />
          
        </label><br/>
        <label htmlFor="peppers">
          Peppers:
          <input 
          type="checkbox"
          name="peppers"
          id="peppers"
          checked={formState.peppers}
          onChange={inputChange}
          />
         
        </label>
        <label htmlFor="pineapple">
          Pineapple:
          <input 
          type="checkbox"
          name="pineapple"
          id="pineapple"
          checked={formState.pineapple}
          onChange={inputChange}
          />
    
        </label>
        

        <br/>
        <br/>

        <label htmlFor="special">
        Special Instructions:<br/>
          <textarea 
          name="special"
          id="special"
          value={formState.special}
          onChange={inputChange}
          />
         
        </label>

        <br/>
        <br/>
        
        <button disabled={buttonDisabled}>Submit Order</button>
        
        <br/>
        <Link to={"/"}>
        <button>Cancel</button>
        </Link>

        <pre>{JSON.stringify(post, null, 2)}</pre>
        
      </form>
    </>
    </header>
  );
};



export default Pizza;
