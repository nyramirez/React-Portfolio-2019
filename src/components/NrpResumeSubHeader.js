import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { CardMedia } from '@material-ui/core';


const NrpResumeSubHeader = () => {

    return (
        <div className="content-container subHeader">
            <div className="subHeader__content">
                <Card className="style__card">
                    <CardContent>
                        <Link className="subHeader__title" to="/objective">
                            <div className="image-container">
                                <CardMedia
                                    className="image__resume-cards"
                                    image="/images/goals-picture.jpg"
                                    title="Target Picture"
                                />
                            </div>
                            <div className="text-container">
                                <h5 className="objText">OBJECTIVE & QUALIFICATIONS</h5>
                            </div>
                        </Link>
                    </CardContent>
                </Card>
                <Card className="style__card">
                    <CardContent>
                        <Link className="subHeader__title" to="/work_experience">
                            <div className="image-container">
                                <CardMedia
                                    className="image__resume-cards"
                                    image="/images/profeesionaExp-picture.jpg"
                                    title="team working"
                                />
                            </div>
                            <div className="text-container">
                                <h5 className="objText">PROFESSIONAL EXPERIENCE</h5>
                            </div>
                        </Link>
                    </CardContent>
                </Card>
                <Card className="style__card">
                    <CardContent>
                        <Link className="subHeader__title" to="/education">
                            <div className="image-container">
                                <CardMedia
                                    className="image__resume-cards"
                                    image="/images/education-picture.jpg"
                                    title="shadow of a graduated student"
                                />
                            </div>
                            <div className="text-container">
                                <h5 className="objText">EDUCATION</h5>
                            </div>
                        </Link>
                    </CardContent>
                </Card>
            </div>

            <div className="subHeader__content">
                <Card className="style__card">
                    <CardContent>
                        <Link className="subHeader__title" to="/certification">
                            <div className="image-container">
                                <CardMedia
                                    className="image__resume-cards"
                                    image="/images/certification-picture.jpg"
                                    title="comparing stones in a wall"
                                />
                            </div>
                            <div className="text-container">
                                <h5 className="objText">CERTIFICATIONS</h5>
                            </div>
                        </Link>
                    </CardContent>
                </Card>
                <Card className="style__card">
                    <CardContent>
                        <Link className="subHeader__title" to="/technical_skills">
                            <div className="image-container">
                                <CardMedia
                                    className="image__resume-cards"
                                    image="/images/techSkills-picture.jpg"
                                    title="owl, device, bird of prey, figure, headphones, figurine, funny, workplace"
                                />
                            </div>
                            <div className="text-container">
                                <h5 className="objText">TECHNICAL SKILLS</h5>
                            </div>
                        </Link>
                    </CardContent>
                </Card>
                <Card className="style__card">
                    <CardContent>
                        <Link className="subHeader__title" to="/soft_skills">
                            <div className="image-container">
                                <CardMedia
                                    className="image__resume-cards"
                                    image="/images/softSkills-picture.jpg"
                                    title="young man with process map in whiteboard"
                                />
                            </div>
                            <div className="text-container">
                                <h5 className="objText">SOFT SKILLS</h5>
                            </div>
                        </Link>
                    </CardContent>
                </Card>
            </div>
            <div className="subHeader__content">
                <Card className="style__card">
                    <CardContent>
                        <Link className="subHeader__title" to="/projects">
                            <div className="image-container">
                                <CardMedia
                                    className="image__resume-cards"
                                    image="/images/projects-picture.jpg"
                                    title="woman with idea, plan action sign"
                                />
                            </div>
                            <div className="text-container">
                                <h5 className="objText">COMPLETED PROJECTS</h5>
                            </div>
                        </Link>
                    </CardContent>
                </Card>
                <Card className="style__card">
                    <CardContent>
                        <Link className="subHeader__title" to="/references">
                            <div className="image-container">
                                <CardMedia
                                    className="image__resume-cards"
                                    image="/images/reference-picture.jpg"
                                    title="group of volunteers with thumbs up"
                                />
                            </div>
                            <div className="text-container">
                                <h5 className="objText">REFERENCES</h5>
                            </div>
                        </Link>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
};


export default NrpResumeSubHeader;