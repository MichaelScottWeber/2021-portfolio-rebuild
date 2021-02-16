import React, { Component } from 'react';
import { motion } from 'framer-motion';

class About extends Component {
    state = {  }

    contactLinksList = this.props.contactLinks.map(link => {
        return (
            <li key={link.text}>
                <motion.a 
                    whileHover={{ y: -3 }}
                    whileTap={{ y: 3 }}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {link.text} >
                </motion.a>
            </li>
        )
    })

    bio = this.props.bio.map(par => {
        return (
            <p key={par}>{par}</p>
        )
    })

    render() { 
        return (  
            <section className="About" id="about">
                <h2>About</h2>
                <div className="about-container">
                    <div className="img-contact-container">
                        <img src={this.props.headShot} alt="Michael Weber" />
                        <ul>{this.contactLinksList}</ul>
                    </div>
                    <div className="bio-container">{this.bio}</div>
                </div>
            </section>
        );
    }
}
 
export default About;