import React, { Component } from 'react';

class Technology extends Component {
    state = {  }

    techList = (list) => {
        return (
            list.map(tech => {
                return (
                    <li key={tech.name}>
                        <img src={tech.logo} alt={tech.name} />
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
                <div>
                    <h3>Front End</h3>
                    <ul>{this.techList(this.props.frontEndTech)}</ul>
                </div>
                <div>
                    <h3>Back End</h3>
                    <ul>{this.techList(this.props.backEndTech)}</ul>
                </div>
                <div>
                    <h3>Image Design</h3>
                    <ul>{this.techList(this.props.imageDesignTech)}</ul>
                </div>
                <div>
                    <h3>Collaboration</h3>
                    <ul>{this.techList(this.props.collaborationTech)}</ul>
                </div>
                <div>
                    <h3>Miscelaneous</h3>
                    <ul>{this.techList(this.props.miscTech)}</ul>
                </div>
            </section>
        );
    }
}
 
export default Technology;