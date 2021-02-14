import React, { Component } from 'react';
import { motion } from 'framer-motion';

class Project extends Component {
    state = { 
        showInfo: false,
        isHover: false,
    }

    projectClickHandler = () => {
        this.setState({ showInfo: !this.state.showInfo })
    }

    render() { 
        const { project } = this.props;

        const projectView = () => {
            if (!this.state.showInfo) {
                return (
                    <motion.div 
                        onClick={this.projectClickHandler}
                        onMouseEnter={() => this.setState({isHover: true})}
                        onMouseLeave={() => this.setState({isHover: false})}
                        className={this.state.isHover ? 'img-container hover' : 'img-container'}
                        style={{backgroundColor: project.color}}
                    >
                        <img src={project.img1} alt={`Screenshots of ${project.name}`} />
                    </motion.div>
                )
            } else {
                return (
                    <motion.div 
                        onClick={this.projectClickHandler}
                        onMouseEnter={() => this.setState({isHover: true})}
                        onMouseLeave={() => this.setState({isHover: false})}
                        className={this.state.isHover ? 'img-container hover' : 'img-container'}
                        style={{backgroundColor: project.color}}
                    >
                        <img src={project.img2} alt={`Screenshots of ${project.name}`} />
                        <div class="text-container">
                            <p>{project.desc}</p>
                            <div class="underline"></div>
                            <p>Technologies include <br /> <span class="tech-text">{project.tech}</span></p>
                        </div>
                    </motion.div>
                )
            }
        }

        return (  
            <li className="Project">
                {projectView()}
                <div className="title-link-container">
                    <h3 
                        onClick={this.projectClickHandler}
                        onMouseEnter={() => this.setState({isHover: true})}
                        onMouseLeave={() => this.setState({isHover: false})}
                        className={this.state.isHover ? 'hover' : ''}
                    >
                        {project.name}
                    </h3>
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