import React, { Component } from 'react';
import { motion } from 'framer-motion';

class Footer extends Component {
    state = {  }

    thisYear = new Date().getFullYear();

    render() { 
        return (  
            <footer className="Footer">
                <p>
                    Copyright © {this.thisYear} Michael  Weber. Made with React. Illustration by Diana Valeanu of &nbsp;
                    <motion.a 
                        whileHover={{ y: -3 }}
                        whileTap={{ y: 3 }}
                        href="https://absurd.design/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Absurd.Design
                    </motion.a>.  
                    Icons by Spencer Harrison from the &nbsp;
                    <motion.a 
                        whileHover={{ y: -3 }}
                        whileTap={{ y: 3 }}
                        href="https://thenounproject.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Noun Project
                    </motion.a>
                    .
                </p>
            </footer>
        );
    }
}
 
export default Footer;