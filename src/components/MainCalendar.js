import React, { Component } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import "react-big-calendar/lib/css/react-big-calendar.css";
import '../styles/style.scss'

const localizer = momentLocalizer(moment)

class MainCalendar extends Component {
  state = {
    events: [
      {
        // start: moment().toDate(),
        // end: moment()
        //   .add(3, "days")
        //   .toDate(),
        // title: "Some title"
      }
    ]
  };

  render() {
    return (
      <div className="Calendar">
        <Calendar
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="week"
          events={this.state.events}
          style={{ height: "100%" }}
        />
      </div>
    );
  }
}

export default MainCalendar;
