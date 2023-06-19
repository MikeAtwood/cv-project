import React, { Component } from "react";
import Form from "./Form";

class NewForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
        }
    }

    render() {
        //const { firstName, lastName, email, phoneNumber } = this.props
        return (
            <div className="input-field">
                <div className="input-info">
                    <Form />
                </div>
            </div>
        )
    }
}

export default NewForm