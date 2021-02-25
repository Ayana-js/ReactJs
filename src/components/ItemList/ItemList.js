import React from 'react';
import Item from '../Item/Items';

const ItemList = ({ items }) => (<ul>
   {items.map(item => <p key={item.value}><Item value={item.value} isDone={item.isDone} /></p>)}
</ul>);

export default ItemList;