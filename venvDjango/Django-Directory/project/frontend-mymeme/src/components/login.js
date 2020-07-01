
import { useFormik } from 'formik';
import React from 'react';


export default function Register() {



  const formik = useFormik({
    initialValues: {
      Username: '',
      Password: '',
      
    },
    onSubmit: values => {
    
           

      const valuess =
        
        {
        username: values.Username,
        password: values.Password
      };
    
    
      
      
     
      fetch( "http://127.0.0.1:8000/api/token",

      {
        method: "POST",

        body: JSON.stringify(valuess),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        } 

      }
      
      
      ).then((response) => {

        console.log("sqihuiqhwuihsu")
        return response.json();
      })
      .then((myJson) => {



        console.log(myJson)


      }


      )


      





     

    
         

      
    
  },});





    return (



      <form onSubmit={formik.handleSubmit}>
      <label htmlFor="Username">Username</label>
      <input
        id="Username"
        name="Username"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.Username}
      />
     
      <label htmlFor="Password">Password</label>
      <input
        id="Password"
        name="Password"
        type="Password"
        onChange={formik.handleChange}
        value={formik.values.Password}
      />


      
      <button type="submit">Log in</button>
    </form>



    )


    }







