import React from "react";
import {useFormik} from 'formik'
// TODO: import useFormik from formik library

function App() {
  const formik = useFormik({
    initialValues:{
      email:'',
      password:'',
      },
      onSubmit: values => {
        console.log('form', values)
        alert('Login Successful')
      },
      validate: values => {
        let errors = {};

        if(!values.password) {
          errors.password = 'field required'
        }
        if(!values.email) {
          errors.email = 'field required'
        }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
     errors.email = 'Username should be an email';
   }

        return errors;
      }
  })

  return (
    <div>
    <h1>login</h1>
   
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="email">username</label>
        <input id="emailField" name="email" value={formik.values.name} placeholder="the_dude" onChange={formik.handleChange}/>
        {formik.errors.email ? <div id="emailError" style={{color:'red'}}>{formik.errors.email}</div> : null }
        <label htmlFor="password">password</label>
        <input id="pswField" name="password"  value={formik.values.password} placeholder="*****" onChange={formik.handleChange}/>
        {formik.errors.password ? <div id="pswError" style={{color:'red'}}>{formik.errors.password}</div> : null }
       
        <button id="submitBtn" type="submit">Submit</button>
      </form>
    
  </div>
  );
}

export default App;
