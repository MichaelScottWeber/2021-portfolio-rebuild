import React, { Component } from 'react';

class Projects extends Component {
    state = {  }



    projectList = this.props.projects.map(project => {
        return (
            <li key={project.name}>
                <div className="img-container" style={{backgroundColor: project.color}}>
                    <img src={project.img1} alt={`Screenshots of ${project.name}`} />
                </div>
                <div className="title-link-container">
                    <h3>{project.name}</h3>
                    <div>
                        <a className="primary-btn" href={project.siteUrl}>View Site</a>
                        <a className="secondary-btn" href={project.sourceUrl}>Source Code</a>
                    </div>
                </div>
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