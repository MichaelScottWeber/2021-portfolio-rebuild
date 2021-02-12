import React, { Component } from 'react';

class Technology extends Component {
    state = {  }

    techList = (list) => {
        return (
            list.map(tech => {
                return (
                    <li key={tech.name}>
                        <div>
                            <img src={tech.logo} alt={tech.name} />
                        </div>
                        <h4>{tech.name}</h4>
                    </li>
                )
            })
        )
    }

    render() { 
        return (  
            <section className="Technology">
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