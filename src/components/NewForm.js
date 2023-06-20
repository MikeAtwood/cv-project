import React, { Component } from "react";
import General from "./General";

class NewForm extends Component {


    render() {
        const { firstName, lastName, email, phoneNumber, handleInputChange} = this.props
        return (
            <div className="input-field">
                <div className="input-info">
                    <General
                        firstName={firstName}
                        lastName={lastName}
                        email={email}
                        phoneNumber={phoneNumber}
                        handleInputChange={handleInputChange}
                    />
                    {/* <p>First Name: {firstName}</p>
                    <p>Last Name: {lastName}</p>
                    <p>Email: {email}</p>
                    <p>Phone Number: {phoneNumber}</p> */}
                </div>
            </div>
        )
    }
}

export default NewForm