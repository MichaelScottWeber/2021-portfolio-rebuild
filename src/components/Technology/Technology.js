import React, { Component } from 'react';
import { motion } from 'framer-motion';

class Technology extends Component {
    state = {  }

    techList = (list) => {
        return (
            list.map(tech => {
                return (
                    <li key={tech.name}>
                        <motion.div 
                            whileHover={{ y: -25 }}
                            transition={{ duration: 0.2 }}
                            className="tech-logo-container"
                        >
                            <img src={tech.logo} alt={tech.name} />
                        </motion.div>
                        <h4>{tech.name}</h4>
                    </li>
                )
            })
        )
    }

    render() { 
        return (  
            <section className="Technology" id="tech">
                <h2>Technology</h2>
                <div className="techlist-container">
                    <h3>Front End</h3>
                    <ul className="techlist">{this.techList(this.props.frontEndTech)}</ul>
                </div>
                <div className="techlist-container">
                    <h3>Back End</h3>
                    <ul className="techlist">{this.techList(this.props.backEndTech)}</ul>
                </div>
                <div className="techlist-container">
                    <h3>Image Design</h3>
                    <ul className="techlist">{this.techList(this.props.imageDesignTech)}</ul>
                </div>
                <div className="techlist-container">
                    <h3>Collaboration</h3>
                    <ul className="techlist">{this.techList(this.props.collaborationTech)}</ul>
                </div>
                <div className="techlist-container">
                    <h3>Miscelaneous</h3>
                    <ul className="techlist">{this.techList(this.props.miscTech)}</ul>
                </div>
            </section>
        );
    }
}
 
export default Technology;