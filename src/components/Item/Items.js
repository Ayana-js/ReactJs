import React, { useState, useEffect } from 'react';
import styles from './Item.module.css';
import classnames from 'classnames';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';
import PropTypes from 'prop-types';

const Item=() => {
    const initialState = {
        items: [
            {
                value: 'Написать новое приложение',
                isDone: false,
                id: 1
            },
            {
                value: 'Прописать props-ы',
                isDone: false,
                id: 2
            },
            {
                value: 'Отправить pullrequest',
                isDone: false,
                id: 3
            }
        ],
        count: 3
    };

        const [value] = useState(initialState.value);
        const [isDone] = useState(initialState.isDone);
        const [onClickDone] = useState(initialState.onClickDone);
        const [onClickDelete] = useState(initialState.onClickDelete);
        const [id] = useState(initialState.id);

        useEffect(()=> {
            console.log("update");
        }, []);

    return(
        <div className={
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
        </div>) 
    
};

Item.defaultProps = {
    value: "Задача без имени"
};

Item.propTypes = {
    value: PropTypes.string.isRequired
};

export default Item;