
import { useFormik } from 'formik';
import React, { useState } from 'react';

import UploadButton from "./UploadButton";

export default function Register() {

  const[pfs,setPf] = useState(null)

  const formik = useFormik({
    initialValues: {
      Username: '',
      Email: '',
      Password: '',
      Password3:"",
    },
    onSubmit: values => {
     if(values.Password === values.Password3)
     {
           

      const valuess = { user:
        
        {
        username: values.Username,
        email: values.Email,
        password: values.Password,
        profile_picture: pfs,

      }
    
    };

    var formData = new FormData();
    formData.append('username', values.Username)
    formData.append('email', values.Email)
    formData.append('password', values.Password)
    formData.append('Profile_picture', pfs)      
    alert(JSON.stringify(valuess));
      
      fetch( "http://127.0.0.1:8000/api/register",
      {
        method: "POST",
        body: formData,
      }  
      ).then((response) => {
        return response.json();
      })
      .then((Json) => {
        console.log(Json)
      }
      )

  }},});

 const  pf = (picture) => {
    console.log(picture)
    setPf(picture)
  };



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
      <label htmlFor="Email">Email</label>
      <input
        id="Email"
        name="Email"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.Email}
      />
      <label htmlFor="Password">Password</label>
      <input
        id="Password"
        name="Password"
        type="Password"
        onChange={formik.handleChange}
        value={formik.values.Password}
      />


      <label htmlFor="Password3">Password</label>
      <input
        id="Password3"
        name="Password3"
        type="Password3"
        onChange={formik.handleChange}
        value={formik.values.Password3}
      />
      <UploadButton files={pf}/>
      <button type="submit">Submit</button>
    </form>
    )
    }







