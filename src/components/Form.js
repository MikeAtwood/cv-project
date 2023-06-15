import React, { Component } from "react";
import General from "./General";

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
        const target = event.target
        const value = target.value
        const name = target.name

        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div>
                <h1>form</h1>
                <div className="input-field">
                    <General 
                        firstName={this.state.firstName}
                        lastName={this.state.lastName}
                        email={this.state.email}
                        phoneNumber={this.state.phoneNumber}
                        handleInputChange={this.handleInputChange}
                    />
                </div>
            </div>
        )
    }
}

export default Form