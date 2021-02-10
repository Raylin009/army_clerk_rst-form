import { useState } from 'react';
import Button from '@material-ui/core/Button'



const Question = () => {
  const [count, setCount] = useState(0);
  

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
    </div>
  )
}


export default Question;
