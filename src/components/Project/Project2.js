import React, { Component } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

class Project2 extends Component {
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
            const variants = {
                image: { x: 0 },
                info: { x: -550 },
            }

            return (
                <div 
                    onClick={this.projectClickHandler}
                    onMouseEnter={() => this.setState({isHover: true})}
                    onMouseLeave={() => this.setState({isHover: false})}
                    className={this.state.isHover ? 'card-outer-container hover' : 'card-outer-container'}
                    style={{backgroundColor: project.color}}
                >
                    <motion.div 
                        animate={this.state.showInfo ? 'info' : 'image'}
                        transition={{ type: 'spring', duration: 1, bounce: .2 }}
                        variants={variants}
                        className="card-inner-container" 
                    >
                        <div className="img1-container">
                            <img src={project.img1} alt={`Screenshots of ${project.name}`} />
                        </div>
                        <div className="img2-container">
                            <img src={project.img2} alt={`Screenshot of ${project.name}`} />
                            <div className="text-container">
                                <p>{project.desc}</p>
                                <div class="underline"></div>
                                <p>Technologies include <br /> <span className="tech-text">{project.tech}</span></p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )
        }

        return (  
            <li className="Project">
                {projectView()}
                <div className="title-link-container">
                    <motion.h3 
                        whileHover={{ y: -3 }}
                        whileTap={{ y: 3 }}
                        onClick={this.projectClickHandler}
                        onMouseEnter={() => this.setState({isHover: true})}
                        onMouseLeave={() => this.setState({isHover: false})}
                        className={this.state.isHover ? 'hover' : ''}
                    >
                        {project.name}
                    </motion.h3>
                    <motion.div>
                        <motion.a 
                            whileTap={{ y: 3 }}
                            className="primary-btn" 
                            href={project.siteUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View Site
                        </motion.a>
                        <motion.a 
                            whileTap={{ y: 3 }}
                            className="secondary-btn" 
                            href={project.sourceUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Source Code
                        </motion.a>
                    </motion.div>
                </div>
            </li>
        );
    }
}
 
export default Project2;