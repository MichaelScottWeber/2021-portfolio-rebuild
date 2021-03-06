import React, { Component } from 'react';
import Lightbulbs from '../../images/lightbulbs.png';

class HeroImage extends Component {
    state = { isHover: false }

    render() {

        const randomNum = (min, max) => Math.random() * (max - min) + min;

        const randomInt = (min, max) => {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min) + min);
        }
        
        const bulbStyle = (randInt, randNum) => {
            if (this.state.isHover) {
                return (
                    {
                        animation: `twinkle${randInt} ${randNum}s ease alternate infinite`,
                        transition: '1s',
                    }
                )
            } else {
                return (
                    {
                        opacity: '1',
                        transition: '1s',
                    }
                )
            }
        }

        return (  
            <svg 
                onMouseEnter={() => this.setState({isHover: true})}
                onMouseLeave={() => this.setState({isHover: false})}
                className="HeroImage" 
                version="1.1" 
                id="Layer_1" 
                xmlns="http://www.w3.org/2000/svg" 
                xmlnsXlink="http://www.w3.org/1999/xlink" 
                x="0px" y="0px"
                viewBox="0 0 1000 1000" 
                enableBackground="new 0 0 1000 1000" 
                xmlSpace="preserve"
            >
                <path
                    style={bulbStyle(randomInt(1, 5), randomNum(2, 5))}
                    // style={bulbStyle(1, 3)}
                    fill="#F2E8A7" 
                    d="M472,875l-14-3l-6-2l-7-2l-11-5l-14-8l-13-10l-18-15l-16-21l-17-31l-12-27l-11-50l5-24l8-31l24-44l39-40
                    l21-13l36-10l52-2l35,4l28,5l18,8l30,14l12,13l8,7l8,9l6,10l6,10l6,15l3,8l6,23l2,18l2,20v32l-1,20l-3,9l-6,13l-6,12l-18,28l-17,19
                    l-24,21l-20,12l-21,9l-12,5L472,875z"
                />
                <path
                    style={bulbStyle(randomInt(1, 5), randomNum(2, 5))}
                    fill="#E5E551" 
                    d="M207.5,382.5l5-5l5-2l7-2l7,1l7,2l5,3l3,2l2,3l3,3l1,4l1,3v5v3v6l-3,6l-6,4l-7,4l-8,3h-5h-4l-5-1l-5-1l-2-1
                    l-4-3l-4-6l-2-3l-1-5v-4v-4l3-6l1-3l3-3L207.5,382.5z"
                />
                <path
                    style={bulbStyle(randomInt(1, 5), randomNum(2, 5))}
                    fill="#D39B5E" 
                    d="M218.5,551.5v9l-2,5l-2,5l-4,5l-5,4l-8,5l-7,3h-3l-3-2v-6l2-5l3-9l1-4l2-5l4-5l7-2l10-2L218.5,551.5z"
                />
                <path
                    style={bulbStyle(randomInt(1, 5), randomNum(2, 5))}
                    fill="#E5E551" 
                    d="M325.5,693.5l-15,15l-6,1l-3,3l-7,6l-8,5l-10,2h-8h-7l-7-1l-5-2l-5-2l-5-2l-5-3l-4-3l-2-2l-2-3l-3-4l-2-7
                    l-2-7v-7v-7l1-5l1-4l1-4l2-4l4-7l4-6l3-4l4-5l6-5l7-5l5-3h5l4-1l5-2h5l6,1l7,3l6,3l6,2l4,4l4,4l5,8l4,9l3,8l1,11v13L325.5,693.5z"
                />
                <path 
                    style={bulbStyle(randomInt(1, 5), randomNum(2, 5))}
                    fill="#E0B428" 
                    d="M437.5,718.5l-6,1l-4,1l-5,3l-6,3l-3,1h-3h-3l-2-1l-3-2l-2-3l-1-3l-1-5l1-4l1-3l3-4l3-3l4-2l4,1l3,1l5,3l8,6
                    l4,1l4,1L437.5,718.5z"
                />
                <path
                    style={bulbStyle(randomInt(1, 5), randomNum(2, 5))}
                    fill="#E5E551" 
                    d="M611.5,754.5l-2,3l-4,2l-5,1l-4,1l-3-1l-3-1l-3-2l-3-3l-2-2v-3v-5v-5l3-4l4-2l5-2h6l3,2l3,2l3,2l1,3l1,5
                    l-2,5l1,2L611.5,754.5z"
                />
                <path
                    style={bulbStyle(randomInt(1, 5), randomNum(2, 5))}
                    fill="#E5E551" 
                    d="M593.5,667.5l-1-5v-3v-3l1-3l1-3l3-2l3-2l4-2l5-1l4,1h3l3,2l3,2l2,3l2,3v3l1,4l-1,4v4l-3,2l-2,3l-4,2l-4,2
                    l-5,1h-5l-4-3L593.5,667.5z"
                />
                <path 
                    style={bulbStyle(randomInt(1, 5), randomNum(2, 5))}
                    fill="#E0B428" 
                    d="M654.5,535.5l-35-26l3-11l4-8l1-5l1-6l-2-12l-4-18l-3-14l-2-17l-2-14l1-5l1-5l3-5l4-5l8-4l9-3l10-2h13l10,1
                    l14,5l11,4l16,7l14,8l4,4l6,4l6,7l5,5l8,9l4,3l4,7l4,7l3,8v9v8l-5,12l-4,6l-6,6l-7,4l-13,5l-19,4l-19,4l-14,4l-12,6l-10,6l-6,4
                    L654.5,535.5z"
                />
                <path 
                    style={bulbStyle(randomInt(1, 5), randomNum(2, 5))}
                    fill="#D39B5E" 
                    d="M746.5,541.5l5,1l5,1l4,2l4,2l3,4l3,3l4,7l5,9l3,9l2,7v4l-1,2l-1,1h-2h-2l-2-1l-5-3l-13-7l-8-4l-4-2l-2-2
                    l-3-3l-3-5l-2-7v-5v-6L746.5,541.5z"
                />
                <path
                    style={bulbStyle(randomInt(1, 5), randomNum(2, 5))}
                    fill="#E5E551" 
                    d="M837.5,510.5l6-9l3-2l4-3l4-2l5-1h6l6,2l3,2l4,3l4,5l2,4l2,6v7l-1,3l-2,6l-4,6l-2,2l-5,3l-4,2l-5,1h-6l-5-1
                    l-4-2l-4-3l-5-4l-2-4l-1-5L837.5,510.5z"
                />
                <path
                    style={bulbStyle(randomInt(1, 5), randomNum(2, 5))}
                    fill="#E5E551" 
                    d="M792.5,292.5l-1-5l-4-9l-2-14l1-5v-7l1-5l2-4l3-5l5-5l4-3l5-2l9-4l10-1l6,1l10,3l9,3l9,7l6,7l4,6l3,7l1,6
                    l1,9v10l-3,6l-4,7l-7,6l-10,8h-3l-6,3h-3h-10l-11-3l-6-5l-7-1L792.5,292.5z"
                />
                <path 
                    style={bulbStyle(randomInt(1, 5), randomNum(2, 5))}
                    fill="#E5E551" 
                    d="M572.5,406.5l-14,10l-3,3l-4,1l-5,2l-4,2h-5h-5l-4-1l-5-1l-5-2l-6-5l-4-4l-3-4l-5-10l-1-8v-11l3-8l5-8l6-6
                    l14-6l7-1h6l7,2l9,3l5,5l6,6l5,8l1,6l-1,10l3,7L572.5,406.5z"
                />
                <path 
                    style={bulbStyle(randomInt(1, 5), randomNum(2, 5))}
                    fill="#E0B428" 
                    d="M410,404l-15-25l-11-14l-21-19l-42-25l-15-11l-17-18l-9-23l-2-18v-16l4-13l7-16l9-10l19-8l21-1l19,5l15,8
                    l14,11l14,16l10,18l4,18l1,17l-3,33l-2,41l3,20l6,12l7,13L410,404z"
                />
                <path 
                    style={bulbStyle(randomInt(1, 5), randomNum(2, 5))}
                    fill="#E0B428" 
                    d="M362,547l-3,5l-1,4l1,13l1,7v4l-1,2l-2,3l-3,2l-6,1l-5-1l-6-1l-5-4l-7-7l-5-6l-2-8l-1-4l1-4l3-3l5-3h5h5h9
                    l3-1l8-7L362,547z"
                />
                <path 
                    style={bulbStyle(randomInt(1, 5), randomNum(2, 5))}
                    fill="#D39B5E" 
                    d="M807,98l-7-10l-3-4l-4-8l-4-8l-3-9v-6v-6l1-6l2-6l3-7l4-3l4-1l4,1l9,10l4,6l4,7l2,9v9l-1,6l-4,14v5l2,8
                    L807,98z"
                />
                <path 
                    style={bulbStyle(randomInt(1, 5), randomNum(2, 5))}
                    fill="#E0B428" 
                    d="M902,56l6-8l2-5v-5v-6l-1-6l1-3l3-6l3-4l5-2l5-1h5l9,5l3,3l3,5v5v6l-2,4l-5,7l-5,4l-8,1l-5,4l-8,8L902,56z"
                    />
                <path 
                    style={bulbStyle(randomInt(1, 5), randomNum(2, 5))}
                    fill="#E5E551" 
                    d="M907,166l8-5l5-2h5h7l8,4l7,6l2,6l1,7l-2,9l-4,6l-5,4l-8,3h-8l-8-2l-5-4l-4-5l-2-4l-1-7l-1-7L907,166z"
                />
                <path 
                    style={bulbStyle(randomInt(1, 5), randomNum(2, 5))}
                    fill="#F4BD98" 
                    d="M124,447c-6,1-11-4-11-4s-3,12-6,18c-13,12-20,0-22-5c-18,10-20-6-21-8c-29,19-29-18-29-18l8-27
                    c0,0,6-11,9-14c12-7,17,1,19,4c12-6,18,1,21,7c14-6,19,3,20,7c5-2,8-1,12,0c11,5,3,20,3,20v15C127,442,130,446,124,447z"
                />
                <path 
                    style={bulbStyle(randomInt(1, 5), randomNum(2, 5))}
                    fill="#F4BD98" 
                    d="M672,247c0,0,1-2,2-10c-3,0-7,1-12,0c-17-8-6-18-6-21c-16-10-7-18-3-21c-18-10-3-23,1-25s31-7,57-4
                    c10,5,7,13,7,15c8,12,1,17,0,19c10,10,1,19-2,21c11,17-5,22-5,22l-9,3L672,247z"
                />
                <path 
                    style={bulbStyle(randomInt(1, 5), randomNum(2, 5))}
                    fill="#F4BD98" 
                    d="M902,286l6-6l4-9c0,0,7-10,16,2c2,0,9-5,14,4c2,0,11-5,16,5c0,2,1,17-9,35c-4,3-9,6-13-2c-1-1-10,6-14-6
                    c-1,1-19,10-14-13c0-3-6-6-6-6V286z"
                />
                <path 
                    style={bulbStyle(randomInt(1, 5), randomNum(2, 5))}
                    fill="#F4BD98" 
                    d="M690,723c0,0-11-13-13-21c2-8,10-9,13-10c1-9,10-8,12-9c1-2,2-11,15-8c2-6,10-4,10-4s18,13,18,30
                    c-4,13-9,8-10,10c4,21-10,15-12,16c-4,11-15,4-15,4s-4-2-8-6c0,3-3,5-3,5l-9,2L690,723z"
                />
                <path 
                    style={bulbStyle(randomInt(1, 5), randomNum(2, 5))}
                    fill="#F4BD98" 
                    d="M473,653c0,0-2,1-8,4c-9,2-11-7-10-9c-14,0-8-14-8-15c-10-2-7-9-8-12c-4-2-3-6-2-9c9-12,27-15,30-13
                    c6,4,4,7,5,10c18,4,7,15,9,15c13,3,6,13,6,13l-4,4l-3,4L473,653z"
                />
                <image overflow="visible" width="1920" height="1920" xlinkHref={Lightbulbs}  transform="matrix(0.5208 0 0 0.5208 0 0)" />
            </svg>
        );
    }
}
 
export default HeroImage;