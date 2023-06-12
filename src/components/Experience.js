import React, { Component } from "react";

class Experience extends Component {

    render() {
        return (
            <div className="info-header">
                <h2>Experience</h2>
                <div className="input-container">
                    <input placeholder="Company" style={{ border: 'none' }}></input>
                    <input placeholder="Position" style={{ border: 'none' }}></input>
                    <input placeholder="Start Date YYYY" style={{ border: 'none' }}></input>
                    <input placeholder="End Date YYYY" style={{ border: 'none' }}></input>
                </div>
            </div>
        )
    }
}
export default Experience