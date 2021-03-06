import React from "react";
import styles from "./Item.module.css"
import classnames from "classnames"
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import PropTypes from 'prop-types'

class Item extends React.Component {
    render () {
        const {value, isDone, onClickDone, id, onClickDelete} = this.props;
        return (
            <ListItem className={
                classnames({
                    [styles.item]: true
                })
            } >
                <Checkbox
                    id={id}
                    onClick={() => onClickDone(id)}
                    checked={isDone}
                    color="primary"
                />
                <div className={
                    classnames({
                        [styles.done]: isDone
                    })
                }> {value}</div>
                <ListItemSecondaryAction>
                    <IconButton aria-label="Comments" onClick={() => onClickDelete(id)}>
                        <DeleteIcon/>
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        )}
}



Item.propTypes = {
    value: PropTypes.string.isRequired,
    isDone: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired
};

export default Item;