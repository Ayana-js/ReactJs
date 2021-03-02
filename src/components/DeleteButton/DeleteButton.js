
import React from 'react';
import classnames from 'classnames';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import PropTypes from 'prop-types';
import styles from './Delete.module.css';


class DeleteButton extends React.Component {
  render() {
    const { isDeleted, onClickDelete, id } = this.props;
    return (
      <IconButton
      className={classnames({
        [styles.item]: true,
        [styles.delete]: isDeleted
      })}
      aria-label='Delete'
      deleted={isDeleted}
      onClick={() => onClickDelete (id)}
      >
      <DeleteIcon fontSize='small' />
      </IconButton>
  );
  }
}

DeleteButton.defaultProps = {
  isDeleted: false
};

DeleteButton.propTypes = {
  value: PropTypes.string.isRequired,
  isDeleted: PropTypes.bool,
  onClickDelete: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired
};


export default DeleteButton;
