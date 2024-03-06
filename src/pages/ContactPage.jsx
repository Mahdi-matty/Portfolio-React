import { useState } from 'react';
import { validateEmail } from '../utils/helper';
import Footer from '../components/footer'
import {FaPhone,FaLinkedin , FaEnvelope, FaMapMarkerAlt} from 'react-icons/fa'



function Contact() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
 


  return (
    <>
       <div className='realContactDev'>
        <p style={{ display: 'flex', alignItems: 'center' }}>
          <FaEnvelope style={{ display: 'block' }} />
        <span><a href='mailto: mmiq69@gmail.com'>mmiq69@gmail.com</a></span>
        </p>
        <p style={{ display: 'flex', alignItems: 'center' }}>
          <FaEnvelope style={{ display: 'block' }} />
        <span><a href={'https://www.linkedin.com/in/mahdi-mohammadi-55b63162'}>LinkedIn</a></span>
        </p>
        <p style={{ display: 'flex', alignItems: 'center' }}>
          <FaLinkedin style={{ display: 'block' }} />
        <span><a href='tel:647-785-6674'>647-785-6674</a></span>
        </p>
        <p style={{ display: 'flex', alignItems: 'center' }}>
          <FaMapMarkerAlt style={{ display: 'block' }} />
        <span>Toronto-Ontario</span>
        </p>
    </div>
    </>
    
  );
}

export default Contact;
