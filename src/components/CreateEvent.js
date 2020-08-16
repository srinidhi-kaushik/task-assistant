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
  const [startDate, setStartDate] = useState(moment().toDate());
  const [endDate, setEndDate] = useState(moment().toDate());

  const { addEvent } = useContext(GlobalContext);
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleSubmit = (e) => {
    handleClose();
    e.preventDefault();
    // console.log(startDate);
    // console.log(moment().toDate());
    // console.log(moment(startDate)._d);
    // console.log(moment())

    const newEvent = {
      start: moment(startDate)._d,
      end: moment(endDate).add(1, 'days')._d,
      title
    }
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
