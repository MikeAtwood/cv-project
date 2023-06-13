import React, { Component } from "react";

class General extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
        }
    }

    handleInputChange = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value }, () => {
            this.props.onChange(this.state)
            console.log(this.state.data)
        })
    }
    
    render() {
        return (
            <div className="header-info">
                <h2>General</h2>
                <div className="input-container">
                    <input 
                        placeholder="First Name" 
                        style={{ border: 'none'}}
                        name="firstName"
                        value={this.state.firstName}
                        onChange={this.handleInputChange}
                    />
                    <input 
                        placeholder="Last Name" 
                        style={{ border: 'none'}}
                        name="lastName"
                        value={this.state.lastName}
                        onChange={this.handleInputChange}
                        />
                    <input 
                        placeholder="Email" 
                        style={{ border: 'none'}}
                        name="email"
                        value={this.state.email}
                        onChange={this.handleInputChange}
                    />
                    <input 
                        placeholder="Phone number" 
                        style={{ border: 'none'}}
                        name="phoneNumber"
                        value={this.state.phoneNumber}
                        onChange={this.handleInputChange}
                    />
                </div>
                
            </div>
        )
    }
}

export default General