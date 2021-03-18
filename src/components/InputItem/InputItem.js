import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const InputItem = () => {
  const initialState = {
    value: '',
    error: false
  };
 
const [value, setValue] = useState(initialState.value);
// const [error] = useState(initialState.error);
const [onClickAdd] = useState(initialState.onClickAdd);

useEffect(()=> {
  console.log("update");
}, []);

 const onButtonClick = (event) => {
      const newItem = ({ 
            value: event.target.value.toUpperCase(),
            error: event.target.value.length > 0,
        })
        setValue(newItem)
      };

    return (
      <Grid>
        <TextField
          id="standard-full-width"
          placeholder="Добавить задание"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          value={value}
          onChange={onButtonClick }
        />
        <Button
          variant='contained'
          color='secondary'
          fullWidth
          onClick={() => {
            if (value !== '') {
                onClickAdd(value);
                const newItems = ({ 
                    value: '',
                    error: false
                })
                setValue(newItems)
              }
            }
          }
        >
          Добавить
     </Button>
      </Grid>
  );
};


export default InputItem;