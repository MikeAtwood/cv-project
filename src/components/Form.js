import React, { Component } from "react";
import { v4 as uuidv4 } from 'uuid'
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
                    {experienceSections.map((experience) => (
                        <Experience
                            key={uuidv4()}
                            experience={experience}
                            handleInputChange={handleInputChange}
                            // Pass other necessary props here
                        />
                    ))}
                    <button onClick={() => handleAddExperience()}>Add+</button>
                </div>
            </div>
        );
    }
}
 export default Form;