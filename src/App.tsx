import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './component/List/List';
import Add from './component/Add';

interface IState{
  people:{
    
      name:string,
      url:string,
      age:number,
      note:string
  }[]
}
function App() {
  const [people ,setPeople]=useState<IState['people']>([{
    name:'Tiger Shroff',
    url:'data:image/jpeg;base64,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',
    age:30,
    note:'The Youngest and Talented Hero of india'
  }])
  return (
    <div className="App">
      <h1>Invite People</h1>
      <List people={people}/>
      <Add/>
     
    </div>
  );
}

export default App;
