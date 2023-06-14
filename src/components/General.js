import React, { Component } from "react";

class General extends Component {
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
            <div className="input-info">
                        <h3>General</h3>
                        <input
                            placeholder="First Name"
                            style={{ border: 'none' }}
                            type="text"
                            value={this.state.firstName}
                            onChange={this.handleInputChange}
                        />
                        <input
                            placeholder="Last Name"
                            style={{ border: 'none' }}
                            type="text"
                            value={this.state.lastName}
                            onChange={this.handleInputChange}
                        />
                        <input
                            placeholder="Email"
                            style={{ border: 'none' }}
                            type="text"
                            value={this.state.email}
                            onChange={this.handleInputChange}
                        />
                        <input
                            placeholder="Phone Number"
                            style={{ border: 'none' }}
                            type="text"
                            value={this.state.phoneNumber}
                            onChange={this.handleInputChange}
                        />
                    </div>
        )
    }
}
export default General