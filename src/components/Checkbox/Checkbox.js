import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import styles from './Checkbox.module.css';
  
class CheckboxLabel extends React.Component {

  render() {
    const { value, isDone, onClickDone, id } = this.props;
    return (
      <FormGroup
        className={classnames({
          [styles.item]: true,
          [styles.done]: isDone
        })}
        row
      >
        <FormControlLabel
          control={
            <Checkbox checked={isDone} onClick={() => onClickDone(id)} />
          }
          label={value}
        />
      </FormGroup>
    );
  }
}

Checkbox.defaultProps = {
  isDone: false
};

Checkbox.propTypes = {
  value: PropTypes.string.isRequired,
  isDone: PropTypes.bool,
  onClickDone: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired
};

export default Checkbox;