import React from "react";
import IconAdd from "../../img/add.svg"
import styles from './InputItem.module.css'

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
        const { onClickAdd } = this.props;

        return (<div className={styles.wrap}>
           
            <input className={styles.input} 
                type="text"
                placeholder={'Введите новое дело'}
                value={this.state.value}
                onChange={ this.onClickButton }>
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
                   <img src={IconAdd} alt=""/> 
            </div>
        </div>)
    }
}



export default InputItem