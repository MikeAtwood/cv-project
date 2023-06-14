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
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div>
                <h1>form</h1>
                <div className="input-field">
                    <General 
                    />
                </div>
            </div>
        )
    }
}

export default Form