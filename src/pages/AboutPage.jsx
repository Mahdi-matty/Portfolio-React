// import Mahdi from '../assets/Mahdi.jpg'
// import Footer from '../components/footer'
// export default function About() {
//     return (
//       <div className="container pt-4 aboutMeContainer">
//         <section className="features-icons bg-light text-center m-4">
//           <div className="features-icons-icon d-flex picContainer">
//                   <img src={Mahdi} className="img-fluid mahdiPic" alt="me" />
//           </div>
//           <div className='restOfContainer'>
//             <div className="container detailContainer">
//                             <h3>Mahdi Mohammadi</h3>
//                             <p className="lead mb-0 titleRes">Full stack Developer</p>
//             </div>
//                         <hr/>
//             <div className="col-lg-8 eduandskillContainer">
//                 <div className="col-lg-12 educationresume">
//                                 <h3>Education:</h3>
//                                 <p className="lead mb-0">B.sc industrial engineering</p>
//                                 <p className="lead mb-0">Full stack coding bootcamp</p>
//                 </div>
//                 <div className="col-lg-12 skillResum">
//                                 <h3> Skills</h3>
//                                 <ul className="list-unstyled">
//                                   <li>React</li>
//                                   <li>NodeJs</li>
//                                   <li>Express</li>
//                                   <li>Mysql</li>
//                                   <li>MongoDB</li>
//                                 </ul>
//                 </div>        
//             </div>
//           </div>
          
//       </section>
//     </div>
//     );
//   }
  
import { motion } from 'framer-motion';
import Mahdi from '../assets/Mahdi.jpg';

export default function About() {
  return (
    <motion.div 
      className="container pt-4 aboutMeContainer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.section 
        className="features-icons bg-light text-center m-4"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="features-icons-icon d-flex picContainer">
          <motion.img 
            src={Mahdi} 
            className="img-fluid mahdiPic"
            alt="me" 
            whileHover={{ scale: 1.1 }}
          />
        </div>
        <div className='restOfContainer'>
          <div className="container detailContainer">
            <motion.h3 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>Mahdi Mohammadi</motion.h3>
            <motion.p className="lead mb-0 titleRes" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>Full stack Developer</motion.p>
          </div>
          <hr/>
          <div className="col-lg-8 eduandskillContainer">
            <div className="col-lg-12 educationresume">
              <motion.h3 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>Education:</motion.h3>
              <motion.p className="lead mb-0" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>B.sc industrial engineering</motion.p>
              <motion.p className="lead mb-0" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>Full stack coding bootcamp</motion.p>
            </div>
            <div className="col-lg-12 skillResum">
              <motion.h3 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>Skills</motion.h3>
              <motion.ul className="list-unstyled" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <li>React</li>
                <li>NodeJs</li>
                <li>Express</li>
                <li>Mysql</li>
                <li>MongoDB</li>
              </motion.ul>
            </div>        
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
}
