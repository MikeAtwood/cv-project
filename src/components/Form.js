import React, { Component } from "react";
import General from "./General";
import Education from "./Education";
import Experience from "./Experience";

class Form extends Component {
   

    

   render() {
        const { handleInputChange, handleExperienceChange, experienceSections, handleAddExperience } = this.props
        return (
            <div>
                <div className="input-field">
                    <General 
                        handleInputChange={handleInputChange}
                    />
                    <Education
                        handleInputChange={handleInputChange}
                    />
                    <Experience
                        handleInputChange={handleInputChange}
                        onExperienceChange={handleExperienceChange}
                    />
                     {experienceSections}
                     <button onClick={() => handleAddExperience()}>Add+</button>
                </div>
            </div>
        )
    }
}

export default Form