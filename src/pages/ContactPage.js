import React from 'react'
import ContactItem from '../Components/ContactItem';
import phone from '../img/phone.svg';
import email from '../img/emailme.svg';
import location from '../img/location.svg';
import Tittle from '../Components/Tittle';

function ContactPage() {
    return (
        <div>
            <div className="title">
                <Tittle title={'About Me'} span={'About Me'} />
            </div>
            <div className="ContactPage">
                <div className="map-sect">
                    <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1ekmkLyP15eKC6noAwIOuKo_4m20&msa=0&ie=UTF8&t=m&ll=25.314546000000014%2C82.99758900000002&spn=0.108624%2C0.145912&z=12&output=embed" width="500" height="450" frameBorder="0" style={{border:0}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                </div>
                <div className="contact-sect">
                    <ContactItem icon={phone} text1={'+91 9794723866'} text2={'+91 6307663442'} title={'Phone'}/>
                    <ContactItem icon={email} text1={'avinash21997@gmail.com'} text2={'avinash21997.18je0192@ece.iitism.ac.in'} title={'Email'}/>
                    <ContactItem icon={location} text1={'Varanasi, Uttar Pradesh'} text2={'India'} title={'Address'}/>
                </div>
            </div>
        </div>
    )
}

export default ContactPage;
