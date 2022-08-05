import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import styles from "../styles/SignUp.module.css"

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { notify } from './toast';

import { validate } from './validate';

const Login = () => {

    const [data, setData] = useState({
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({});

    const [touched, setTouched] = useState({});

    useEffect (() => {
        setErrors(validate(data));

    }, [data, touched])

    const changeHandler = event => {
        setData({...data, [event.target.name]: event.target.value})
    }
    

    const focusHandler = event => {
        setTouched({...touched, [event.target.name]: true})
    }

    const submitHandler = event =>{
        event.preventDefault();
        if(!Object.keys(errors).length){
            notify("Logged in successfully" ,"success");
        }else {
            notify("Invalid data" ,"error");
            setTouched({
                email: true,
                password: true,
            })
        }
    }


    return (
        <div className={styles.container}>
            <form className={styles.formContainer} onSubmit={submitHandler}>
                <h2 className={styles.header}>Login</h2>
                <div className={styles.formField}>
                    <label>Email</label>
                    <input 
                        className={(errors.email && touched.email) ? styles.notCompleted : styles.formInput}
                        type='text' 
                        name='email' 
                        value={data.email} 
                        onChange={changeHandler} 
                        onFocus={focusHandler} 
                    />
                    {errors.email && touched.email && <span>{errors.email}</span>}
                </div>
                <div className={styles.formField}>
                    <label>Password</label>
                    <input 
                        className={(errors.password && touched.password) ? styles.notCompleted : styles.formInput}
                        type='text' 
                        name='password' 
                        value={data.password} 
                        onChange={changeHandler} onFocus={focusHandler} 
                    />
                    {errors.password && touched.password && <span>{errors.password}</span>}
                </div>
                <div className={styles.buttonField}>
                    <button type='submit'>Login</button>
                    <div>
                        <p>Don't have an account? <Link to='/signup'>Sign up</Link></p>
                    </div>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default Login;