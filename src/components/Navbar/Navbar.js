import React, { Component } from 'react';
import { motion } from 'framer-motion';

class Navbar extends Component {
    state = {  }

    linksList = this.props.navLinks.map(link => {
        return (
            <li key={link.text}>
                <motion.a 
                    whileHover={{ y: -3 }}
                    whileTap={{ y: 3 }}
                    // transition={{ duration: 0.2 }}
                    href={link.url}
                >
                    {link.text}
                </motion.a>
            </li>
        )
    })

    render() { 
        return (  
            <nav className="Navbar">
                <a href={this.props.logo.url}>{this.props.logo.img}</a>
                <ul>{this.linksList}</ul>
            </nav>
        );
    }
}
 
export default Navbar;