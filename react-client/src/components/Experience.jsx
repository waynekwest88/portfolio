import React from 'react';

const Experience = (props) => {
  return (
    <div id="experience-container" className="section-container">
      <h3 className="section-headers">Experience</h3>
      <div id="jobs" className="section">
        {props.experience.map((job) => {
          return (
            <div className="job-container">
              <div className="logo-container">
                <img src={job.image} className="company-logo" />
                <div id="rest">
                  <div className="job-title">{job.title}</div>
                  <div className="company">{job.company}</div>
                  <div className="light-weight">
                    <div className="date">{job.date}</div>
                    <div className="location">{job.location}</div>
                    <div className="product-description">{job.productDescription}</div>
                    {job.results.map((bulletPoint) => {
                      return <div className="results">{bulletPoint}</div>;
                    })}
                  </div>
                </div>
              </div>
              
            </div>
          )
        })}
    </div>
    </div>
  )
}

export default Experience;

