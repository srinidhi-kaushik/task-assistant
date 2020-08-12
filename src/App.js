import React from 'react';
import './styles/App.css';
import "react-big-calendar/lib/css/react-big-calendar.css";
import MainCalendar from './components/MainCalendar'
import Sidebar from './components/Sidebar'
import Header from './components/Header'

function App() {
  return(
    <div className="app">
      <Header />
      <div className="main-content">
        <Sidebar />
        <MainCalendar />
      </div>
    </div>
  )
}

export default App;
