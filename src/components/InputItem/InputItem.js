import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';


class InputItem extends React.Component {
  componentDidMount() {
    console.log('componentDidMount');
}

componentDidUpdate() {
    console.log('componentDidUpdate');
}

componentWillUnmount() {
    console.log('componentWillUnmount');
}
  state = {
    value: '',
    error: false
  };

  onButtonClick = (event) =>
        this.setState({
            value: event.target.value.toUpperCase(),
            error: event.target.value.length > 0
        });
        
  render() {
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
      </Grid>);
  }
}


export default InputItem;