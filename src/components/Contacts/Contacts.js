import React from 'react';
import styles from "../Contacts/Contacts.module.css";

const Contacts = () => (
        <div className={styles.wrap}>
        <h3 className={styles.title}>Контакты</h3>
        <a className={styles.contact__link} href="tel:+47634833973">47 364 732 83 68</a>
        <a className={styles.contact__link} href="ayana.sultanovaa@gmail.com">ayana.sultanovaa@gmail.com</a>
        </div>
);

export default Contacts;