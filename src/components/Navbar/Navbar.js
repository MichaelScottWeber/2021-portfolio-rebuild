import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
    state = {  }

    linksList = this.props.navLinks.map(link => {
        return (
            <li key={link.text}>
                <a href={link.url}>{link.text}</a>
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