import React,{useState} from 'react'

export default function TextForms(props) {
  const[text,setText]=useState('')
  const handleupclick =()=>{
    //console.log('onclick');
    let newtext=text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to upper case","success");
  }
  const handlelowclick =()=>{
   
    let newtext=text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to lower case","success");
  }
  const handleclearclick =()=>{
    
    setText('');
    props.showAlert("Text Cleared","success");
  }
  const handleonchange =(event)=>{
    //console.log('on change');
    setText(event.target.value);
  }
  const handlecopyclick =()=>
  {
  let  text = document.getElementById("My box");
  text.select();
  navigator.clipboard.writeText(text.value);
  props.showAlert("Text copied","success");

  }
  const handleextraspace =()=>
  {
    let newText= text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces removed","success");
  }
  
  
  return (
    <div className="container my-2 "  style={{color: props.mode==='light'?'black':'white'}} >
  <div>
  <div className="mb-3">
  <label htmlFor="My box" className="form-label" >{props.heading}</label>
    <textarea className="form-control mb-2" id="My box" rows="10" value={text} onChange={handleonchange} style={{backgroundColor: props.mode==='light'?'white':'#cdcdcd',color: props.mode==='light'?'black':'#2a0204'}}  />
    <button className="btn btn-primary mx-1"onClick={handleupclick}>Convert to uppercase</button>
    <button className="btn btn-primary mx-1"onClick={handlelowclick}>Convert to lowercase</button>
    <button className="btn btn-primary mx-1"onClick={handleclearclick}>Clear Text</button>
    <button className="btn btn-primary mx-1"onClick={handlecopyclick}>Copy Text</button>
    <button className="btn btn-primary mx-1"onClick={handleextraspace}>Remove extra sapces</button>

  </div>
</div>
<div >
  <div className="my-3" >
    <h2>Your text summary </h2>
    <p>You have written: {text.split(" ").length} and {text.length}characters.</p>
    <p>On average it would require {0.008*text.split(" ").length}minutes to read the text.</p>
<h2>Preview:</h2> 
<p>{text.lenght>0?text:"Enter any text above to preview here."}</p>
 </div>
</div>
</div>


  )
}
TextForms.defaultProps={
  heading:"write something here",
}
