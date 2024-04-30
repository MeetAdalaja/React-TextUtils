import React, { useState } from "react";

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("upper case click" +  text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase!", "success");
    }
    const handleLoClick = () => {
        // console.log("upper case click" +  text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase!", "success");

    }

    const handleClear = () => {
        // console.log("upper case click" +  text);
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared", "success");
    }

    const handleOnChange = (event) => {
        // console.log("on change");
        setText(event.target.value);
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("copied to ClipBoard", "success");
    }
    
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed", "success");
    }

    const [text, setText] = useState('');
    // text = "New Text";     wrong way to change the state
    // setText("iammeet");    correct way to change the state

    return (
        <>
            <div className="container" style={{color: props.mode==='light'?'black':'white'}}>
                <h1 className="mb-4">{props.heading}</h1>
                <div className="form-group">
                    {/* <label htmlFor="myBox" className="form-label">Example textarea</label> */}
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#1b4a65':'white', color: props.mode==='light'?'black':'white'}} id="myBox" rows="8"></textarea>
                    <button disabled={text.length == 0} className="btn btn-primary m-1" onClick={handleUpClick}>Convert to UpperCase</button>
                    <button disabled={text.length == 0} className="btn btn-primary m-1" onClick={handleLoClick}>Convert to LowerCase</button>
                    <button disabled={text.length == 0} className="btn btn-primary m-1" onClick={handleClear}>Clear TextArea</button>
                    <button disabled={text.length == 0} className="btn btn-primary m-1" onClick={handleCopy}>Copy Text</button>
                    <button disabled={text.length == 0} className="btn btn-primary m-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                </div>
            </div>
            <div className="container my-2" style={{color: props.mode==='light'?'black':'white'}}>
                <h2>your text summary</h2>
                <p>{text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} words and {text.length} characters</p>
                <p>{0.008*text.split(" ").filter((element)=>{return element.length !== 0}).length} Minutes to read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Nothing To Preview"}</p>
            </div>
        </>
    );
}
