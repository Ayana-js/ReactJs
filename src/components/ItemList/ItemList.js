import React, { useState, useEffect } from 'react';
import Item from '../Item/Items';
import List from '@material-ui/core/List';

const ItemList=() => {
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
 
     const [items] = useState(initialState.items);
     const [onClickDone] = useState(initialState.onClickDone);
     const [onClickDelete] = useState(initialState.onClickDelete);

     useEffect(()=> {
        console.log("update");
    }, []);

     return (
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
   </List>
     )
}

ItemList.defaultProps = {
   items: [{
       value: 'Упс, задачи не найдены.',
       isDone: false,
   }]
};

export default ItemList;