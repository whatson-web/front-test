import React from 'react'
import { Field, reduxForm } from 'redux-form'
import "../styles/home.css"
let ContactForm = props => {
    const { handleSubmit } = props;
    return (
        <div id={"BLOC"}>

        <form   onSubmit={handleSubmit} >
            <div>
                <label id="email" htmlFor="email">Email</label>
                <Field id ="input1"  name="email" component="input" type="email" />
            </div>
            <div>
                <label id="name" htmlFor="firstName">Username</label>
                <Field id="input2" name="firstName" component="input" type="text" />
            </div>

            <button  id="button" type="submit">Submit</button>
        </form>
        </div>

    )
};

ContactForm = reduxForm({
    form: 'contact'
})(ContactForm)

export default ContactForm;



