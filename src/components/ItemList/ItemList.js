import React from 'react';
import Item from '../Item/Items';
import List from '@material-ui/core/List';

const ItemList = ({ items, onClickDone }) => (<List>
   {items.map(item => <p key={item.value}>
      <Item 
        value={item.value}
        isDone={item.isDone} 
        id={item.id}
        onClickDone={onClickDone}
      />
   </p>)}
</List>);

export default ItemList;