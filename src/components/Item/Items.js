import React from 'react';
import styles from './Item.module.css';
import classnames from 'classnames';
import Checkbox from '../Checkbox/Checkbox';
import DeleteButton from '../DeleteButton/DeleteButton';

const Item  = ({ value, isDone, isDeleted, onClickDone, onClickDelete, id}) => (<span className={
    classnames ({
       [styles.item]: true,
       [styles.done]: isDone,
       [styles.delete]: isDeleted
    })
}>

<Checkbox
    onClick={() => onClickDone(id)}
/>

<DeleteButton 
    onClick={() => onClickDelete(id)}
/>
{ value }
</span> 
);
 
 export default Item;