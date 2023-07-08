import React, { Component } from "react";

class Experience extends Component {
    render() {
        const {
            experience,
            handleExperienceChange
        } = this.props;
            
        const {
            index,
            companyName,
            position, 
            mainTasks,
            jobStartDate,
            jobEndDate,
        } = experience

        return(
            <div className="input-info">
                <h3>Experience</h3>
                <input
                    placeholder="Company"
                    type="text"
                    style={{ border: 'none' }}
                    name="companyName"
                    value={companyName}
                    onChange={(event) => handleExperienceChange(event, index)}
                />
                <input
                    placeholder="Position"
                    type="text"
                    style={{ border: 'none' }}
                    name="position"
                    value={position}
                    onChange={(event) => handleExperienceChange(event, index)}
                />
                <input
                    placeholder="Tasks"
                    type="text"
                    style={{ border: 'none' }}
                    name="mainTasks"
                    value={mainTasks}
                    onChange={(event) => handleExperienceChange(event, index)}
                />
                <input
                    placeholder="Start Date"
                    type="date"
                    style={{ border: 'none' }}
                    name="jobStartDate"
                    value={jobStartDate}
                    onChange={(event) => handleExperienceChange(event, index)}
                />
                <input
                    placeholder="End Date"
                    type="date"
                    style={{ border: 'none' }}
                    name="jobEndDate"
                    value={jobEndDate}
                    onChange={(event) => handleExperienceChange(event, index)}
                    min={jobStartDate}
                />
                
            </div>
        )
    }
}

export default Experience