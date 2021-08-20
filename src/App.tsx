import React from 'react';
import logo from './logo.svg';
import './App.css';
import InformationBar from './components/common/InformationBar';
import MenuBar from './components/menu-bar/MenuBar';
import SideBar from './components/side-bar/SideBar';

function App() {
  return (
    <div className="App">
      <InformationBar />
      <MenuBar />
      <div className="grid grid-flow-col">
        <SideBar />
        <header className="App-header col-span-11">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </div>
  );
}

export default App;
