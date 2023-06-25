import React, { Component } from "react";

class Experience extends Component {
    render() {
        return(
            <div className="input-info">
                <h3>Experience</h3>
                <input
                    placeholder="Company"
                    type="text"
                    style={{ border: 'none' }}
                    name="companyName"
                    value={this.props.companyName}
                    onChange={(event) => this.props.handleInputChange(event)}
                />
                <input
                    placeholder="Position"
                    type="text"
                    style={{ border: 'none' }}
                    name="position"
                    value={this.props.position}
                    onChange={(event) => this.props.handleInputChange(event)}
                />
                <input
                    placeholder="Tasks"
                    type="text"
                    style={{ border: 'none' }}
                    name="mainTasks"
                    value={this.props.mainTasks}
                    onChange={(event) => this.props.handleInputChange(event)}
                />
                <input
                    placeholder="Start Date"
                    type="date"
                    style={{ border: 'none' }}
                    name="jobStartDate"
                    value={this.props.jobStartDate}
                    onChange={(event) => this.props.handleInputChange(event)}
                />
                <input
                    placeholder="End Date"
                    type="date"
                    style={{ border: 'none' }}
                    name="jobEndDate"
                    value={this.props.jobEndDate}
                    onChange={(event) => this.props.handleInputChange(event)}
                    min={this.props.jobStartDate}
                />
               
            </div>
        )
    }
}

export default Experience