import React from 'react'
import { Field, reduxForm } from 'redux-form'
import './App.css';

const SimpleForm = props => {
const { handleSubmit, pristine, submitting } = props
  
  return (

    <div id='allform'>
      <form onSubmitSuccess={handleSubmit} action="./CRUDManager">
      <div id='form'>
        <h1>Connectez-vous</h1>
        <div>
          <label>Username</label>
          <div>
            <Field
              name="username"
              component="input"
              type="text"
              placeholder="Username"
            />
          </div>
        </div>
        <div>
          <label>Password</label>
          <div>
            <Field
              name="password"
              component="input"
              type="password"
              placeholder="Password"
            />
          </div>
        </div>
        <div>
          <button type="submit" disabled={pristine || submitting}>
            Submit
          </button>
        </div>
      </div>
      </form>
    </div>
  )
}

export default reduxForm({
  form: 'simple'
})(SimpleForm)