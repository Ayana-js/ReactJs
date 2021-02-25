import React from 'react';
import styles from './Item.module.css';
import classnames from 'classnames';
import Checkbox from '../Checkbox/Checkbox';
import DeleteButton from '../DeleteButton/DeleteButton';

const Item  = ({ value, isDone, onClickDone, onClickDelete, id}) => (<span className={
    classnames ({
       [styles.item]: true,
       [styles.done]: isDone
    })
}>

<Checkbox
      value={value}
      checked={isDone}
      onClickDone={onClickDone}
      isDone={isDone}
      id={id}
    />
    <DeleteButton onClickDelete={onClickDelete} id={id} />
    { value }
</span> 
);
 
 export default Item;