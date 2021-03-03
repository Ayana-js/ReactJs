import React from 'react';
import Item from '../Item/Items';
import List from '@material-ui/core/List';
import PropTypes from 'prop-types';

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

ItemList.propTypes = {
   items: PropTypes.array
};

export default ItemList;