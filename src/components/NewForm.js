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
            // companyName,
            // position,
            // mainTasks,
            // jobStartDate,
            // jobEndDate,
            experienceSections
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
                        className="extra-info"
                        type="text"
                        style={{ border: 'none' }}
                        name="schoolName"
                        value={schoolName}
                        readOnly
                    />
                    <input
                        className="more-info"
                        type="text"
                        style={{ border: 'none' }}
                        name="titleOfStudy"
                        value={titleOfStudy}
                        readOnly
                    />
                    <input
                        className="more-info"
                        type="text"
                        style={{ border: 'none' }}
                        name="studyStartDate"
                        value={studyStartDate}
                        readOnly
                    />
                    <input
                                className="more-info"
                                type="text"
                                style={{ border: 'none' }}
                                name="studyEndDate"
                                value={studyEndDate}
                                readOnly />
                    {experienceSections.map((experience, index) => (
                    <><div key={index} className="input-info">
                            
                        </div><div className="input-info">
                                <input
                                    className="extra-info"
                                    type="text"
                                    style={{ border: 'none' }}
                                    name={`companyName${index}`}
                                    value={experience.this.props.companyName}
                                    readOnly />
                                <input
                                    className="more-info"
                                    type="text"
                                    style={{ border: 'none' }}
                                    name="position"
                                    value={experience.position}
                                    readOnly />
                                <input
                                    className="more-info"
                                    type="text"
                                    style={{ border: 'none' }}
                                    name="mainTasks"
                                    value={experience.mainTasks}
                                    readOnly />
                                <input
                                    className="more-info"
                                    type="text"
                                    style={{ border: 'none' }}
                                    name="jobStartDate"
                                    value={experience.jobStartDate}
                                    readOnly />
                                <input
                                    className="more-info"
                                    type="text"
                                    style={{ border: 'none' }}
                                    name="jobEndDate"
                                    value={experience.jobEndDate}
                                    readOnly />
                            </div></>
                    ))}

                    {experienceSections}
                </div>
            </div>
        )
    }
}

export default NewForm