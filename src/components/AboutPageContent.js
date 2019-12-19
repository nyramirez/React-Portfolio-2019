import React from 'react';
import Plx from 'react-plx';

const AboutPageContent = () => {
    const parallaxData = [
        {
            start: 0,
            end: 100,
            properties: [
                {
                    startValue: 0.9,
                    endValue: .8,
                    property: 'scale',
                },
                {
                    startValue: -8,
                    endValue: -6,
                    property: 'rotate',
                },
            ],
        },
        {
            start: 100,
            end: 600,
            properties: [
                {
                    startValue: .8,
                    endValue: .7,
                    property: 'scale',
                },
                {
                    startValue: -6,
                    endValue: 0,
                    property: 'rotate',
                },
            ],
        },
        {
            start: 250,
            end: 600,
            properties: [
                {
                    startValue: 0,
                    endValue: 4,
                    property: 'blur',
                },
            ],
        },
    ];

    const parallaxData2 = [
        {
            start: 0,
            end: 300,
            properties: [
                {
                    startValue: .9,
                    endValue: .8,
                    property: 'scale',
                },
                {
                    startValue: 8,
                    endValue: 8,
                    property: 'rotate',
                },
            ],
        },
        {
            start: 300,
            end: 700,
            properties: [
                {
                    startValue: .8,
                    endValue: .7,
                    property: 'scale',
                },
                {
                    startValue: 8,
                    endValue: 0,
                    property: 'rotate',
                },
            ],
        },
        {
            start: 700,
            end: 1200,
            properties: [
                {
                    startValue: 0,
                    endValue: 4,
                    property: 'blur',
                },
            ],
        }
    ];

    const parallaxData3 = [
        {
            start: 0,
            end: 300,
            properties: [
                {
                    startValue: 1.3,
                    endValue: 1.1,
                    property: 'scale',
                },
                {
                    startValue: -8,
                    endValue: -6,
                    property: 'rotate',
                },
            ],
        },
        {
            start: 300,
            end: 700,
            properties: [
                {
                    startValue: 1.1,
                    endValue: 0.9,
                    property: 'scale',
                },
                {
                    startValue: -6,
                    endValue: 0,
                    property: 'rotate',
                },
            ],
        }
    ];

    const parallaxData4 = [
        {
            start: 0,
            end: 500,
            properties: [
                {
                    startValue: 1.1,
                    endValue: 1.0,
                    property: 'scale',
                },
                {
                    startValue: 8,
                    endValue: 6,
                    property: 'rotate',
                },
            ],
        },
        {
            start: 500,
            end: 800,
            properties: [
                {
                    startValue: 1.0,
                    endValue: 0.9,
                    property: 'scale',
                },
                {
                    startValue: 6,
                    endValue: 0,
                    property: 'rotate',
                },
            ],
        }
    ];

    return (
        <div className="aboutPageMainBlock">
            <div className="content-container">
                <div className="top-row content-row">
                    <div className="parallaxImageContainer">
                        <Plx parallaxData={parallaxData}>
                            <img src={"/images/nespic(small).jpg"} alt="Nestor Ramirez pic" />
                        </Plx>
                    </div>
                    <div className="textContainer">
                        <h1>Who I am</h1>
                        <p>I am a proactive engineer who likes challenges.
                        I enjoy cultural diversity and I am always facinated by the weird and the strange.
                        I enjoy traveling, meeting people, sports, new friends, new food, etc... You get the picture.
                        I am very open minded and I love to learn. Recently, I have been working on several certifications
                        to grow my professional career in the Tech Industry. I am currenlty volunteering as solutions engineer
                        for Nectar Negocios. I love to teach and train people and I do not get frustrated easily. I am very
                        patient and easy going.</p>
                    </div>
                </div>
            </div>
            <div className="content-container">
                <div className="content-row">
                    <div className="textContainer">
                        <h1>Who I love</h1>
                        <p>I recently married and I am enjoying the best of my life with the person
                        I love the most. She is my passion, my companion, my teacher and my coach. We are both
                        young dreamers working to save the world, one solar panel, green software and clean process 
                        improved at the time. </p>
                    </div>
                    <div className="parallaxImageContainer">
                        <Plx parallaxData={parallaxData2}>
                            <img src={"/images/morrita(small).jpeg"} alt="NRP wife" />
                        </Plx>
                    </div>
                </div>
            </div>
            <div className="content-container">
                <div className="content-row">
                    <div className="parallaxImageContainer">
                        <Plx parallaxData={parallaxData3}>
                            <img src={"/images/Bacaanda Logo.JPG"} alt="Bacaanda Logo" />
                        </Plx>
                    </div>
                    <div className="textContainer">
                        <h1>My Hobbies</h1>
                        <p>I have a wide range of different hobbies from sports to arts, design to code and strategy games.
                        In all of my hobbies, if possible, I like to enjoy my time with my family. I also love coffee and cooking.
                        One of my dreams and current projects is to open a Coffee Shop, which is still a work in progress. I am also
                        a very active person and enjoy bike riding, running, swimming or any outdoor sport.
                        </p>
                    </div>
                </div>
            </div>
            <div className="content-container">
                <div className="content-row">
                    <div className="textContainer">
                        <h1>"The Girls"</h1>
                        <p>If you hear me talking about "the girls" I meant, two beautiful lab mixes that do
                        all with us. They are both spolied and they are part of our family.
                        They are both very well behaved, but with their own personality. Lucy is anxoius but 
                        very loyal. Maya is very friendly but does not listen to anything if a squirrel is around.</p>
                    </div>
                    <div className="parallaxImageContainer">
                        <Plx parallaxData={parallaxData4}>
                            <img src={"/images/ninas(small).jpeg"} alt="Bacaanda Logo" />
                        </Plx>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPageContent;