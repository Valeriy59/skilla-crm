import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Sidebar} from "./components/Sidebar/Sidebar";
import {CallsTable} from "./features/CallsTable/CallsTable";


function App() {

  return (
    <div className='app-wrapper'>
      <Sidebar/>
      <Header/>
      <div className='app-wrapper-content'>
        <CallsTable/>
      </div>
    </div>
  );
}

export default App;
