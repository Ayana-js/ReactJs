import React from 'react';
import Item from '../Item/Items';

const ItemList = ({ items, onClickDone }) => (<div>
   {items.map(item => <p key={item.value}>
      <Item value={item.value} isDone={item.isDone} onClickDone={onClickDone} />
   </p>)}
</div>);

export default ItemList;