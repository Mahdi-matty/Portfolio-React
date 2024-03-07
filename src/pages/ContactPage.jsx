// import {FaPhone,FaLinkedin , FaEnvelope, FaMapMarkerAlt} from 'react-icons/fa'
// function Contact() {
//   return (
//     <>
//        <div className='realContactDev'>
//         <p style={{ display: 'flex', alignItems: 'center' }}>
//           <FaEnvelope style={{ display: 'block' }} />
//         <span><a href='mailto: mmiq69@gmail.com'>mmiq69@gmail.com</a></span>
//         </p>
//         <p style={{ display: 'flex', alignItems: 'center' }}>
//           <FaLinkedin style={{ display: 'block' }} />
//         <span><a href={'https://www.linkedin.com/in/mahdi-mohammadi-55b63162'}>LinkedIn</a></span>
//         </p>
//         <p style={{ display: 'flex', alignItems: 'center' }}>
//           <FaPhone style={{ display: 'block' }} />
//         <span><a href='tel:647-785-6674'>647-785-6674</a></span>
//         </p>
//         <p style={{ display: 'flex', alignItems: 'center' }}>
//           <FaMapMarkerAlt style={{ display: 'block' }} />
//         <span>Toronto-Ontario</span>
//         </p>
//     </div>
//     </>
    
//   );
// }
// export default Contact;


import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

function Contact() {
  return (
    <motion.div 
      className='realContactDev'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.p 
        style={{ display: 'flex', alignItems: 'center' }}
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <FaEnvelope style={{ display: 'block' }} />
        <span><a href='mailto:mmiq69@gmail.com'>mmiq69@gmail.com</a></span>
      </motion.p>
      <motion.p 
        style={{ display: 'flex', alignItems: 'center' }}
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <FaLinkedin style={{ display: 'block' }} />
        <span><a href={'https://www.linkedin.com/in/mahdi-mohammadi-55b63162'}>LinkedIn</a></span>
      </motion.p>
      <motion.p 
        style={{ display: 'flex', alignItems: 'center' }}
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <FaPhone style={{ display: 'block' }} />
        <span><a href='tel:647-785-6674'>647-785-6674</a></span>
      </motion.p>
      <motion.p 
        style={{ display: 'flex', alignItems: 'center' }}
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <FaMapMarkerAlt style={{ display: 'block' }} />
        <span>Toronto-Ontario</span>
      </motion.p>
    </motion.div>
  );
}

export default Contact;
