import React, { Component } from 'react';

class About extends Component {
    state = {  }

    contactLinksList = this.props.contactLinks.map(link => {
        return (
            <li key={link.text}>
                <a href={link.url}>{link.text}</a>
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
            <section className="About">
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