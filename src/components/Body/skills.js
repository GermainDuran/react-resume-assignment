import React from 'react';
import '../../assets/styles/_body.scss';

const Skills = () =>{
    return(
      <div>
      <h3 className="section">Skills</h3>
      <ul className="Job" >

        <div className="row">
          <div className="column">Java</div>
          <div className="column">Ruby on Rails</div>
          <div className="column">React</div>
        </div>
        <div className="row">
          <div className="column">Javascript</div>
          <div className="column">Data Entry</div>
          <div className="column">GitHub</div>
        </div>
        <div className="row">
          <div className="column">SQL</div>
          <div className="column">Microsoft Office</div>
          <div className="column">E-commerce</div>
        </div>
      </ul>
      </div>
    )
}

export default Skills;
