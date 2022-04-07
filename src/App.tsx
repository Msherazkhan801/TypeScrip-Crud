import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './component/List/List';

interface IState{
  people:{
    
      name:string,
      url:string,
      age:number,
      note:string
  }[]
}
function App() {
  const [people ,setPeople]=useState<IState['people']>([])
  return (
    <div className="App">
      <h1>Invite People</h1>
      <List people={people}/>
     
    </div>
  );
}

export default App;
