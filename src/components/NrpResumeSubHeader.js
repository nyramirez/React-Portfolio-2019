import React from 'react';
import { Link } from 'react-router-dom';

const NrpResumeSubHeader = () => (
    <div className="subHeader content-container">
        <div className="subHeader__content">
            <Link className="subHeader__title" to="/objective">
                <h5>OBJECTIVE & QUALIFICATIONS</h5>
            </Link>
            <Link className="subHeader__title" to="/work_experience">
                <h5>PROFESSIONAL EXPERIENCE</h5>
            </Link>
            <Link className="subHeader__title" to="/education">
                <h5>EDUCATION</h5>
            </Link>
        </div>
        <div className="subHeader__content">
            <Link className="subHeader__title" to="/certification">
                <h5>CERTIFICATIONS</h5>
            </Link>
            <Link className="subHeader__title" to="/technical_skills">
                <h5>TECHNICAL SKILLS</h5>
            </Link>
            <Link className="subHeader__title" to="/soft_skills">
                <h5>SOFT SKILLS</h5>
            </Link>
        </div>
        <div className="subHeader__content">
            <Link className="subHeader__title" to="/projects">
                <h5>COMPLETED PROJECTS</h5>
            </Link>
            <Link className="subHeader__title" to="/references">
                <h5>REFERENCES</h5>
            </Link>
        </div>
    </div>
);

export default NrpResumeSubHeader;