import React, { Component } from 'react';
import { motion } from 'framer-motion';
import HeroImage from '../HeroImage/HeroImage';
import SectionBorder from '../SectionBorder/SectionBorder';

class Hero extends Component {
    state = {  }
    render() { 
        return (  
            <header className="Hero">
                <div>
                    <p>Michael Weber | Front End Developer</p>
                    <h1>Bridging the <span className="blue-text">creative</span> and the <span className="blue-text">technical</span> to bring ideas to life</h1>
                    <motion.a 
                        whileHover={{ y: -3 }}
                        whileTap={{ y: 3 }}
                        href="mailto:mscottweber@gmail.com"
                    >
                        Let's create something together >
                    </motion.a>
                </div>
                <HeroImage />
                {/* <SectionBorder /> */}
            </header>
        );
    }
}
 
export default Hero;