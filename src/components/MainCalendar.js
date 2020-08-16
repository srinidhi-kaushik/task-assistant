import React, { useContext } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import "react-big-calendar/lib/css/react-big-calendar.css";
import '../styles/style.scss'
import { GlobalContext } from '../context/GlobalState'

const localizer = momentLocalizer(moment)

export const MainCalendar = () => {
  const { events } = useContext(GlobalContext);

  return (
    <div className="Calendar">
      <Calendar
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={events}
        style={{ height: "700px" }}
      />
    </div>
  )
}

