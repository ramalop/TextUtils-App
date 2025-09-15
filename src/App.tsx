import './App.css';
import About from './Components/About';
import Alert from './Components/alert';
import Navbar from './Components/Navbar';
import TextForm from './Components/textForm';
import React,{useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import TypingTest from './Components/TypingTest';
type AlertType = {
  message: string;
  type: string;
};
function App() {
  const [mode , setMode] = useState('light')
  const [alert, setAlert] = useState<AlertType | null>(null);
  const showAlert = (message: string, type: string) => {
  setAlert({
    message: message,
    type: type
  });

  setTimeout(() => setAlert(null), 1500);
};
  const toggleMode = ()=>{
    if(mode==='light'){setMode('dark')
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode enabled","success")
    }else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled","success")
    }
    
  }
  
  return (
    <>
<Router>   
<Navbar title="TextPro" about = "About" mode = {mode} toggleMode = {toggleMode}></Navbar>
<Alert alert = {alert}></Alert>

<div className="container">
    <Routes>
          <Route
            path="/about"
            element={<About mode={mode}/>}
          />
          <Route
            path="/"
            element={<TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces" mode={mode} />}
          />
          <Route
            path="/TypingTest"
            element={<TypingTest mode={mode} showAlert={showAlert} />}
          />
        </Routes>
  </div>
  </Router>
    </>
  );
}

export default App;
