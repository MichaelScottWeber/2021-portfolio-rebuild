import React, { Component } from 'react';

class Projects extends Component {
    state = {  }

    projectList = this.props.projects.map(project => {
        return (
            <li>
                <img src={project.img1} alt={`Screenshots of ${project.name}`} />
                <h3>{project.name}</h3>
                <a href={project.siteUrl}>View Site</a>
                <a href={project.sourceUrl}>Source Code</a>
            </li>
        )
    })

    render() { 
        return (  
            <section className="Projects">
                <h2>Projects</h2>
                <ul>{this.projectList}</ul>
            </section>
        );
    }
}
 
export default Projects;