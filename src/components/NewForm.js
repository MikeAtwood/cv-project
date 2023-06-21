import React, { Component } from "react";

class NewForm extends Component {


    render() {
        const { firstName, lastName, email, phoneNumber, schoolName, titleOfStudy, studyStartDate, studyEndDate, companyName } = this.props
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
                </div>
            </div>
        )
    }
}

export default NewForm