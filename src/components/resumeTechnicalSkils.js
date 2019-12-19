import React from 'react';
import Header from './Header';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const resumeTechnicalSkils = () => {
    return (
        <div>
            <Header />
            <h1>TECHNICAL SKILS</h1>
            <h2> Full Stack Developer</h2>
            <div className="content-container">
                <div className="graph-container">
                    <CircularProgressbar
                        value="50"
                        text="HTML"
                        circleRatio=".75"
                        className="proficiencyGraph"
                        strokeWidth="10"
                        styles={
                            buildStyles({
                                rotation: 0.3,
                            })
                        }
                    />
                    <CircularProgressbar
                        value="50"
                        text="CSS"
                        circleRatio=".75"
                        className="proficiencyGraph"
                        strokeWidth="10"
                        styles={
                            buildStyles({
                                rotation: 0.3,
                            })
                        }
                    />
                    <CircularProgressbar
                        value="50"
                        text="JavaScript"
                        circleRatio=".75"
                        className="proficiencyGraph"
                        strokeWidth="10"
                        styles={
                            buildStyles({
                                rotation: 0.3,
                            })
                        }
                    />
                </div>
            </div>
            <div className="content-container">
                <CircularProgressbar
                    value="50"
                    text="HTML"
                    circleRatio=".75"
                    className="proficiencyGraph"
                    strokeWidth="10"
                    styles={
                        buildStyles({
                            rotation: 0.3,
                        })
                    }
                />
                <CircularProgressbar
                    value="50"
                    text="CSS"
                    circleRatio=".75"
                    className="proficiencyGraph"
                    strokeWidth="10"
                    styles={
                        buildStyles({
                            rotation: 0.3,
                        })
                    }
                />
                <CircularProgressbar
                    value="50"
                    text="JavaScript"
                    circleRatio=".75"
                    className="proficiencyGraph"
                    strokeWidth="10"
                    styles={
                        buildStyles({
                            rotation: 0.3,
                        })
                    }
                />
            </div>
        </div>)
}

export default resumeTechnicalSkils;