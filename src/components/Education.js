import React, { Component } from "react";

class Education extends Component {
    constructor(props) {
        super(props)
        this.state = {
            schoolName: '',
            degree: '',
            startDate: '',
            endDate: ''
        }
    }

    handleInputChange = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className="header-info">
                <h2>Education</h2>
                <div className="input-container">
                    <input 
                        placeholder="School" 
                        style={{ border: 'none' }}
                        name="schoolName"
                        value={this.state.schoolName}
                        onChange={this.handleInputChange}
                    />
                    <input 
                        placeholder="Degree" 
                        style={{ border: 'none' }}
                        name="degree"
                        value={this.state.degree}
                        onChange={this.handleInputChange}
                    />
                    <input 
                        placeholder="From YYYY" 
                        style={{ border: 'none' }}
                        name="startDate"
                        value={this.state.startDate}
                        onChange={this.handleInputChange}
                    />
                    <input 
                        placeholder="To YYYY or Present"
                        style={{ border: 'none' }}
                        name="endDate"
                        value={this.state.endDate}
                        onChange={this.handleInputChange}
                    />
                </div>
            </div>
        )
    }
}

export default Education