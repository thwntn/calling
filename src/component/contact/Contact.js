import { Col, Row } from "react-bootstrap";
import { FaChevronLeft } from 'react-icons/fa'

import styles from './Contact.module.css'

const data = [
    {
        name: 'Afamefuna Okaparo',
        phone: '0981483601',
        time: '20:30 10/12/2022',
        image: 'https://i.pinimg.com/550x/75/06/5d/75065da93d181c15f8266289313231c6.jpg'
    },
    {
        name: 'Lew Siverton',
        phone: '0913846584',
        time: '20:30 10/12/2022',
        image: 'https://images.hindustantimes.com/img/2021/06/15/550x309/Mahesh_babu_1623759511516_1623759525940.jpg'
    },
    {
        name: 'Lia Castro',
        phone: '0352847983',
        time: '20:30 10/12/2022',
        image: 'https://cdn.cnn.com/cnnnext/dam/assets/210902092545-sidharth-shukla-file-restricted-large-169.jpg'
    },
    {
        name: 'Afamefuna Okaparo',
        phone: '0945534876',
        time: '20:30 10/12/2022',
        image: 'https://i.pinimg.com/550x/75/06/5d/75065da93d181c15f8266289313231c6.jpg'
    },
    {
        name: 'Lew Siverton',
        phone: '0913846584',
        time: '20:30 10/12/2022',
        image: 'https://images.hindustantimes.com/img/2021/06/15/550x309/Mahesh_babu_1623759511516_1623759525940.jpg'
    },
    {
        name: 'Lia Castro',
        phone: '0352847983',
        time: '20:30 10/12/2022',
        image: 'https://cdn.cnn.com/cnnnext/dam/assets/210902092545-sidharth-shukla-file-restricted-large-169.jpg'
    },
    {
        name: 'Afamefuna Okaparo',
        phone: '0945534876',
        time: '20:30 10/12/2022',
        image: 'https://i.pinimg.com/550x/75/06/5d/75065da93d181c15f8266289313231c6.jpg'
    },
    {
        name: 'Lew Siverton',
        phone: '0913846584',
        time: '20:30 10/12/2022',
        image: 'https://images.hindustantimes.com/img/2021/06/15/550x309/Mahesh_babu_1623759511516_1623759525940.jpg'
    },
    {
        name: 'Lia Castro',
        phone: '0352847983',
        time: '20:30 10/12/2022',
        image: 'https://cdn.cnn.com/cnnnext/dam/assets/210902092545-sidharth-shukla-file-restricted-large-169.jpg'
    }
]


function Contact({ props }) {
    return ( 
        <Row className={styles.frameContact}>
            <Row className={styles.title}
                onClick={() => {
                    props.setState(-1)
                }}
            >
                <button>
                    <FaChevronLeft></FaChevronLeft>
                </button>
                <h2>Contact</h2>
            </Row>
            <Row className={styles.frameScroll}>
            {data.map((item, index) => {
                return (
                        <Col xs={6} style={{display: 'flex', justifyContent: "center", alignItems: 'center', height: '200px'}}>
                            <Row className={styles.item}
                                onClick={() => {
                                    props.setPhone(item.phone)
                                    props.Call(item.phone, props.setState, props.state)
                                }}
                            >
                                <Row className={styles.image}>
                                    <div style={{backgroundImage: `url(${item.image})`}}></div>
                                </Row>
                                <Row className={styles.phone}>
                                    {item.phone}
                                </Row>
                                <Row className={styles.name}>
                                    {item.name}
                                </Row>
                                <Row className={styles.time}>
                                    {item.time}
                                </Row>
                            </Row>
                        </Col>
                )
            })}
            </Row>       
        </Row>
     );
}

export default Contact;