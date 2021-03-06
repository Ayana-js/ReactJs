import React from 'react';
import Item from '../Item/Items';
import List from '@material-ui/core/List';

const ItemList = ({ items, onClickDone, onClickDelete }) => (
<List>
   {items.map(item => (
      <Item
         key={item.id}
         value={item.value}
         isDone={item.isDone}
         id={item.id}
         onClickDone={onClickDone}
         onClickDelete={onClickDelete}
      />
   ))}
</List>);

ItemList.defaultProps = {
   items: [{
       value: 'Упс, задачи не найдены.',
       isDone: false,
   }]
};

export default ItemList;