import React, { Component } from 'react';

class Project extends Component {
    state = { showInfo: false }

    projectClickHandler = () => {
        this.setState({ showInfo: !this.state.showInfo })
    }

    render() { 
        const { project } = this.props;

        const projectView = () => {
            if (!this.state.showInfo) {
                return (
                    <div className="img-container" style={{backgroundColor: project.color}}>
                        <img src={project.img1} alt={`Screenshots of ${project.name}`} />
                    </div>
                )
            } else {
                return (
                    <div className="img-container" style={{backgroundColor: project.color}}>
                        <img src={project.img2} alt={`Screenshots of ${project.name}`} />
                    </div>
                )
            }
        }

        return (  
            <li className="Project">
                {/* <div className="img-container" style={{backgroundColor: project.color}}>
                    <img src={project.img1} alt={`Screenshots of ${project.name}`} />
                </div> */}
                {projectView()}
                <div className="title-link-container">
                    <h3 onClick={this.projectClickHandler}>{project.name}</h3>
                    <div>
                        <a className="primary-btn" href={project.siteUrl}>View Site</a>
                        <a className="secondary-btn" href={project.sourceUrl}>Source Code</a>
                    </div>
                </div>
            </li>
        );
    }
}
 
export default Project;