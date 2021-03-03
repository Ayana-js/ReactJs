import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

class InputItem extends React.Component {
  state = {
    InputValue: '',
    error: false
  };

  onButtonClick = () => {

    if (this.state.inputValue === '') {
      this.setState({
        error: true,
      });
    } else {      
      this.setState({
        error: false,
        inputValue: ''
    })

    this.props.onClickAdd(this.state.InputValue);
  }
};

  render() {
    const { onClickAdd } = this.props;

    return (
      <Grid>
        <TextField
          id="standard-full-width"
          style={{ margin: 8 }}
          error={this.state.error}
          placeholder="Добавить задание"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          value={this.state.InputValue}
          onChange={event => this.setState({ InputValue: event.target.value })}
        />
        <Button
          variant='contained'
          color='secondary'
          fullWidth
          onClick={this.onButtonClick}
        >
          Добавить
     </Button>
      </Grid>);
  }
}

export default InputItem;