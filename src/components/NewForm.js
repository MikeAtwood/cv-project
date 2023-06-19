import React, { Component } from "react";

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
        const { firstName, lastName, email, phoneNumber } = this.props
        return (
            <div className="input-field">
                <div className="input-info">
                    <input type="text" name="firstName" value={firstName} readOnly />
                    <input type="text" name="lastName" value={lastName} readOnly />
                    <input type="email" name="email" value={email} readOnly />
                    <input type="tel" name="phoneNumber" value={phoneNumber} readOnly />

                </div>
            </div>
        )
    }
}

export default NewForm