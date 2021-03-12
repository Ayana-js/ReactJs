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
        count: 3
    };

   const [item, setItem] = useState(initialState.item);
   const [count, setCount] = useState(initialState.count);

   useEffect(()=> {
       console.log("update");
   }, []);

      const onClickDone = id => {
            const newItem = { ...item };
            if (item.id === id) {
                newItem.isDone = !item.isDone;
            }
            return newItem;
        setItem(newItem)
      };


    const onClickDelete = id => {
        return item.id !== id;
    };
        setCount((count) => count-1)
    
        return (
            <div className={styles.wrap}>
                <Card>
                    <CardContent>
                        <h1 className={styles.title}>Важные дела:</h1>

                        <ItemList
                        />

                    </CardContent>
                </Card>
            </div>
        );
    };
 
    

export default App;
