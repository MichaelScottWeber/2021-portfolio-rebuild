import React, { Component } from 'react';
import Project from '../Project/Project';

class Projects extends Component {
    state = {  }
    projectList = this.props.projects.map(project => {
        return (
            <Project 
                key={project.name}
                project={project}
            />
        )
    })

    render() { 
        return (  
            <section className="Projects" id="projects">
                <h2>Projects</h2>
                <ul>{this.projectList}</ul>
            </section>
        );
    }
}
 
export default Projects;