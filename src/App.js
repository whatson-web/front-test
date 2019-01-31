import React from 'react'
import { Field, reduxForm } from 'redux-form'

const SimpleForm = props => {
const { handleSubmit, pristine, submitting } = props
  
  return (

    <form onSubmitSuccess={handleSubmit} action="./CRUDManager">
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
    </form>
  )
}

export default reduxForm({
  form: 'simple'
})(SimpleForm)