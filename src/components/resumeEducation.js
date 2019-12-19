import React from 'react';
import Header from './Header';

const resumeEducation = () => {
    return (
        <div>
            <Header />

            <h1>Education</h1>
            <h2>The University of Texas at El Paso (UTEP)</h2>
            <img src={"/images/utep-college-of-engineering_1997884.png"} alt="UTEP logo" />
            <h3>Master of Science in Industrial Engineering</h3>
            <p>Graduation Date: May 2011</p>
            <h3>B.B.A in Supply Chain and Operations Management</h3>
            <p>Graduation Date: May 2011</p>
            <h3>B.B.A in Finance</h3>
            <p>Graduation Date: May 2011</p>
        </div>)
}

export default resumeEducation;