
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';
import React,{useState} from 'react'
import Alert from './components/Alert';




function App() {
const [mode,setMode] = useState('light');
const toggleMode =()=>
{
  if(mode === 'light')
  {
    setMode('dark');
    document.body.style.backgroundColor ='#045881cf';
    showAlert("Dark mode has been enabled","success");
  }
  else
  {
    setMode('light');
    document.body.style.backgroundColor ='white';
    showAlert("Light mode has been enabled","success");
  }
}
const [alert,setAlert]=useState(null);
const showAlert=(message,type)=>{
  setAlert({
    msg: message,
    type: type
  })
  setTimeout(()=>{
    setAlert(null);
  },1500);

}
  return (
<>
<Navbar  title ='Text uttiles'next="About us" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<TextForms showAlert={showAlert} heading="Enter your text here"  mode={mode}/>


</>
);
}

export default App;
