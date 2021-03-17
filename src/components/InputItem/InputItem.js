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
const [error, setError] = useState(initialState.error);

useEffect(()=> {
  console.log("update");
}, []);

 const onButtonClick = (event) =>
        {
            value: event.target.value.toUpperCase();
            // error: event.target.value.length > 0;
            return setValue(value);
                   setError(error);
        }
        

    const { onClickAdd } = this.props;

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
          value={this.state.value}
          onChange={ this.onButtonClick }
        />
        <Button
          variant='contained'
          color='secondary'
          fullWidth
          onClick={() => {
            if (this.state.value !== '') {
                onClickAdd(this.state.value);
                this.setState({ 
                    value: '',
                    error: false
                })}
            }
          }
        >
          Добавить
     </Button>
      </Grid>
  );
};


export default InputItem;