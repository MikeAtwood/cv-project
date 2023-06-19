import React, { Component } from "react";
import General from "./General";
import NewForm from "./NewForm";

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: ''
        }
    }

    handleInputChange = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    render() {
        const { firstName, lastName, email, phoneNumber } = this.state
        return (
            <div>
                
                <div className="input-field">
                    <General 
                        firstName={this.state.firstName}
                        lastName={this.state.lastName}
                        email={this.state.email}
                        phoneNumber={this.state.phoneNumber}
                        handleInputChange={this.handleInputChange}
                    />
                    <NewForm
                        firstName={firstName}
                        lastName={lastName}
                        email={email}
                        phoneNumber={phoneNumber}
                        handleInputChange={this.handleInputChange}
                    />
                </div>
            </div>
        )
    }
}

export default Form