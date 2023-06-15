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
                            value={this.props.firstName}
                            onChange={this.props.handleInputChange}
                        />
                        <input
                            placeholder="Last Name"
                            style={{ border: 'none' }}
                            type="text"
                            value={this.props.lastName}
                            onChange={this.props.handleInputChange}
                        />
                        <input
                            placeholder="Email"
                            style={{ border: 'none' }}
                            type="text"
                            value={this.props.email}
                            onChange={this.props.handleInputChange}
                        />
                        <input
                            placeholder="Phone Number"
                            style={{ border: 'none' }}
                            type="text"
                            value={this.props.phoneNumber}
                            onChange={this.props.handleInputChange}
                        />
                    </div>
        )
    }
}
export default General