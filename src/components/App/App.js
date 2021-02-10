import React, { Component } from 'react';

import '../../styles/styles.scss';

// Components
import Navbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import Technology from '../Technology/Technology';
import About from '../About/About';
import Footer from '../Footer/Footer';

// Project Images
import FiveDayForecast1 from '../../images/5DayForecast.png';
import FiveDayForecast2 from '../../images/5DayForecast2.png';
import GuitarQuiz1 from '../../images/GuitarQuiz.png';
import GuitarQuiz2 from '../../images/GuitarQuiz2.png';
import MusicPortfolio1 from '../../images/MusicPortfolio.png';
import MusicPortfolio2 from '../../images/MusicPortfolio2.png';
import PizzaOrder1 from '../../images/PizzaOrder.png';
import PizzaOrder2 from '../../images/PizzaOrder2.png';

// Skill Icons
import BulbIcon from '../../images/bulb-icon.svg';
import ConnectionIcon from '../../images/connection-icon.svg';
import GlassesIcon from '../../images/glasses-icon.svg';
import PencilIcon from '../../images/pencil-icon.svg';
import PhoneIcon from '../../images/phone-icon.svg';

// Tech Logos
import AdobeLogo from '../../images/adobe-logo.svg';
import AngularLogo from '../../images/angular-logo.svg';
import AppleLogo from '../../images/apple-logo.svg';
import BootstrapLogo from '../../images/bootstrap-logo.svg';
import CSSLogo from '../../images/css-logo.svg';
import ExpressLogo from '../../images/express-logo.svg';
import FigmaLogo from '../../images/figma-logo.svg';
import GithubLogo from '../../images/github-logo.svg';
import GoogleLogo from '../../images/google-logo.svg';
import HTMLLogo from '../../images/html-logo.svg';
import IllustratorLogo from '../../images/illustrator-logo.svg';
import JQueryLogo from '../../images/jquery-logo.svg';
import JSLogo from '../../images/js-logo.svg';
import MongoDBLogo from '../../images/mongodb-logo.svg';
import NetlifyLogo from '../../images/netlify-logo.svg';
import NetsuiteLogo from '../../images/netsuite-logo.svg';
import NodeLogo from '../../images/node-logo.svg';
import NotionLogo from '../../images/notion-logo.svg';
import NpmLogo from '../../images/npm-logo.svg';
import PhotoshopLogo from '../../images/photoshop-logo.svg';
import ReactLogo from '../../images/react-logo.svg';
import SassLogo from '../../images/sass-logo.svg';
import SlackLogo from '../../images/slack-logo.svg';
import ThreeLogo from '../../images/threejs-logo.svg';
import VSCodeLogo from '../../images/vscode-logo.svg';
import VueLogo from '../../images/vue-logo.svg';
import ZoomLogo from '../../images/zoom-logo.svg';

