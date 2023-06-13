import React, { Component } from "react";

class Experience extends Component {
    constructor(props) {
        super(props)
        this.state = {
            company: '',
            position: '',
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
            <div className="info-header">
                <h2>Experience</h2>
                <div className="input-container">
                    <input 
                        placeholder="Company" 
                        style={{ border: 'none' }}
                        value={this.state.company}
                        onChange={this.handleInputChange}
                    />
                    <input 
                        placeholder="Position" 
                        style={{ border: 'none' }}
                        value={this.state.position}
                        onChange={this.handleInputChange}
                    />
                    <input 
                        placeholder="Start Date YYYY" 
                        style={{ border: 'none' }}
                        value={this.state.startDate}
                        onChange={this.handleInputChange}
                />
                    <input 
                        placeholder="End Date YYYY" 
                        style={{ border: 'none' }}
                        value={this.state.endDate}
                        onChange={this.handleInputChange}
                    />
                </div>
            </div>
        )
    }
}
export default Experience