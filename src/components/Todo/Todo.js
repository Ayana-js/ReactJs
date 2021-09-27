import React from "react";
import InputItem from "../InputItem/InputItem"
import ItemList from "../ItemList/ItemList"
import styles from './Todo.module.css'
import CardContent  from "@material-ui/core/CardContent";
import Filter from "../Filter/Filter"

const sortingItemsTitle = {
  completed: 'Завершенные',
  unfinished: 'Незавершенные',
  all: 'Все'
};

class Todo extends React.Component {
    
    state = {
      items: 
        JSON.parse(localStorage.getItem('editedDealList') ||
        '[{"value":"Задача 1","isDone":false,"id":1},{"value":"Задача 2","isDone":false,"id":2}]'
      ),
      count: 2,
      isEmpty: false,
      isExist: false,
      isEditing: false,
      sorting: sortingItemsTitle.all
    };


    onClickDone = id => {
        const newItemList = this.state.items.map(item => {
            const newItem = {...item};
            if (item.id === id) {
                newItem.isDone = !item.isDone;
            }
            return newItem
        });
        this.setState({ items: newItemList});
    };

    onClickDelete = id => this.setState(state => ({
        items: state.items.filter(item =>
            item.id !== id),
    }));


    onClickAdd = value => {
      if (value !== '' & !this.state.items.some(item=> item.value.toLowerCase() === value.toLowerCase())) {
        this.setState(state => ({
          items: [
            ...state.items,
            {
              value,
              isDone: false,
              id: state.count + 1
            }
          ],
          count: state.count + 1,
          isEmpty: false,
          isExist: false
        }));
      } else {
        this.setState(state => (
          {
            isEmpty: value === '',
            isExist: value !== '' 
          }
        ));
      };
    };

    
    onClickSort = sorting => this.setState({ sorting: sorting });

    render() {
        
        let dealListString = JSON.stringify(this.state.items);
            localStorage.setItem('editedDealList', dealListString);

    let sortingItems;
      switch (this.state.sorting) {
      case sortingItemsTitle.completed: sortingItems = this.state.items.filter(item => item.isDone);
      break;
      case sortingItemsTitle.unfinished: sortingItems = this.state.items.filter(item => !item.isDone);
      break;
      case sortingItemsTitle.all: sortingItems = this.state.items;
      break;
      default :
      };

        return (
                <div className={styles.wrap}>
                   {this.state.empty && (
                       <div className={styles.empty}> </div>
                    )}
                    <div>
                    <CardContent>
                    <div className={styles.header}>
                    <h1 className={styles.title}>Список моих дел</h1>
                    <Filter
                      items={this.state.items} 
                      onClickSort={this.onClickSort}
                      sorting={this.state.sorting}
                    />
                </div>
                  <div className={styles.itemList}>
                    <ItemList 
                      sorting={sortingItems}
                      sortingValue={this.state.sorting} 
                      items={this.state.items} 
                      onClickDone={this.onClickDone}
                      onClickDelete={ this.onClickDelete }/>
                  </div>
                  <div className={styles.input}>
                    <InputItem 
                      onClickAdd={this.onClickAdd} 
                      isEmpty={this.state.isEmpty}
                      isExist={this.state.isExist}/>
                  </div>
                    </CardContent>
                    </div>
                </div>
           );
    }
}


export default Todo