import React from 'react';
import { Router, Route, Switch} from 'react-router-dom';
import { createBrowserHistory } from "history";
import Header from '../components/Header';
import AboutPage from '../components/AboutPage';
import NrpResume from '../components/NrpResume';
import resumeObjective from '../components/resumeObjective';
import resumeExperience from '../components/resumeExperience';
import resumeEducation from '../components/resumeEducation';
import resumeCertifications from '../components/resumeCertifications';
import resumeTechnicalSkils from '../components/resumeTechnicalSkils';
import resumeSoftSkils from '../components/resumeSoftSkills';
import resumeProjects from '../components/resumeProjects';
import resumeReferences from '../components/resumeReferences';

export const history = createBrowserHistory();

//************************************

const PortfolioPage = () => {
    return(
        <div>
            <Header/>
        </div>
    )
}

const ContactPage = () => {
    return(
        <div>
            <Header/>
        </div>
    )
}

const NotFoundPage = () => {
    return(
        <div>
            <Header/>
            <h1>We are sorry. </h1>
            <h2>Your page was not found.</h2>
        </div>
    )
}

//************************************ */

const AppRouter = () => {
    return(
        <Router history={history}>
        <div>
            <Switch>
                <Route path="/" component={AboutPage} exact={true}/>
                <Route path="/portfolio" component={PortfolioPage}/>
                <Route path="/resume" component={NrpResume}/>
                <Route path="/contact" component={ContactPage}/>
                <Route path="/objective" component={resumeObjective}/>
                <Route path="/work_experience" component={resumeExperience}/>
                <Route path="/education" component={resumeEducation}/>
                <Route path="/certification" component={resumeCertifications}/>
                <Route path="/technical_skills" component={resumeTechnicalSkils}/>
                <Route path="/soft_skills" component={resumeSoftSkils}/>
                <Route path="/projects" component={resumeProjects}/>
                <Route path="/references" component={resumeReferences}/>
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
    )
}

export default AppRouter;