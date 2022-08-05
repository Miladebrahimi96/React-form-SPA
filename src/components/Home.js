import React from 'react';
import { Link } from "react-router-dom";
import styles from "../styles/Home.module.css"

const Home = () => {
    return (
        <div className={styles.container}>
            <Link className={styles.login} to='/login'>Login</Link>
            <h1>Werlcome to this prototype project</h1>
            <p>If you alredy have an account, Log in, otherWise create an account for free!</p>
            <Link className={styles.signup} to='/signup'>Sign up</Link>
        </div>
    );
};

export default Home;