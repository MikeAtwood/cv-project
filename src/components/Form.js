import React, { Component } from "react";
import General from "./General";
import Education from "./Education";
import Experience from "./Experience";
 class Form extends Component {
    render() {
        const { handleInputChange, experienceSections, handleAddExperience } = this.props;
        return (
            <div>
                <div className="input-field">
                    <General 
                        handleInputChange={handleInputChange}
                    />
                    <Education
                        handleInputChange={handleInputChange}
                    />
                    {experienceSections.map((experience, index) => (
                        <Experience
                            key={index} 
                            experience={experience}
                            handleInputChange={handleInputChange}
                        />
                    ))}
                    <button onClick={() => handleAddExperience()}>Add+</button>
                </div>
            </div>
        );
    }
}
 export default Form;