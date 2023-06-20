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

    

    render() {
        return (
            <div>
                
                <div className="input-field">
                    <General 
                        firstName={this.props.firstName}
                        lastName={this.props.lastName}
                        email={this.props.email}
                        phoneNumber={this.props.phoneNumber}
                        handleInputChange={this.handleInputChange}
                    />
                    
                </div>
            </div>
        )
    }
}

export default Form