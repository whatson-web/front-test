import React from 'react'
import ContactForm from './Myform'
import {addUser} from "../actions/user";

class ContactPage extends React.Component {

    submit = values => {
        window.location = "Home";
        console.log(values)
    };

    render() {
        return(
            <div>
                <ContactForm onClick={() => this.props.dispatch(addUser('DASHBOARD'))} onSubmit={this.submit} />
            </div>)
    }


}

export default ContactPage;