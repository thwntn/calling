import { Col, Row } from "react-bootstrap";
import styles from './Home.module.css'
function Home() {
    return ( 
        <Col xs={12} className={styles.frameHome}>
            <Row className={styles.image}>
                Hello!
            </Row>
        </Col>
     );
}

export default Home;