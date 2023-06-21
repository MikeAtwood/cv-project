import React, { Component } from "react";

class NewForm extends Component {


    render() {
        const { 
            firstName, 
            lastName, 
            email, 
            phoneNumber, 
            schoolName, 
            titleOfStudy, 
            studyStartDate, 
            studyEndDate, 
            companyName, 
            position,
            mainTasks,
            jobStartDate,
            jobEndDate
        } = this.props

        return (
            <div className="input-field">
                <div className="input-info">
                    <input 
                        className="newform-general"
                        type="text"
                        style={{ border: "none" }}
                        name="firstName"
                        value={firstName}
                        readOnly
                    />
                    <input 
                        className="newform-general"
                        type="text"
                        style={{ border: "none" }}
                        name="lastName"
                        value={lastName}
                        readOnly
                    />
                    <input 
                        type="email"
                        style={{ border: "none" }}
                        name="email"
                        value={email}
                        readOnly
                    />
                    <input 
                        type="tel"
                        style={{ border: "none" }}
                        name="phoneNumber"
                        value={phoneNumber}
                        readOnly
                    />
                </div>
                <div className="input-info">
                    <input
                        className="newform-general"
                        type="text"
                        style={{ border: 'none' }}
                        name="schoolName"
                        value={schoolName}
                        readOnly
                    />
                    <input
                        className="newform-general"
                        type="text"
                        style={{ border: 'none' }}
                        name="titleOfStudy"
                        value={titleOfStudy}
                        readOnly
                    />
                    <input
                        type="text"
                        style={{ border: 'none' }}
                        name="studyStartDate"
                        value={studyStartDate}
                        readOnly
                    />
                    <input
                        type="text"
                        style={{ border: 'none' }}
                        name="studyEndDate"
                        value={studyEndDate}
                        readOnly
                    />
                </div>
                <div className="input-info">
                    <input
                        className="newform-general"
                        type="text"
                        style={{ border: 'none' }}
                        name="companyName"
                        value={companyName}
                        readOnly
                    />
                    <input
                        className="newform-general"
                        type="text"
                        style={{ border: 'none' }}
                        name="position"
                        value={position}
                        readOnly
                    />
                    <input
                        type="text"
                        style={{ border: 'none' }}
                        name="mainTasks"
                        value={mainTasks}
                        readOnly
                    />
                    <input
                        type="text"
                        style={{ border: 'none' }}
                        name="jobStartDate"
                        value={jobStartDate}
                        readOnly
                    />
                    <input
                        type="text"
                        style={{ border: 'none' }}
                        name="jobEndDate"
                        value={jobEndDate}
                        readOnly
                    />
                </div>
            </div>
        )
    }
}

export default NewForm