import { FaUserAlt, FaHistory, FaKeyboard } from 'react-icons/fa'
import { Row, Col } from 'react-bootstrap'

import styles from './Navigation.module.css'
import { IconContext } from 'react-icons/lib';


function Navigation({ props }) {
    return (
        <Row className={styles.frameNav}>
            <Col xs ={4} className={styles.item}
                onClick={() => {
                    props.setState(4)
                }}
            ><FaUserAlt></FaUserAlt></Col>
            <Col xs ={4} className={styles.itemKeypad}><button
                onClick={() => {
                    props.setState(1)
                }}
            ><IconContext.Provider value={{color: 'white'}}><FaKeyboard size={23}></FaKeyboard></IconContext.Provider></button></Col>
            <Col
                xs ={4} className={styles.item}
                onClick = {() => {
                    props.setState(2)
                }}
            ><FaHistory></FaHistory></Col>
        </Row>
     );
}

export default Navigation;