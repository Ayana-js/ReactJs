import React, { useState, useEffect } from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './App.module.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const App=() => {
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
        count: 6
    };

   const [items, setItems] = useState(initialState.items);
   const [count, setCount] = useState(initialState.count);

   useEffect(()=> {
       console.log("update");
   }, []);

   const onClickDone = id => {
    const newItemList = items.map( item => {
        const newItem = {...item};
        if (item.id === id) {
            newItem.isDone = !item.isDone;
        }
        return newItem;
    });
    setItems(newItemList)
    }; 


    const onClickDelete = id => {
        return items.id !== id;
    };

    const onClickAdd = value => {
      const newItems = {
        items: [
             ...items, 
            {
               value,
               isDone: false,
               id: count +1
            }
        ],
    };
    setItems(newItems)
    setCount((count) => count-1)
    };

    
        return (
            <div className={styles.wrap}>
                <Card>
                    <CardContent>
                        <h1 className={styles.title}>Важные дела:</h1>
                        <InputItem onClickAdd={onClickAdd} />

                        <ItemList
                        items={items}
                        onClickDone={onClickDone}
                        onClickDelete={onClickDelete}
                        />
                        <Footer count={count} />

                    </CardContent>
                </Card>
            </div>
        );
    };
 
    

export default App;
