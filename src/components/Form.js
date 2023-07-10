import React, { Component } from "react";
import General from "./General";
import Education from "./Education";
import Experience from "./Experience";
class Form extends Component {

    render() {
        const experienceSections = [
            { id: 1, title: "Section 1" }
        ]
        const { handleInputChange, handleAddExperience } = this.props;
        return (
            <div>
                <div className="input-field">
                    <General
                        handleInputChange={handleInputChange}
                    />
                    <Education
                        handleInputChange={handleInputChange}
                    />
                    {experienceSections.map((experience) => (
                        <Experience
                            key={experience.id}
                            experience={experience}
                            handleExperienceChange={this.props.handleExperienceChange}
                        />
                    ))}
                    <button onClick={() => handleAddExperience()}>Add+</button>
                </div>
            </div>
        );
    }
}
export default Form;