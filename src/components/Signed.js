import React from 'react';
import { Link, useParams} from "react-router-dom";

import styles from "../styles/Signed.module.css"

const Signed = () => {

    const params = useParams()

    const user = params.author;
    

    return (
        <div className={styles.container}>
            <Link className={styles.logout} to='/'>Log out</Link>
            <p>Congratulations <span>{user}</span> on creating your new account, We hope you enjoy your time here</p>
        </div>
    );
};

export default Signed;