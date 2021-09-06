import React from "react";
import Item from "../Item/Item"
// import List from '@material-ui/core/List';
import PropTypes from 'prop-types'
import styles from "./ItemList.module.css"


const ItemList = ({sorting, sortingValue, items, onClickDone, onClickDelete }) => (
        // <List>
            
        //     {items.map(item => (
        //         <Item
        //             key={item.id}
        //             value={item.value}
        //             isDone={item.isDone}
        //             onClickDone={onClickDone}
        //             onClickDelete={onClickDelete}
        //             id={item.id}
        //         />
        //     ))}
        // </List>
        <div>
    { sorting.length === 0 & sortingValue !== 'Завершенные' ?
      <div className={styles.empty_list}>
        <div className={styles.no_deals_picture}></div>
        <p className={styles.no_deals_message}>Вы ещё не добавили ни одной задачи</p>
        <p className={styles.do_it_message}>Сделайте это прямо сейчас!</p>
      </div> :
      <ul className={styles.item_list}>
        {sorting.map(item => <li key={item.id}>
          <Item 
            value={item.value}
            isDone={item.isDone}
            id={item.id}
            onClickDone={onClickDone}
            onClickDelete={onClickDelete}
            // onClickRedact={onClickRedact}
            // onChangeItem={onChangeItem}
          />
        </li>)}
      </ul>
    }
  </div>
    );

ItemList.propTypes = {
    items: PropTypes.array.isRequired
};

export default ItemList;