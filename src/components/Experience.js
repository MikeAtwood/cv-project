import React, { Component } from "react";

class Experience extends Component {
    render() {
        const {
            // experience,
            handleExperienceChange
        } = this.props;
            
        // const {
        //     id,
        //     companyName,
        //     position, 
        //     mainTasks,
        //     jobStartDate,
        //     jobEndDate,
        // } = experience

        return(
            <div className="input-info">
                <h3>Experience</h3>
                <input
                    placeholder="Company"
                    type="text"
                    style={{ border: 'none' }}
                    name="companyName"
                    value={this.props.companyName}
                    onChange={(event) => handleExperienceChange(event, this.props.experience.id)}
                />
                <input
                    placeholder="Position"
                    type="text"
                    style={{ border: 'none' }}
                    name="position"
                    value={this.props.position}
                    onChange={(event) => handleExperienceChange(event, this.props.experience.id)}
                />
                <input
                    placeholder="Tasks"
                    type="text"
                    style={{ border: 'none' }}
                    name="mainTasks"
                    value={this.props.mainTasks}
                    onChange={(event) => handleExperienceChange(event, this.props.experience.id)}
                />
                <input
                    placeholder="Start Date"
                    type="date"
                    style={{ border: 'none' }}
                    name="jobStartDate"
                    value={this.props.jobStartDate}
                    onChange={(event) => handleExperienceChange(event, this.props.experience.id)}
                />
                <input
                    placeholder="End Date"
                    type="date"
                    style={{ border: 'none' }}
                    name="jobEndDate"
                    value={this.props.jobEndDate}
                    onChange={(event) => handleExperienceChange(event, this.props.experience.id)}
                    min={this.props.jobStartDate}
                />
                
            </div>
        )
    }
}

export default Experience