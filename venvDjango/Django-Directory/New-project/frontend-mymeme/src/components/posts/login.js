
import { useFormik } from 'formik';
import React from 'react';


export default function Register(props) {



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
    
    
      
      
     
      fetch( "http://127.0.0.1:8000/api-token-auth/",

      {
        method: "POST",
        body: JSON.stringify(valuess),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'    
        } 

      }).then((response) => 
      {
        return response.json()
      })
      .then((myJson) => 
      {

        console.log(myJson.non_field_errors)
        if(myJson.non_field_errors)
        {
          if(myJson.non_field_errors[0] === "Unable to log in with provided credentials.")
          {
            alert("wrong password or username, please enter again")
          }
        }
        else
        {
          localStorage.setItem('IsLoggedIn', myJson.token);
          localStorage.setItem('user', myJson.user);
          alert(myJson.user)
          const { history } = props;

          if(history)
          { 
            history.push('/home');
          }     
        }
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







