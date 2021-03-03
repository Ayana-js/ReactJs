import React from 'react';
import styles from './Item.module.css';
import classnames from 'classnames';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';
import PropTypes from 'prop-types';


const Item = ({ value, isDone, onClickDone, onClickDelete, id }) => (
    <span className={
        classnames({
            [styles.item]: false,
            [styles.done]: isDone,
        })
    }>

        <Checkbox
            onClick={() => onClickDone(id)}
        />

        <IconButton aria-label="Delete" onClick={() => onClickDelete(id)}>
            <DeleteIcon />
        </IconButton>
        { value}
    </span>
);

Item.propTypes = {
    value: PropTypes.string
};

export default Item;