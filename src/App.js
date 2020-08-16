import React, { useContext} from 'react';
import './styles/App.css';
import "react-big-calendar/lib/css/react-big-calendar.css";
import { MainCalendar } from './components/MainCalendar'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import { GlobalProvider, GlobalContext } from './context/GlobalState'

function App(){
  const context = useContext(GlobalContext);

  return(
    <GlobalProvider>
      <div className="app">
        <Header />
          <div className="main-content">
            <Sidebar />
            <MainCalendar eventList={ context.events }/>
          </div>
      </div>
    </GlobalProvider>
  )
}
export default App;