// Headshot Image
import HeadShot from '../../images/profilepic.jpg';

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
                img1: PizzaOrder1,
                img2: PizzaOrder2,
                color: '#019889',
                siteUrl: 'https://pizza-order.netlify.app/',
                sourceUrl: 'https://github.com/MichaelScottWeber/pizza-order-app',
                desc: 'An online ordering platform for a mock pizza restaurant, where users have complete control over their order.',
                tech: 'React, SCSS, HTML5',
            },
            {
                name: '5DayForecast',
                img1: FiveDayForecast1,
                img2: FiveDayForecast2,
                color: '#437b98',
                siteUrl: 'https://5-day-forecast.netlify.com/',
                sourceUrl: 'https://github.com/MichaelScottWeber/Five-Day-Forcast',
                desc: 'A web app, made with the Open Weather Map API, which shows a five day forecast for a provided zip code.',
                tech: 'React, CSS3, HTML5',
            },
            {
                name: 'GuitarQuiz',
                img1: GuitarQuiz1,
                img2: GuitarQuiz2,
                color: '#cd7328',
                siteUrl: 'https://guitar-quiz.netlify.com/',
                sourceUrl: 'https://github.com/MichaelScottWeber/react-quiz',
                desc: 'An interactive online quiz that tests the users ability to recognize famous guitar models.',
                tech: 'React, CSS3, HTML5',
            },
            {
                name: 'MusicPortfolio',
                img1: MusicPortfolio1,
                img2: MusicPortfolio2,
                color: '#725046',
                siteUrl: 'https://www.michaelwebermusic.com/',
                sourceUrl: 'https://github.com/MichaelScottWeber/Michael-Weber-Music',
                desc: 'A single-page music portfolio site that features a list of credits, a bio, and an animated custom music player.',
                tech: 'React, CSS3, HTML5',
            },
        ],
        skills: [
            {
                icon: GlassesIcon,
                name: 'Accessibility',
                text: 'Experienced in semantic HTML structure, screen readers,  and in writing code that is WCAG 2.1 compliant.',
            },
            {
                icon: PhoneIcon,
                name: 'Mobile-Friendly',
                text: 'Projects that look good on all devices and all browsers. If it doesn’t work on mobile, then it doesn’t work.',
            },
            {
                icon: PencilIcon,
                name: 'Image Design',
                text: 'A keen eye for design, and skilled with Adobe Photoshop, Illustrator, and Figma.',
            },
            {
                icon: ConnectionIcon,
                name: 'Collaboration',
                text: 'Experienced working onsite and remotely in cross-disceplanary teams. Excellent communication skills.',
            },
            {
                icon: BulbIcon,
                name: 'Self-Motivation',
                text: 'A self-taught developer who isn’t afraid of a challenge and loves to attack problems head on. Always learning new things.',
            },
        ],
        frontEndTech: [
            { logo: HTMLLogo, name: 'HTML5' },
            { logo: CSSLogo, name: 'CSS3' },
            { logo: JSLogo, name: 'JavaScript' },
            { logo: ReactLogo, name: 'React' },
            { logo: VueLogo, name: 'Vue' },
            { logo: AngularLogo, name: 'AngularJS' },
            { logo: SassLogo, name: 'SASS' },
            { logo: BootstrapLogo, name: 'Bootstrap' },
            { logo: JQueryLogo, name: 'jQuery' },
        ],
        backEndTech: [
            { logo: NodeLogo, name: 'Node' },
            { logo: ExpressLogo, name: 'Express' },
            { logo: MongoDBLogo, name: 'MongoDB' },
        ],
        imageDesignTech: [
            { logo: AdobeLogo, name: 'Adobe CC' },
            { logo: PhotoshopLogo, name: 'Photoshop' },
            { logo: IllustratorLogo, name: 'Illustrator' },
            { logo: FigmaLogo, name: 'Figma' },
        ],
        collaborationTech: [
            { logo: SlackLogo, name: 'Slack' },
            { logo: ZoomLogo, name: 'Zoom' },
            { logo: NotionLogo, name: 'Notion' },
            { logo: GoogleLogo, name: 'Google' },
        ],
        miscTech: [
            { logo: AppleLogo, name: 'Apple' },
            { logo: VSCodeLogo, name: 'VS Code' },
            { logo: GithubLogo, name: 'Github' },
            { logo: NpmLogo, name: 'NPM' },
            { logo: NetlifyLogo, name: 'Netlify' },
            { logo: ThreeLogo, name: 'ThreeJS' },
            { logo: NetsuiteLogo, name: 'Netsuite' },
        ],
        headShot: HeadShot,
        bio: [
            'I’m Mike, a Front End Developer currently working for Boombah Inc.  I am experienced in designing and building user-friendly projects from the ground up and focused on finding new ways to solve everyday problems through technology.  I am a fast learner, a hard worker, and a flexible team player who loves attacking new problems head-on.',
            'In my free time I enjoy hanging out with my wife Jenni and cat Lucy.  I also play and write music, and my compositions and songs have been used by NBC, FOX Sports, A&E, Comedy Central, MTV, and others.',
        ],
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