import React, { Component } from 'react';
import Project2 from '../Project/Project2';
import SectionBorder from '../SectionBorder/SectionBorder';

class Projects extends Component {
    state = {  }

    projectList = this.props.projects.map(project => {
        return (
            <Project2
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