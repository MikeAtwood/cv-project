import React, { Component } from "react";

class Education extends Component {
    render() {
        return(
            <div className="input-info">
                <h3>Education</h3>
                <input
                    placeholder="School"
                    style={{ border: 'none' }}
                    type="text"
                    name="schoolName"
                    value={this.props.schoolName}
                    onChange={(event) => this.props.handleInputChange(event)}
                />
                <input 
                    placeholder="Subject"
                    style={{ border: 'none' }}
                    type="text"
                    name="titleOfStudy"
                    value={this.props.titleOfStudy}
                    onChange={(event) => this.props.handleInputChange(event)}
                />
                <input 
                    placeholder="Start date"
                    style={{ border: 'none' }}
                    type="date"
                    name="studyStartDate"
                    value={this.props.studyStartDate}
                    onChange={(event) => this.props.handleInputChange(event)}
                />
                <input
                    placeholder="End Date"
                    style={{ border: 'none' }}
                    type="date"
                    name="studyEndDate"
                    value={this.props.studyEndDate}
                    onChange={(event) => this.props.handleInputChange(event)}
                />
            </div>
        )
    }
}

export default Education