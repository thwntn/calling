import { useRef, useState } from "react";
import { Row } from 'react-bootstrap'
import { Router } from "react-router-dom";

import styles from './Login.module.css'


function Login() {

    const [userName, setUserName] = useState(null)
    const [password, setPassword] = useState(null)
    const [webSocket, setWebSocket] = useState(null)
    const path = useRef()


    const login = {
        data: {
            userName: userName,
            password: password,
            webSocket: webSocket
        },
        run: function () {
            let url = 'http://localhost:8080/login'
            fetch(url, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.data)
            })
            .then(res => res.json())
            .then(res => {
                if( res != false ) {
                    console.log(res);
                    sessionStorage.setItem('userName', res.userName)
                    sessionStorage.setItem('webSocket', res.webSocket)
                    sessionStorage.setItem('password', res.password)

                    path.current.click()
                }
            })
        }
    }
    console.log(login.data);
    return ( 
        <Row className= {styles.login}>
            <a ref = {path} href="homepage"></a>
             <div>
                <Row className={styles.input}>
                    <h3>Login</h3>
                </Row>
                <Row className={styles.input}>
                    <input
                    placeholder="userName"
                        onChange={(e) => {
                            setUserName(e.target.value)
                        }}
                    ></input>
                </Row>
                <Row className={styles.input}>
                    <input
                    placeholder="password"
                    type='password'
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                    ></input>
                </Row>
                <Row className={styles.input}>
                    <input
                        onChange={(e) => {
                            setWebSocket(e.target.value)
                        }}
                    ></input>
                </Row>
                <Row className={styles.input}>
                    <button
                        onClick={() => {
                            login.run()
                        }}
                    >Submit</button>
                </Row>
             </div>
        </Row>
     );
}

export default Login;