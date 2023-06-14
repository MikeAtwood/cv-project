import React, { Component } from "react";

class Application extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {
                firstName: '',
                lastName: '',
                email: '',
                phoneNumber: '',
            }
        }
    }

    handleChange = (data) => {
        this.setState({ data })
    }

    render() {
        const { data } = this.props
        const { firstName, lastName, email, phoneNumber } = data || {};
        return (
            <div className="application">
                <h2>Application</h2>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>    
                <p>Phone Number: {phoneNumber}</p>
            </div>
        )
    }
}

export default Application