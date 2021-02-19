import React, { Component } from 'react';
import { motion } from 'framer-motion';
import { Link, animateScroll as scroll } from 'react-scroll';

class Navbar extends Component {
    state = {  }


    linksList = this.props.navLinks.map(link => {
        return (
            // <li key={link.text}>
            //     <motion.a 
            //         whileHover={{ y: -3 }}
            //         whileTap={{ y: 3 }}
            //         // transition={{ duration: 0.2 }}
            //         href={link.url}
            //     >
            //         {link.text}
            //     </motion.a>
            // </li>
            <motion.li 
                whileHover={{ y: -3 }}
                whileTap={{ y: 3 }}
                transition={{ duration: 0.3 }}
                key={link.text}
            >
                <Link 
                    activeClass="active"
                    to={link.url}
                    spy={true}
                    smooth={true}
                >
                    {link.text}
                </Link>
            </motion.li>
        )
    })

    render() { 
        return (  
            <nav className="Navbar">
                <a 
                    // href=''
                    onClick={() => scroll.scrollToTop()}
                >
                    {this.props.logo.img}
                </a>
                <ul>{this.linksList}</ul>
            </nav>
        );
    }
}
 
export default Navbar;