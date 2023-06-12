import React, { Component } from "react";

class General extends Component {

    render() {
        return (
            <div className="header-info">
                <h2>General</h2>
                <div className="input-container">
                    <input placeholder="First Name" style={{ border: 'none'}}></input>
                    <input placeholder="Last Name" style={{ border: 'none'}}></input>
                    <input placeholder="Email" style={{ border: 'none'}}></input>
                    <input placeholder="Phone number" style={{ border: 'none'}}></input>
                </div>
                
            </div>
        )
    }
}

export default General