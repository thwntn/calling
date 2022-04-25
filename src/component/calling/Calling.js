import styles from './Calling.module.css'
import { Row } from 'react-bootstrap'

function Calling({ props }) {
    return ( 
        <Row className={styles.frameCalling}>
            <h1>Calling {props.phone}</h1>
        </Row>
     );
}

export default Calling;