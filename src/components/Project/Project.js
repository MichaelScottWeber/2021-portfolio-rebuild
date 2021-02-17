import React, { Component } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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

        const variants = {
            show: {
                opacity: 1,
                x: 0,
            },
            hide: {
                opacity: 0,
                x: -550,
            },
        }

        const imageView = () => {
            return (
                <motion.div 
                    variants={variants}
                    // initial={{ opacity: 0, x: -550 }}
                    // initial='show'
                    // animate={{ opacity: 1, x: 0 }}
                    // animate={this.state.showInfo ? 'hide' : 'show'}
                    // exit={{ opacity: 0, x: -550 }}
                    transition={{
                        x: { type: "spring", stiffness: 100, damping: 30, duration: .3 },
                        opacity: { duration: 0.2 }
                      }}
                    key='noInfo'
                    className="img-container"
                    style={{backgroundColor: project.color}}
                >
                    <img src={project.img1} alt={`Screenshots of ${project.name}`} />
                </motion.div>
            )
        }

        const infoView = () => {
            return (
                <motion.div 
                    variants={variants}
                    // initial={{ opacity: 0, x: -550 }}
                    // initial='show'
                    // animate={{ opacity: 1, x: 0 }}
                    // animate={this.state.showInfo ? 'show' : 'hide'}
                    // exit={{ opacity: 0, x: -550 }}
                    transition={{
                        x: { type: "spring", stiffness: 100, damping: 30, duration: .3 },
                        opacity: { duration: 0.2 }
                      }}
                    key='info'
                    className="img-container"
                    style={{backgroundColor: project.color}}
                >
                    <img src={project.img2} alt={`Screenshots of ${project.name}`} />
                    <div className="text-container">
                        <p>{project.desc}</p>
                        <div class="underline"></div>
                        <p>Technologies include <br /> <span className="tech-text">{project.tech}</span></p>
                    </div>
                </motion.div>
            )
        }

        const projectView = () => {
            return (
                <div 
                    onClick={this.projectClickHandler}
                    onMouseEnter={() => this.setState({isHover: true})}
                    onMouseLeave={() => this.setState({isHover: false})}
                    className={this.state.isHover ? 'animate-container hover' : 'animate-container'}
                >
                    <AnimatePresence 
                        initial={false}
                        // exitBeforeEnter
                    >
                        {this.state.showInfo ? infoView() : imageView()}
                    </AnimatePresence>
                </div>
            )
        }

        // const projectView = () => {
        //     if (!this.state.showInfo) {
        //         return (
        //             <AnimatePresence>
        //                 <motion.div 
        //                     initial={{ opacity: 0, x: 600 }}
        //                     animate={{ opacity: 1, x: 0 }}
        //                     exit={{ opacity: 0, x: -600 }}
        //                     key='noInfo'
        //                     onClick={this.projectClickHandler}
        //                     onMouseEnter={() => this.setState({isHover: true})}
        //                     onMouseLeave={() => this.setState({isHover: false})}
        //                     className={this.state.isHover ? 'img-container hover' : 'img-container'}
        //                     style={{backgroundColor: project.color}}
        //                 >
        //                     <img src={project.img1} alt={`Screenshots of ${project.name}`} />
        //                 </motion.div>
        //             </AnimatePresence>
        //         )
        //     } else {
        //         return (
        //             <AnimatePresence>
        //                 <motion.div 
        //                     initial={{ opacity: 0, x: -600 }}
        //                     animate={{ opacity: 1, x: 0 }}
        //                     exit={{ opacity: 0, x: 600 }}
        //                     key='info'
        //                     onClick={this.projectClickHandler}
        //                     onMouseEnter={() => this.setState({isHover: true})}
        //                     onMouseLeave={() => this.setState({isHover: false})}
        //                     className={this.state.isHover ? 'img-container hover' : 'img-container'}
        //                     style={{backgroundColor: project.color}}
        //                 >
        //                     <img src={project.img2} alt={`Screenshots of ${project.name}`} />
        //                     <div className="text-container">
        //                         <p>{project.desc}</p>
        //                         <div class="underline"></div>
        //                         <p>Technologies include <br /> <span className="tech-text">{project.tech}</span></p>
        //                     </div>
        //                 </motion.div>
        //             </AnimatePresence>
        //         )
        //     }
        // }

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
 
export default Project;