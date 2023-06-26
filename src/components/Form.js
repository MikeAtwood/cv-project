import React, { Component } from "react";
import General from "./General";
import Education from "./Education";
import Experience from "./Experience";

class Form extends Component {
   

    

   render() {
        const { experienceSections } = this.props
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
                        onExperienceChange={this.props.handleExperienceChange}
                    />
                     {experienceSections}
                     <button onClick={this.handleAddExperience}>Add+</button>
                </div>
            </div>
        )
    }
}

export default Form