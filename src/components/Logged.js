import React from 'react';
import { Link } from "react-router-dom";
import styles from '../styles/Logged.module.css'

const Logged = () => {
    return (
        <div className={styles.container}>
            <Link className={styles.logout} to='/'>Log out</Link>
            <h1>Now you are logged into you account. enjoy coding :(</h1>
        </div>
    );
};

export default Logged;