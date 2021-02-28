import React from 'react';
import TextField from '@material-ui/core/TextField';

const InputItem = () => (<div> 
     <TextField 
       id="standard-full-width"
       style={{ margin: 8 }}
       placeholder="Добавить задание"
       fullWidth
       margin="normal"
       InputLabelProps={{
       shrink: true,
       }}
    />
</div>);

export default InputItem;