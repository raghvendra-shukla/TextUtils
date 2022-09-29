
import React, { useState } from 'react';
import './App.css';
import About from './component/About';
import Alert from './component/Alert';
import Navbar from './component/Navbar';
import Textform from './component/Textform';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
  }
  const togglemode=()=>{
    if(mode==="light"){
      setMode("dark");
      document.body.style.background="#636566";
      showAlert(" Dark mode is enabled!","success");
    }
    else{
      setMode("light");
      document.body.style.background="white";
      showAlert(" Light mode is enabled!","success");
    }
  }
  return (
    <>
    <Router>
    <Navbar title="TextUtils" about="About" mode={mode} togglemode={togglemode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <Routes>
      <Route exact path="/about" element={<About mode={mode}/>}>
      </Route>
      <Route exact path="/" element={<Textform heading="Write Text Here" mode={mode} showAlert={showAlert}/>}>
      </Route>
    </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
