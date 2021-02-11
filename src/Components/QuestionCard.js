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
      <h2 style={{color: "cornflowerblue"}}>872nd RST Form</h2>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="standard-basic" label="Last Name" variant="outlined"/>
        <TextField id="filled-basic" label="First Name" variant="outlined" />
        <TextField id="outlined-basic" label="Middle Initial" variant="outlined" />
        <TextField id="outlined-basic" label="Grade" variant="outlined" />
        <TextField id="outlined-basic" label="RST Dates" variant="outlined" />
        <TextField id="outlined-basic" label="Why can't you come to drill?" variant="outlined" />
        <TextField id="outlined-basic" label="When are you making it up?" variant="outlined" />
        <TextField id="outlined-basic" label="what are you doing do to make up?" variant="outlined" />
        <TextField id="outlined-basic" label="Who will supervise your make up?" variant="outlined" />



        

      </form>
    </div>
  )
}


export default Question;
