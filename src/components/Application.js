import React, { Component } from "react";

class Application extends Component {
    render() {
        const { data } = this.props
        const { firstName, lastName, email, phoneNumber } = data || {};
        return (
            <div className="application">
                <h2>Application</h2>
                <p>Name: {firstName} {lastName}</p>
                <p>Email: {email}</p>    
                <p>Phone Number: {phoneNumber}</p>
            </div>
        )
    }
}

export default Application