import React, { Component } from 'react'
import { useFormik } from 'formik';

export class Register extends Component {




  render() {


  const formik = useFormik({
    initialValues: {
      Username: '',
      Email: '',
      Password: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });





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
      <button type="submit">Submit</button>
    </form>
      
    )
  }
}

export default Register









