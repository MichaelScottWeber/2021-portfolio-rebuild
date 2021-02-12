import React, { Component } from 'react';
import HeroImage from '../HeroImage/HeroImage';

class Hero extends Component {
    state = {  }
    render() { 
        return (  
            <header className="Hero">
                <div>
                    <p>Michael Weber | Front End Developer</p>
                    <h1>Bridging the <span className="blue-text">creative</span> and the <span className="blue-text">technical</span> to bring ideas to life</h1>
                    <a href="/">Let's create something together ></a>
                </div>
                <HeroImage />
            </header>
        );
    }
}
 
export default Hero;