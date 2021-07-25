import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
// import Card from '@material-ui/core/Card';
// import MenuItem from '@material-ui/core/MenuItem';
// import MenuList from '@material-ui/core/MenuList';
import Todo from '../Todo/Todo';
import About from '../About/About';
// import NavLink from '@material-ui/core/NavLink';
// import Contacts from '../Contacts/Contacts';
import styles from './App.module.css';

// const App = () =>
//   (<Router>
//     <div className={styles.wrap}>
    
//       <Card className={styles.sidebar}>
//           <MenuList>
//              <Link to='/' className={styles.link}><MenuItem>Обо мне</MenuItem></Link>
//              <Link to='/todo' className={styles.link}><MenuItem>Дела</MenuItem></Link>
//              <Link to='/contacts' className={styles.link}><MenuItem>Контакты</MenuItem></Link>
//           </MenuList>
//       </Card>
//       <Card className={styles.content}>
//        <Route path='/' exact component={About} />
//        <Route path='/todo' component={Todo} />
//        <Route path='/contacts' component={Contacts} />
//       </Card>
//   </div>
//   </Router>)

const App = () => (
  <div className={styles.wrap}>
    <Router>
      <header className={styles.header}>
        <nav>
          <NavLink
            to='/'
            exact
            className={styles.header_link}
            activeClassName={styles['header_about']}
          >
            Обо мне
          </NavLink>
          <NavLink
            to='/todo'
            className={styles.header_link}
            activeClassName={styles.header_todo}
          >
            Дела
          </NavLink>
        </nav>
      </header>
  
      <main className={styles.content}>
        <Route path='/' exact component={About} />
        <Route path='/todo' component={Todo} />
      </main>
    </Router>
  </div>
);

export default App; 


