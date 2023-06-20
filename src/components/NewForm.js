import React, { Component } from "react";

class NewForm extends Component {


    render() {
        const { firstName, lastName, email, phoneNumber} = this.props
        return (
            <div className="input-field">
                <div className="input-info">
                    <input 
                        type="text"
                        style={{ border: "none" }}
                        name="firstName"
                        value={firstName}
                        readOnly
                    />
                    <input 
                        type="text"
                        style={{ border: "none" }}
                        name="lastName"
                        value={lastName}
                        readOnly
                    />
                    <input 
                        type="email"
                        style={{ border: "none" }}
                        name="email"
                        value={email}
                        readOnly
                    />
                    <input 
                        type="tel"
                        style={{ border: "none" }}
                        name="phoneNumber"
                        value={phoneNumber}
                        readOnly
                    />
                </div>
            </div>
        )
    }
}

export default NewForm