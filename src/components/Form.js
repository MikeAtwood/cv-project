import React, { Component } from 'react';
import '../index.css'
import General from './General';
import Education from './Education';
import Experience from './Experience';

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
          data: {
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
          }
        }
      }

      handleChange = (values) => {
        this.setState((prevState) => ({
            data: {
                ...prevState.data,
                ...values,
            }
        }))
      }
    render() {
        return (
            <div className='form'>
                <General onChange={(data) => this.setState({ data })} />
                <hr className='section-line' />
                <Education />
                <hr className='section-line' />
                <Experience />
            </div>
        )
    }
}

export default Form