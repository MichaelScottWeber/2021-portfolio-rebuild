import React, { Component } from 'react';

class SectionBorder extends Component {
    state = {  }
    render() { 
        return (  
            <svg className="SectionBorder" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 355 49" enableBackground="new 0 0 355 49" xmlSpace="preserve">
                <path fill={this.props.topColor} d="M355,49H0V0h355V49z"/>
                <path fill={this.props.bottomColor} d="M0,37.243C139.607,62.717,235.337-0.969,355,0.011V49H0V37.243z"/>
            </svg>
        );
    }
}
 
export default SectionBorder;