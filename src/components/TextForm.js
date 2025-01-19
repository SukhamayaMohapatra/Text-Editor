import React,{useState} from 'react'

export default function TextForm() {

  const[text,setText] = useState()
  
  const handleChange = (e)=>{

    setText(e.target.value);
  }
  const handleUpClick = ()=>{
    let newText = text.toUpperCase();
    setText(newText);
   
  }

  const handleDownClick = ()=>{

        let newText = text.toLowerCase();
        setText(newText);
  }
  const handleClear = ()=>{

    let newText = ("");
    setText(newText);
}
  return (
    <>
    <div className="container">
            <div className="mb-3">
            <h1>Enter Text to Analyze</h1>
            <textarea className="form-control"
              id="exampleFormControlTextarea1"
              rows="8"
              placeholder='Enter your Text Here'
              value={text}
              onChange={handleChange}
              ></textarea>
            </div>
            <button type="button" className="btn btn-dark mx-3" onClick={handleUpClick}>Convert to Upper Case</button>
            <button type="button" className="btn btn-info mx-3" onClick={handleDownClick}>Convert to Lower Case</button>
            <button type="button" class="btn btn-danger mx-3" onClick={handleClear}>Clear Console </button>

    </div>
    <div className="container">
        <h1>Your Text Summary</h1>
        <p> {text.split(" ").length} words and {text.length} characters are present</p>

    </div>
    </>
  )
}
