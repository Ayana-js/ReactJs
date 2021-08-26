import React from "react";
import InputItem from "../InputItem/InputItem"
import ItemList from "../ItemList/ItemList"
import classnames from 'classnames';
import styles from './Todo.module.css'
import CardContent  from "@material-ui/core/CardContent";


class Todo extends React.Component {
    state = {
        items: [
            {
                value: 'Написать новое приложение',
                isDone: true,
                id: 1
            },
            {
                value: 'Прописать props',
                isDone: true,
                id: 2
            },
            {
                value: 'Отправить репозиторий',
                isDone: false,
                id: 3
            }],
        count: 0,
        selectedMenuItem: 'all',
        empty: false
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
        count: state.count - 1

    }));

    onClickAdd = (value) => this.setState(state => ({
        items:[
            ...state.items,
            {
                value,
                isDone: false,
                id: state.count + 1
            }],

        count: state.count + 1
    }));


    render() {
        const allItems = this.state.items;
        const completedItems = this.state.items.filter(item => item.isDone === true)
        const uncompletedItems = this.state.items.filter(item => item.isDone === false)

        let items;
        switch (this.state.selectedMenuItem) {
            case 'all':
                items = allItems;
                break;
            case 'completedItems':
                items = completedItems
                break;
            case 'uncompletedItems':
                items = uncompletedItems
                break;
            default:
                items = allItems;
        };

        return (

                <div className={styles.wrap}>
                   {this.state.empty && (
                       <div className={styles.empty}> </div>
                    )}
                    <CardContent>
                    <div className={styles.header}>
                    <h1 className={styles.title}>Список моих дел</h1>
                    <button
                onClick={() => {
                  this.setState({
                    selectedMenuItem: 'completedItems',
                  });
                }} 
                className={styles.done}>
                Завершённые 
                <span className={styles.done_length}>
                  {completedItems.length}
                </span>
              </button>
              <button
                onClick={() => {
                  this.setState({
                    selectedMenuItem: 'uncompletedItems',
                  });
                }} 
                className={styles.not_done}>
                  Незавершённые 
                  <span className={styles.not_done_length}>
                    {uncompletedItems.length}
                  </span>
                </button>
              <button
                onClick={() => {
                  this.setState({
                    selectedMenuItem: 'all',
                  });
                }} 
                className={styles.all_done}
              >
                Все
              </button>
             </div>



                    <ItemList items={this.state.items} onClickDone={this.onClickDone} onClickDelete={ this.onClickDelete }/>
                    <InputItem onClickAdd={this.onClickAdd}/>
                    </CardContent>
                </div>

           );
    }
}


export default Todo