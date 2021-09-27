import React from "react";
import IconAdd from "../../img/add.svg"
import styles from './InputItem.module.css'
import classnames from 'classnames'

class InputItem extends React.Component {
    state = {
        value: '',
        buttonEnabled: false

    };

    onClickButton = (event) =>
        this.setState({
            value: event.target.value,
            buttonEnabled: event.target.value.length > 0
        });


    render () {
        const { onClickAdd, id, isEmpty, isExist } = this.props;

        return (<div className={styles.wrap}>
            <div className={classnames({
          [styles.input_wrap]: true,
          [styles.empty_field]: isEmpty,
          [styles.exist_field]: isExist
        })
        }>
            <div className={styles.wrap}>
            <input className={styles.input} 
                type="text"
                placeholder={'Введите новое дело'}
                value={this.state.value}
                onChange={ this.onClickButton }
                id = {id}>

            </input>

            <div
                className={styles.button}
                disabled={!this.state.buttonEnabled}
                onClick={() => {
                    if (this.state.value !== '') {
                        onClickAdd(this.state.value);
                        this.setState({ value: '',
                            buttonEnabled: false
                        })}
                    }
                }> 
                   <img className={styles.img} src={IconAdd} alt=""/> 
            </div>
            </div>
            </div>
        </div>)
    }
}



export default InputItem