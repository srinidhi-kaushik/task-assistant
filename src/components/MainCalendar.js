import React, { useContext, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import "react-big-calendar/lib/css/react-big-calendar.css";
import '../styles/style.scss'
import { GlobalContext } from '../context/GlobalState'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const localizer = momentLocalizer(moment)

export const MainCalendar = () => {
  const classes = useStyles();
  const { events, addEvent, deleteEvent } = useContext(GlobalContext);
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState(moment().toDate());
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [editEvent, setEvent] = useState({});

  const handleClickOpen = (currentEvent) => {
    setEvent(currentEvent);
    setTitle(currentEvent.title)
    setStartDate(currentEvent.startDate)
    setStartTime(currentEvent.startTime)
    setEndDate(currentEvent.endDate)
    setEndTime(currentEvent.endTime)
    setOpen(true);
  };

  const handleSave = (e) => {
    e.preventDefault()
    handleClose()
    deleteEvent(editEvent.id)
    addEvent({ 
      id: editEvent.id,
      title,
      startDate,
      endDate,
      startTime,
      endTime,
      start: moment(startDate + ' ' + startTime)._d,
      end: (endDate === startDate) ? moment(endDate + ' ' + endTime)._d : moment(endDate + ' ' + endTime).add(1, 'days')._d
    })
  }

  const handleDelete = () => {
    deleteEvent(editEvent.id)
    handleClose()
  }
  const handleClose = () => {
    setOpen(false);
  };
  
  return (
      <div className="Calendar">
        <Calendar 
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="month"
          events={events}
          style={{ height: "700px" }}
          onSelectEvent={(event) => {
            handleClickOpen(event);
          }}
        />
        
        <Dialog open={open} onClose={handleClose} aria-labelledby="EDIT THIS form-dialog-title">
          <DialogTitle id="form-dialog-title">View/Edit Event</DialogTitle>
          <DialogContent>
            <div>
              <TextField
                autoFocus
                id="event-title"
                label="Event Title"
                type="name"
                fullWidth
                defaultValue={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className={classes.root}>
              <TextField
                autoFocus
                required
                id="start-date"
                label="Start Date"
                type="date"
                InputLabelProps={{
                    shrink: true,
                }}
                onChange={(e) => setStartDate(e.target.value)}
                defaultValue={startDate}
              />
              <TextField
                autoFocus
                required
                id="start-time"
                label="Start Time"
                type="time"
                InputLabelProps={{
                    shrink: true,
                }}
                onChange={(e) => setStartTime(e.target.value)}
                defaultValue={startTime}
              />
              <TextField
                autoFocus
                required
                id="end-date"
                label="End Date"
                type="date"
                InputLabelProps={{
                    shrink: true,
                }}
                onChange={(e) => setEndDate(e.target.value)}
                defaultValue={endDate}
              />
              <TextField
                autoFocus
                required
                margin="dense"
                id="end-time"
                label="End Time"
                type="time"
                InputLabelProps={{
                    shrink: true,
                }}
                onChange={(e) => setEndTime(e.target.value)}
                defaultValue={endTime}
              />
              </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleDelete} color="primary">
              Delete
            </Button>
            <Button onClick={handleSave} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog> *
      </div>
  )
}