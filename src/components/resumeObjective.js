import React from 'react';
import Header from './Header';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { CardMedia } from '@material-ui/core';


const resumeObjective = () => {

    return (
        <div>
            <Header />
            <div className="content-container content-setting">
                <Card className="main-page-card">
                    <CardContent>
                        <div className="image-container">
                            <CardMedia
                                className="objective-pic"
                                image="/images/goals-picture.jpg"
                                title="Target Picture"
                            />
                        </div>
                        <div className="text-container">
                            <h1 className="objTitle">OBJECTIVE & QUALIFICATIONS</h1>
                            <p className="objText">Professional Industrial Engineer with a profound understanding of project management principles,
                            manufacturing and logistics best practices, plus web development. Excellent interpersonal and written
                            communication skills with the ability to relate effectively with individuals at all levels. Trained and
                            experienced in project management (PMI), lean manufacturing and six sigma terminology. Former process
                            improvement engineer highly organized, analytical, and decisive with strong problem-solving capabilities.
                            Teams under my supervision have demonstrated to be able to accurately perform challenging tasks with precision
                            and attention to detail while at the same time keeping a strong customer-service orientation. I am driven to
                        accomplish and surpass goals, highly competitive and possess strong teamwork skills.</p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>)
}

export default resumeObjective;