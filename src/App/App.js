import React, { Component } from 'react';
import './App.css';

import Navbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import Technology from '../Technology/Technology';
import About from '../About/About';
import Footer from '../Footer/Footer';

class App extends Component {
    state = {
        logo: { img: 'LOGO', url: '#top' },
        navLinks: [
            { text: 'Projects', url: '#projects' },
            { text: 'Skills', url: '#skills' },
            { text: 'Tech', url: '#tech' },
            { text: 'About', url: '#about' },
        ],
        projects: [
            {
                name: 'PizzaOrder',
                img1: '',
                img2: '',
                color: '#019889',
                siteUrl: 'https://pizza-order.netlify.app/',
                sourceUrl: 'https://github.com/MichaelScottWeber/pizza-order-app',
                desc: 'An online ordering platform for a mock pizza restaurant, where users have complete control over their order.',
                tech: 'React, SCSS, HTML5',
            },
            {
                name: '5DayForecast',
                img1: '',
                img2: '',
                color: '#437b98',
                siteUrl: 'https://5-day-forecast.netlify.com/',
                sourceUrl: 'https://github.com/MichaelScottWeber/Five-Day-Forcast',
                desc: 'A web app, made with the Open Weather Map API, which shows a five day forecast for a provided zip code.',
                tech: 'React, CSS3, HTML5',
            },
            {
                name: 'GuitarQuiz',
                img1: '',
                img2: '',
                color: '#cd7328',
                siteUrl: 'https://guitar-quiz.netlify.com/',
                sourceUrl: 'https://github.com/MichaelScottWeber/react-quiz',
                desc: 'An interactive online quiz that tests the users ability to recognize famous guitar models.',
                tech: 'React, CSS3, HTML5',
            },
            {
                name: 'MusicPortfolio',
                img1: '',
                img2: '',
                color: '#725046',
                siteUrl: 'https://www.michaelwebermusic.com/',
                sourceUrl: 'https://github.com/MichaelScottWeber/Michael-Weber-Music',
                desc: 'A single-page music portfolio site that features a list of credits, a bio, and an animated custom music player.',
                tech: 'React, CSS3, HTML5',
            },
        ],
        skills: [
            {
                icon: '',
                name: 'Accessibility',
                text: 'Experienced in semantic HTML structure, screen readers,  and in writing code that is WCAG 2.1 compliant.',
            },
            {
                icon: '',
                name: 'Mobile-Friendly',
                text: 'Projects that look good on all devices and all browsers. If it doesn’t work on mobile, then it doesn’t work.',
            },
            {
                icon: '',
                name: 'Image Design',
                text: 'A keen eye for design, and skilled with Adobe Photoshop, Illustrator, and Figma.',
            },
            {
                icon: '',
                name: 'Collaboration',
                text: 'Experienced working onsite and remotely in cross-disceplanary teams. Excellent communication skills.',
            },
            {
                icon: '',
                name: 'Self-Motivation',
                text: 'A self-taught developer who isn’t afraid of a challenge and loves to attack problems head on. Always learning new things.',
            },
        ],
        frontEndTech: [
            { logo: '', name: 'HTML5' },
            { logo: '', name: 'CSS3' },
            { logo: '', name: 'JavaScript' },
            { logo: '', name: 'React' },
            { logo: '', name: 'Vue' },
            { logo: '', name: 'AngularJS' },
            { logo: '', name: 'SASS' },
            { logo: '', name: 'Bootstrap' },
            { logo: '', name: 'jQuery' },
        ],
        backEndTech: [
            { logo: '', name: 'Node' },
            { logo: '', name: 'Express' },
            { logo: '', name: 'MongoDB' },
        ],
        imageDesignTech: [
            { logo: '', name: 'Adobe CC' },
            { logo: '', name: 'Photoshop' },
            { logo: '', name: 'Illustrator' },
            { logo: '', name: 'Figma' },
        ],
        collaborationTech: [
            { logo: '', name: 'Slack' },
            { logo: '', name: 'Zoom' },
            { logo: '', name: 'Notion' },
            { logo: '', name: 'Google' },
        ],
        miscTech: [
            { logo: '', name: 'Apple' },
            { logo: '', name: 'VS Code' },
            { logo: '', name: 'Github' },
            { logo: '', name: 'NPM' },
            { logo: '', name: 'Netlify' },
            { logo: '', name: 'ThreeJS' },
            { logo: '', name: 'Netsuite' },
        ],
        headShot: '',
        bio: 'I’m Mike, a Front End Developer currently working for Boombah Inc.  I am experienced in designing and building user-friendly projects from the ground up and focused on finding new ways to solve everyday problems through technology.  I am a fast learner, a hard worker, and a flexible team player who loves attacking new problems head-on. <br><br> In my free time I enjoy hanging out with my wife Jenni and cat Lucy.  I also play and write music, and my compositions and songs have been used by NBC, FOX Sports, A&E, Comedy Central, MTV, and others.',
        contactLinks: [
            { text: 'Email', url: '/' },
            { text: 'LinkedIn', url: '/' },
            { text: 'Github', url: '/' },
        ],
    }
    render() {
        return (
            <div className="App">
                <Navbar logo={this.state.logo} navLinks={this.state.navLinks} />
                <main>
                    <Hero />
                    <Projects projects={this.state.projects} />
                    <Skills skills={this.state.skills} />
                    <Technology
                        frontEndTech={this.state.frontEndTech}
                        backEndTech={this.state.backEndTech}
                        imageDesignTech={this.state.imageDesignTech}
                        collaborationTech={this.state.collaborationTech}
                        miscTech={this.state.miscTech}
                    />
                    <About
                        headShot={this.state.headShot}
                        bio={this.state.bio}
                        contactLinks={this.state.contactLinks}
                    />
                    <Footer />
                </main>
            </div>
        )
    }
}

export default App;