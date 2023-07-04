import React, { Component } from "react";
import {v4 as uuidv4 } from "uuid"

class Experience extends Component {
    render() {
        const {
            experience,
            handleInputChange
        } = this.props;
            
        const {
            companyName,
            position, 
            mainTasks,
            jobStartDate,
            jobEndDate,
        } = experience

        const id = uuidv4()

        return(
            <div className="input-info">
                <h3>Experience</h3>
                <input
                    placeholder="Company"
                    type="text"
                    style={{ border: 'none' }}
                    name="companyName"
                    value={companyName}
                    // onChange={(event) => onExperienceChange(index, event)}
                    onChange={(event) => handleInputChange(event, id)}
                />
                <input
                    placeholder="Position"
                    type="text"
                    style={{ border: 'none' }}
                    name="position"
                    value={position}
                    // onChange={(event) => onExperienceChange(index, event)}
                    onChange={(event) => handleInputChange(event, id)}
                />
                <input
                    placeholder="Tasks"
                    type="text"
                    style={{ border: 'none' }}
                    name="mainTasks"
                    value={mainTasks}
                    // onChange={(event) => onExperienceChange(index, event)}
                    onChange={(event) => handleInputChange(event, id)}
                />
                <input
                    placeholder="Start Date"
                    type="date"
                    style={{ border: 'none' }}
                    name="jobStartDate"
                    value={jobStartDate}
                    // onChange={(event) => onExperienceChange(index, event)}
                    onChange={(event) => handleInputChange(event, id)}
                />
                <input
                    placeholder="End Date"
                    type="date"
                    style={{ border: 'none' }}
                    name="jobEndDate"
                    value={jobEndDate}
                    // onChange={(event) => onExperienceChange(index, event)}
                    onChange={(event) => handleInputChange(event, id)}
                    min={jobStartDate}
                />
                
            </div>
        )
    }
}

export default Experience