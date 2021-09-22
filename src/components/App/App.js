import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Todo from '../Todo/Todo';
import About from '../About/About';
import styles from './App.module.css';

const App = () => (
  <div className={styles.wrap}>
    <Router>
      <header className={styles.header}>
        <nav>
          <NavLink
            to='/'
            exact
            className={styles.header_link}
            activeClassName={styles.header_about}
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


