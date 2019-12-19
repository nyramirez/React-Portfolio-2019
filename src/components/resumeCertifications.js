import React from 'react';
import Header from './Header';

const resumeCertifications = () => {
    return(
        <div>
            <Header/>
             <h1>CERTIFICATIONS</h1>
             <table>
                <tr>
                    <th>Institution</th>
                    <th>Certification</th>
                    <th>Finished</th>
                    <th>Type</th>
                </tr>
                <tr>
                    <td>Georgia Institute of Technology</td>
                    <td>Computing in Python II: Control Structures</td>
                    <td>Oct 2019</td>
                    <td>Certification</td>
                </tr>
                <tr>
                    <td>Georgia Institute of Technology</td>
                    <td>Computing in Python I: Fundamentals and Procedural Programming</td>
                    <td>May 2019</td>
                    <td>Certification</td>
                </tr>
                <tr>
                    <td>Udemy</td>
                    <td> The Complete React Developer Course</td>
                    <td>04/19/2019</td>
                    <td>Certification</td>
                </tr>
                <tr>
                    <td>The University of Texas at Austin (UT)</td>
                    <td>Full Stack Developer</td>
                    <td>Feb 2019</td>
                    <td>Coding Bootcamp</td>
                </tr>
                <tr>
                    <td>Project Management Institute</td>
                    <td>Certified Associate in Project Management Training</td>
                    <td>Jan 2018</td>
                    <td>Training</td>
                </tr>
                <tr>
                    <td>Vallourec University</td>
                    <td>Lean Manufacture Engineer</td>
                    <td>Jun 2015</td>
                    <td>Certification</td>
                </tr>
                <tr>
                    <td>Vallourec University</td>
                    <td>Sig Sigma</td>
                    <td>Aug 2014</td>
                    <td>Certification</td>
                </tr>
             </table>

            
        </div>)
}

export default resumeCertifications;