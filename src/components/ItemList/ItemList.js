import React from "react";
import Item from "../Item/Item"
import List from '@material-ui/core/List';
import PropTypes from 'prop-types'


const ItemList = ({items, onClickDone, onClickDelete }) => (
        <List>
            {items.map(item => (
                <Item
                    key={item.id}
                    value={item.value}
                    isDone={item.isDone}
                    onClickDone={onClickDone}
                    onClickDelete={onClickDelete}
                    id={item.id}
                />
            ))}
        </List>
    );

ItemList.propTypes = {
    items: PropTypes.array.isRequired
};

export default ItemList;