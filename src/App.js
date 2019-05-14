import React from 'react';
import './App.css';
import SideBar from './components/SideBar';
import Header from './components/templates/Header';
import Footer from './components/templates/Footer';
import Content from './components/Body';

function App() {
  return (
    <div className="App">
      <Header />
      <SideBar />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
