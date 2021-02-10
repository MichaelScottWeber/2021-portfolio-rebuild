import React, { Component } from 'react';

class Skills extends Component {
    state = {  }

    skillsList = this.props.skills.map(skill => {
        return (
            <li key={skill.name}>
                <img src={skill.icon} alt={skill.name} />
                <h3>{skill.name}</h3>
                <p>{skill.text}</p>
            </li>
        )
    })

    render() { 
        return (  
            <section className="Skills">
                <h2>Skills</h2>
                <ul>{this.skillsList}</ul>
            </section>
        );
    }
}
 
export default Skills;