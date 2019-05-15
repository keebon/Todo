import React from 'react';
import './App.css';
import SideBar from './components/SideBar';
import Content from './components/Content';
import AddTodo from './components/AddTodo';

function App() {
  return (
    <div className="App">
      <SideBar />
      <Content />
      <AddTodo />
    </div>
  );
}

export default App;
