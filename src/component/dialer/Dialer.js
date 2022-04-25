import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { FaPhoneAlt, FaCompressAlt, FaBackspace} from 'react-icons/fa'
import { IconContext } from 'react-icons/lib';

import styles from './Dialer.module.css'

const buttons = [
    {
        button: 1,
        char: ''
    },
    {
        button: 2,
        char: ''
    },
    {
        button: 3,
        char: ''
    },
    {
        button: 4,
        char: ''
    },
    {
        button: 5,
        char: ''
    },
    {
        button: 6,
        char: ''
    },
    {
        button: 7,
        char: ''
    },
    {
        button: 8,
        char: ''
    },
    {
        button: 9,
        char: ''
    },
    {
        button: '*',
        char: ''
    },
    {
        button: '0',
        char: ''
    },
    {
        button: '#',
        char: ''
    }
]


function Dialer({ props }) {
    const [tempPhone, setTempPhone] = useState('')

    return (
        <Col xs= {12} className={styles.colDialer}>
            <Row className = {styles.numberInput}>
                <input
                    value={tempPhone}
                    onChange={e => {
                        if(e.target.value / 1 == e.target.value && e.target.value != '&nbsp;') {
                            setTempPhone(e.target.value)
                        }
                    }}
                    ></input>
            </Row>
            <Row className={styles.rowDialer}>
                {
                    buttons.map((item, index) => {
                        return <Col key={index} className={styles.btnNumber} xs={4}>
                            <button
                                onClick={() => {
                                    setTempPhone(prev => prev + item.button)
                                }}
                            >{item.button}</button>
                        </Col>
                    })
                }
            </Row>
            <Row className={styles.navCall}>
                <button
                    className={styles.btnClose}
                    onClick={() => {
                        props.setState(0)
                    }}        
                ><FaCompressAlt></FaCompressAlt></button>
                <button
                className={styles.btnCall}
                    onClick={() => {
                        props.setPhone(tempPhone)
                        props.Call(tempPhone, props.setState, props.state)
                    }}
                >
                    <IconContext.Provider value={{color: 'white'}}>
                        <FaPhoneAlt></FaPhoneAlt>
                    </IconContext.Provider>
                </button>
                <button
                    className={styles.btnClear}
                    onClick={()=> {
                        setTempPhone(prev => prev.slice(0, -1))
                    }}
                ><FaBackspace></FaBackspace></button>
            </Row>
        </Col>
     );
}

export default Dialer;