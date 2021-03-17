import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

const Footer=() => {
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

  const [count, setCount] = useState(initialState.count);
  
  useEffect(()=> {
    console.log("update");
  }, []);

    return (
      <Typography variant='subtitle1' color='textSecondary'>
      Осталось выполнить вот столько дел: {count}
  </Typography>);
}

Footer.defaultProps = {
    count: 0
};

Footer.propTypes = {
  count: PropTypes.number.isRequired
};

export default Footer;