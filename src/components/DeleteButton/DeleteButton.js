
import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const DeleteButton = ({ onClickDelete, id }) => (
  <IconButton
    aria-label='Delete'
    onClick={() => onClickDelete(id)}
  >
    <DeleteIcon fontSize='small' />
  </IconButton>
);

export default DeleteButton;