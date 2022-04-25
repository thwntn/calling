import { useEffect, useRef, useState } from 'react';
import { FaFacebookF, FaInstagram, FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib';
import { Row, Col } from 'react-bootstrap'

import styles from './Phone.module.css'
import Dialer from '../dialer/Dialer';
import Call from '../control/call.js'
import Calling from '../calling/Calling';
import Contact from '../contact/Contact';
import History from '../history/History';
import Navigation from '../navigation/Navigation';
import Home from '../home/Home';

function Phone() {

    //animation
    const [status, setStatus] = useState('none')
    const frame = useRef()
    const [phone, setPhone] = useState('')
    const [state, setState] = useState(0)

    useEffect(() => {
        function handle () {
            if(frame.current.getBoundingClientRect().top < 250) {
                setStatus('flex')
                window.removeEventListener('scroll', handle)
            }
        }

        window.addEventListener('scroll', handle)

        return () => {
            window.removeEventListener('scroll', handle)
        }
    }, [])

    return ( 
        <div className={styles.social} ref= {frame}>
            <Row className={styles.main} styles={{width: '100%', display: status}}>
                <h1>Social</h1>
                <Row className={styles.container}>
                    <Col xs={6} className={styles.content}>
                        <div>
                            <p>
                                Translated from English-Social organisms, including humans, <br></br>
                                files in interactive populations. This effect is considered <br></br>
                                social whether they are aware of the adjustment <br></br>
                                or not, and the exchange is voluntary or involuntary. <br></br>
                            </p>
                        </div>
                    </Col>
                    <Col xs={6} className = {styles.link}>
                        <div className={styles.phone}>
                            <button className={styles.headButton}></button>
                            <Row className={styles.display}>
                                <Home></Home>
                                {( state == 0 || state == 4 ||state ==2 || state == -1 )? <Navigation props = {{ setState }}></Navigation>: null}
                                {state == 1 ? <Dialer props={{Call, phone, setPhone, setState, state}}></Dialer> : null}
                                {state == 4 ? <Contact props={{ setState, Call, setPhone, setState, state }}></Contact> : null}
                                {state == 2 ? <History props={{ setState }}></History> : null}
                                {state == 5 ? <Calling props = {{phone}}></Calling> : null}
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Row>
        </div>
     );
}

export default Phone;