import * as yup from 'yup'


export default yup.object().shape({
  name: yup.string()
    .required('Name is required')
    .min(2, 'minimum 2 characters'),

  size: yup.string()
  .required('choose a side'),  
  
  peperoni: yup.boolean(),
  peppers: yup.boolean(), 
  cheese: yup.boolean(), 
  pineapple: yup.boolean(),
  
  special: yup.string()
  .required('Please provide instructions'),
  
    
})
