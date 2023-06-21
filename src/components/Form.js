import React, { Component } from "react";
import General from "./General";
import Education from "./Education";
import Experience from "./Experience";

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            schoolName: '',
        }
    }

    

    render() {
        return (
            <div>
                
                <div className="input-field">
                    <General 
                        handleInputChange={this.props.handleInputChange}
                    />
                    <Education
                        handleInputChange={this.props.handleInputChange}
                    />
                    <Experience
                        handleInputChange={this.props.handleInputChange}
                    />
                </div>
            </div>
        )
    }
}

export default Form