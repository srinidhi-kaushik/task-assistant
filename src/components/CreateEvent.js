import React, { useContext, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import moment from 'moment'
import { GlobalContext } from '../context/GlobalState'

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function CreateEvent() {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const [title, setTitle] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState(moment().toDate());
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const { addEvent } = useContext(GlobalContext);
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleSubmit = (e) => {
    handleClose();
    e.preventDefault();

    const newEvent = {
      start: moment(startDate + ' ' + startTime)._d,
      end: (endDate === startDate) ? moment(endDate + ' ' + endTime)._d : moment(endDate + ' ' + endTime).add(1, 'days')._d,
      title
    }
    console.log(newEvent.start);
    addEvent(newEvent);
  }

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Create Event
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Create New Event</DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText> */}
          <div>
            <TextField
              autoFocus
              id="event-title"
              label="Event Title"
              type="name"
              fullWidth
              onChange={(e) => setTitle(e.target.value)}
              value={title}
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
            value={startDate}
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
            value={startTime}
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
            value={endDate}
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
            value={endTime}
          />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
