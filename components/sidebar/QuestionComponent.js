import React from 'react'
import ApplicationUsageComponent from '../associate-partner/ApplicationUsageComponent'

const QuestionComponent = () => {
  return (
      <>
          <div className='q-sidebar'>
              <div className="icon-bx-wraper  p-a30  fly-box-ho">

                  <div className="icon-content">
                      <h5 className="kam-tilte">Application Usage </h5>
                      <p>Our worldwide presence ensures the timeliness, cost efficiency compliance adherence required to ensure your production timelines are met.</p>
                      {/*<a href="#" className="btn btn-outline-secondary">Schedule An Appointment</a>*/}
                  </div>
                  <ApplicationUsageComponent/>
              </div>
          </div>

      </>
  )
}

export default QuestionComponent