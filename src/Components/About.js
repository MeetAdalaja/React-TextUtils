import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';

export default function About(props) {
    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // });

    let myStyle = {
        color: props.mode === 'dark' ? 'white' : '#102840',
        backgroundColor: props.mode === 'dark' ? '#2c4e71' : 'white'
    }

    return (
        <div className="container" style={{color: props.mode === 'dark' ? 'white' : '#102840'}}>
            <h1 className="my-3">About Us</h1>
            <div className="accordion" id="accordionExample" style={myStyle}>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong> Analyze Your Text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle} >
                        Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or 
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <strong>Free to Use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle} >
                        TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <strong>Browser Compatible </strong>
                        
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle} >
                        This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
