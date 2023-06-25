import React, { Component } from "react";
import General from "./General";
import Education from "./Education";
import Experience from "./Experience";

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            numExperiences: 0, // start with one Experience section
            maxExperiences: 5,
            experiences: [{ company: '', position: '', tasks: '', startDate: '', endDate: '' }]
        }
    }

    handleAddExperience = () => {
        this.setState(prevState => ({
            numExperiences: prevState.numExperiences + 1,
            experiences: [...prevState.experiences, { company: '', position: '', tasks: '', startDate: '', endDate: '' }]
        }))
    }

    handleExperienceChange = (index, event) => {
        const { name, value } = event.target
        const experiences = [...this.state.experiences]
        experiences[index][name] = value
        this.setState({ experiences })
    }

    render() {
        const { numExperiences, experiences } = this.state
        const experienceSections = []
        for (let i = 0; i < numExperiences; i++) {
            experienceSections.push(
                <Experience
                    key={i}
                    index={i}
                    company={experiences[i].company}
                    position={experiences[i].position}
                    tasks={experiences[i].tasks}
                    startDate={experiences[i].startDate}
                    endDate={experiences[i].endDate}
                    onExperienceChange={this.handleExperienceChange}
                />
            )
        }
        return (
            <div>
                
                <div className="input-field">
                    <General 
                        handleInputChange={this.props.handleInputChange}
                    />
                    <Education
                        handleInputChange={this.props.handleInputChange}
                    />
                    <Experience
                        handleInputChange={this.props.handleInputChange}
                    />
                     {experienceSections}
                     <button onClick={this.handleAddExperience}>Add+</button>
                </div>
            </div>
        )
    }
}

export default Form