import React, { Component } from "react";

class Education extends Component {

    render() {
        return(
            <div>
                <h1>Education</h1>
                <input placeholder="School" style={{ border: 'none'}}></input>
                <input placeholder="Degree" style={{ border: 'none'}}></input>
                <input placeholder="From YYYY" style={{ border: 'none'}}></input>
                <input placeholder="To YYYY or Present" style={{ border: 'none'}}></input>
            </div>
        )
    }
}

export default Education