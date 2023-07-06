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
            experienceSections,
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
                </div>
                {experienceSections.map((experience, index) => (
                    <div className="input-info" key={index}>
                        <input
                            className="extra-info"
                            type="text"
                            style={{ border: 'none' }}
                            name={`experiences[${index}].companyName`}
                            value={experience.companyName}
                            readOnly
                        />
                        <input
                            className="more-info"
                            type="text"
                            style={{ border: 'none' }}
                            name={`experiences[${index}].position`}
                            value={experience.position}
                            readOnly
                        />
                        <input
                            className="more-info"
                            type="text"
                            style={{ border: 'none' }}
                            name={`experiences[${index}].mainTasks`}
                            value={experience.mainTasks}
                            readOnly
                        />
                        <input
                            className="more-info"
                            type="text"
                            style={{ border: 'none' }}
                            name={`experiences[${index}].jobStartDate`}
                            value={experience.jobStartDate}
                            readOnly
                        />
                        <input
                            className="more-info"
                            type="text"
                            style={{ border: 'none' }}
                            name={`experiences[${index}].jobEndDate`}
                            value={experience.jobEndDate}
                            readOnly
                        />
                    </div>
                ))}
                {/* {experienceSections} */}

            </div>
        )
    }
}

export default NewForm