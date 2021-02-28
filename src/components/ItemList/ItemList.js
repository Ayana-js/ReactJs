import React from 'react';
import Item from '../Item/Items';
import List from '@material-ui/core/List';

const ItemList = ({ items, onClickDone, onClickDelete }) => (<List>
   {items.map(item => <p key={item.value}>
      <Item 
        value={item.value}
        isDone={item.isDone}
        isDeleted={item.isDeleted}
        id={item.id}
        onClickDone={onClickDone}
        onClickDelete={onClickDelete}
      />
   </p>)}
</List>);

export default ItemList;