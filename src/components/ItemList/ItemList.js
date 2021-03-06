import React from 'react';
import Item from '../Item/Items';
import List from '@material-ui/core/List';

class ItemList extends React.Component {
   componentDidMount() {
      console.log('componentDidMount');
  }
  
  componentDidUpdate() {
      console.log('componentDidUpdate');
  }
  
  componentWillUnmount() {
      console.log('componentWillUnmount');
  }
  render () {
     const { items, onClickDone, onClickDelete } = this.props;

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
}

ItemList.defaultProps = {
   items: [{
       value: 'Упс, задачи не найдены.',
       isDone: false,
   }]
};

export default ItemList;