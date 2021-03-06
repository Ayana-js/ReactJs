import React from 'react';
import styles from './Item.module.css';
import classnames from 'classnames';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';
import PropTypes from 'prop-types';

class Item extends React.Component {
componentDidMount() {
    console.log('componentDidMount');
}

componentDidUpdate() {
    console.log('componentDidUpdate');
}

componentWillUnmount() {
    console.log('componentWillUnmount');
}

    render() {
        const { value, isDone, onClickDone, onClickDelete, id } = this.props;

    return(
        <div className={
            classnames({
                [styles.item]: false,
                [styles.done]: isDone,
            })
        }>
    
            <Checkbox
                onClick={() => onClickDone(id)}
            />
    
            <IconButton aria-label="Delete" onClick={() => onClickDelete(id)}>
                <DeleteIcon />
            </IconButton>
            { value}
        </div>) 
    }
};

Item.defaultProps = {
    value: "Задача без имени"
};

Item.propTypes = {
    value: PropTypes.string.isRequired
};

export default Item;