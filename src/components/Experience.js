import React, { Component } from "react";

class Experience extends Component {
    render() {
        const {
            index,
            companyName,
            position, 
            mainTasks,
            jobStartDate,
            jobEndDate,
            onExperienceChange
        } = this.props;
        return(
            <div className="input-info">
                <h3>Experience</h3>
                <input
                    placeholder="Company"
                    type="text"
                    style={{ border: 'none' }}
                    name="companyName"
                    value={companyName}
                    onChange={(event) => onExperienceChange(index, event)}
                />
                <input
                    placeholder="Position"
                    type="text"
                    style={{ border: 'none' }}
                    name="position"
                    value={position}
                    onChange={(event) => onExperienceChange(index, event)}
                />
                <input
                    placeholder="Tasks"
                    type="text"
                    style={{ border: 'none' }}
                    name="mainTasks"
                    value={mainTasks}
                    onChange={(event) => onExperienceChange(index, event)}
                />
                <input
                    placeholder="Start Date"
                    type="date"
                    style={{ border: 'none' }}
                    name="jobStartDate"
                    value={jobStartDate}
                    onChange={(event) => onExperienceChange(index, event)}
                />
                <input
                    placeholder="End Date"
                    type="date"
                    style={{ border: 'none' }}
                    name="jobEndDate"
                    value={jobEndDate}
                    onChange={(event) => onExperienceChange(index, event)}
                    min={jobStartDate}
                />
                
            </div>
        )
    }
}

export default Experience