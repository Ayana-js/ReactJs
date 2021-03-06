import React from 'react';
import Typography from '@material-ui/core/Typography';


const Footer = ({ count }) =>
  (<Typography variant='subtitle1' color='textSecondary'>
      Осталось выполнить вот столько дел: {count}
  </Typography>);

Footer.defaultProps = {
    count: 0
};

export default Footer;