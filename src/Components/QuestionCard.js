import { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const Question = () => {
  const [count, setCount] = useState(0);
  const classes = useStyles();

  return (
    <div>
      <h1>{count}</h1>
      <Button 
        onClick={() => setCount(count + 1)} 
        variant="contained" 
        color="primary"
      >
        Add 1
      </Button>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="standard-basic" label="Standard" />
        <TextField id="filled-basic" label="Filled" variant="filled" />
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </form>
    </div>
  )
}


export default Question;
