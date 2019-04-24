import React from "react";
import { Field, reduxForm } from "redux-form";
import "./styles/ManageUsersStyle.scss";

let loginForm = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <center>
        <div className="form-group">
          <label>Mail</label>
          <br />
          <Field name="mail" component="input" type="email" label="mail" />
        </div>
        <div className="form-group">
          <label>Passwords</label>
          <br />
          <Field
            name="password"
            component="input"
            type="password"
            label="password"
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            Valider
          </button>
        </div>
      </center>
    </form>
  );
};
loginForm = reduxForm({
  form: "login"
})(loginForm);

export default loginForm;
