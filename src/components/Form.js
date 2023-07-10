import React, { Component } from "react";
import General from "./General";
import Education from "./Education";
import Experience from "./Experience";
class Form extends Component {

    render() {
        
        const { experiences, handleInputChange, handleAddExperience, handleExperienceChange } = this.props;
        return (
            <div>
                <div className="input-field">
                    <General
                        handleInputChange={handleInputChange}
                    />
                    <Education
                        handleInputChange={handleInputChange}
                    />
                    {experiences.map((experience) => (
                        <Experience
                            key={experience.id}
                            experience={experience}
                            handleExperienceChange={(event) => handleExperienceChange(event, experience.id)}
                        />
                    ))}
                    <button onClick={() => handleAddExperience()}>Add+</button>
                </div>
            </div>
        );
    }
}
export default Form;