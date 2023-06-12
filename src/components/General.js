import React, { Component } from "react";

class General extends Component {

    render() {
        return (
            <div>
                <h1>General</h1>
                <input placeholder="Name" style={{ border: 'none'}}></input>
                <input placeholder="Email" style={{ border: 'none'}}></input>
                <input placeholder="Phone number" style={{ border: 'none'}}></input>
            </div>
        )
    }
}

export default General