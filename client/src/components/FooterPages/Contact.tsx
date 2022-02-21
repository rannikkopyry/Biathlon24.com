import React from 'react'
import './contact.scss'
import SomeLinks from '../SomeLinks/SomeLinks'

function Contact() {
    return (
        <div className='contact'>
            <div className="heading">
                <h2>Want to get in touch with us?</h2>
            </div>
            <div className="text">
            <h3>All inquiries via email</h3>
            <p>contact@biathlon24.com</p>
            <div className='some'>
            <h4>Stay connected with us via social media!</h4>
            <SomeLinks />
            </div>
            </div>
        </div>
    )
} 

export default Contact
