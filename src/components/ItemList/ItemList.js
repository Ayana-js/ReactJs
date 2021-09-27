import React from "react";
import Item from "../Item/Item"
import PropTypes from 'prop-types'
import styles from "./ItemList.module.css"


const ItemList = ({sorting, sortingValue, items, onClickDone, onClickDelete }) => (
        <div>
    { sorting.length === 0 & sortingValue !== 'Завершенные' ?
      <div className={styles.empty}>
        <div className={styles.img}></div>
        <p className={styles.nodeal}>Вы ещё не добавили ни одной задачи</p>
        <p className={styles.doit}>Сделайте это прямо сейчас!</p>
      </div> :
      <ul className={styles.list}>
        {sorting.map(item => <li key={item.id}>
          <Item 
            value={item.value}
            isDone={item.isDone}
            id={item.id}
            onClickDone={onClickDone}
            onClickDelete={onClickDelete}
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