import { useState } from "react";
import { Row } from 'react-bootstrap'

import styles from './Login.module.css'


function Login() {

    const [userName, setUserName] = useState(null)
    const [password, setPassword] = useState(null)
    const [webSocket, setWebSocket] = useState(null)


    const login = {
        data: {
            userName: userName,
            password: password,
            webSoket: webSocket
        },
        run: function () {
            let url = 'http://localhost:3300/login'
            console.log(this.data);
            fetch(url, {
                method: 'POST',
                body: JSON.stringify(this.data)
            })
            .then(res => res.json())
            .then(res => {
                console.log(res);
                if( res == true ) {
                    sessionStorage.setItem('userName', login.data.userName)
                    sessionStorage.setItem('userName', login.data.password)
                }
            })
        }
    }
    console.log(login.data);
    return ( 
        <Row className= {styles.login}>
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