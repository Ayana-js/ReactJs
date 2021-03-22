import React from "react";
import styles from "./Item.module.css"
import classnames from "classnames"
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded';
import PropTypes from 'prop-types'

class Item extends React.Component {
    componentDidMount () {
       this.timerId = setInterval(() => console.log(`${(new Date()).toUTCString()} выполняю Монтирование компонента "${this.props.value}"`), 900);
    }

    componentDidUpdate () {
        console.log(`${(new Date()).toUTCString()} выполняю Обновление`)
    }

    componentWillUnmount() {
        console.log(`${(new Date()).toUTCString()} выполняю Удаление`)
        clearInterval(this.timerId);
    }

    render () {
        const {value, isDone, onClickDone, id, onClickDelete} = this.props;

        return (
            <ListItem className={
                classnames({
                    [styles.item]: true
                })
            } >
                <Checkbox
                    onClick={() => onClickDone(id)}
                    checked={isDone}
                />
                <div className={
                    classnames({
                        [styles.done]: isDone
                    })
                }> {value}</div>
                <ListItemSecondaryAction className={styles.delete}>
                    <IconButton aria-label="Comments" onClick={() => onClickDelete(id)}>
                        <DeleteForeverRoundedIcon/>
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