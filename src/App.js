import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';
import NewForm from './components/NewForm';
import Experience from './components/Experience';

class App extends Component {
  constructor(props) {
    super(props)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.state = {
      newFormData: {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        schoolName: '',
        titleOfStudy: '',
        studyStartDate: '',
        studyEndDate: '',
        numExperiences: 0, // add numExperiences property
        maxExperiences: 5, // add maxExperiences property
        experiences: [
          {
            companyName: '',
            position: '',
            mainTasks: '',
            jobStartDate: '',
            jobEndDate: '',
          }
        ]
      }
    }
  }

  // handleInputChange = (event) => {
  //   const { name, value } = event.target
  //   this.setState(prevState => ({
  //     newFormData: {
  //       ...prevState.newFormData,
  //       [name]: value,
  //       experiences: prevState.newFormData.experiences.map(experience => ({
  //         ...experience,
  //         [name]: value
  //       }))
  //     }
  //   }))
  // }


  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState(prevState => {
      const updatedExperiences = prevState.newFormData.experiences.map(experience => ({
        ...experience,
        [name]: value
      }));
      return {
        newFormData: {
          ...prevState.newFormData,
          [name]: value,
          experiences: updatedExperiences
        }
      };
    });
  }

  createNewExperience = () => {
    return {
      companyName: '',
      position: '',
      mainTasks: '',
      jobStartDate: '',
      jobEndDate: ''
    }
  }

handleAddExperience = () => {
  const { newFormData } = this.state;
  const { experiences, maxExperiences } = newFormData;
  if (experiences.length < maxExperiences) {
    const newExperience = this.createNewExperience();
    this.setState(prevState => {
      const newExperiences = [...prevState.newFormData.experiences, newExperience];
      return {
        newFormData: {
          ...prevState.newFormData,
          experiences: newExperiences,
          numExperiences: newExperiences.length
        }
      };
    });
  }
};

  // handleExperienceChange = (index, event) => {
  //   const { newFormData } = this.state
  //   const { experiences } = newFormData
  //   const { name, value } = event.target
  //   const updatedExperiences = [...experiences]
  //   updatedExperiences[index] = {
  //     ...updatedExperiences[index],
  //     [name]: value
  //   }

  //   const updatedFormData = {
  //     ...newFormData,
  //     experiences: updatedExperiences
  //   }

  //   this.setState({
  //     newFormData: updatedFormData
  //   })
  // }

  render() {
    
   
  const { experiences } = this.state.newFormData
  const experienceSections = experiences.map((experience, index) => {
    const { companyName, position, mainTasks, jobStartDate, jobEndDate } = experience;
    return (
      <Experience
        key={index}
        index={index}
        companyName={companyName}
        position={position}
        mainTasks={mainTasks}
        jobStartDate={jobStartDate}
        jobEndDate={jobEndDate}
        handleInputChange={this.handleInputChange}
      />
    )
  });

    return (
      <div className="App">
        <div className='column'>
          <h1>form</h1>
          <Form
            newFormData={this.state.newFormData}
            handleInputChange={this.handleInputChange}
            handleAddExperience={this.handleAddExperience}
            onExperienceChange={this.handleExperienceChange}
            experienceSections={experienceSections}
          />
        </div>
        <div className='column'>
          <h1>new form</h1>
          <NewForm
            firstName={this.state.newFormData.firstName}
            lastName={this.state.newFormData.lastName}
            email={this.state.newFormData.email}
            phoneNumber={this.state.newFormData.phoneNumber}
            schoolName={this.state.newFormData.schoolName}
            titleOfStudy={this.state.newFormData.titleOfStudy}
            studyStartDate={this.state.newFormData.studyStartDate}
            studyEndDate={this.state.newFormData.studyEndDate}
            // companyName={this.state.newFormData.companyName}
            // position={this.state.newFormData.position}
            // mainTasks={this.state.newFormData.mainTasks}
            // jobStartDate={this.state.newFormData.jobStartDate}
            // jobEndDate={this.state.newFormData.jobEndDate}
            // updatedExperiences={this.state.updatedExperiences}
            experiences={this.state.newFormData.experiences}
            experienceSections={experienceSections}
            handleInputChange={this.handleInputChange}
          />
        </div>

      </div>
    );
  }
}

export default App;
