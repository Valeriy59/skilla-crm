import React, {useEffect} from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Sidebar} from "./components/Sidebar/Sidebar";
import {callsAPI} from "./api/api";
import {CallsTable} from "./components/CallsTable/CallsTable";


function App() {
  useEffect(() => {
    callsAPI.getList().then((res) => {
      console.log(res)
    })
  }, [])
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
