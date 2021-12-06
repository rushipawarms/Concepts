import './App.css';
import Us from './Component/Us';
import Ue from './Component/Ue'
import Ue2 from './Component/Ue2';
import Infinite from './Component/Infinite';
import Ue3 from './Component/Ue3';
import context from './Component/ContextApi';
import React,{useState} from 'react';
import Nav from './Component/Nav';
import Parent1 from './Component/Parent1';
import Parent2 from './Component/Parent2';
function App() {
  const [theme,setthem]=useState(true);
  return (
  <context.Provider value={theme}>
    <button onClick={()=>setthem(!theme)}>change</button>
    <Nav/>
    <Parent1/>
    <Parent2/>

  </context.Provider>
  )
  }

export default App;
