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

    render() { 
        return (  
            <section className="About">
                <h2>About</h2>
                <div>
                    <img src={this.props.headShot} alt="Michael Weber" />
                    <ul>{this.contactLinksList}</ul>
                </div>
                <p>{this.props.bio}</p>
            </section>
        );
    }
}
 
export default About;