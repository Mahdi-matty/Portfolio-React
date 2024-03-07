import Salut from '../assets/salut.png'
import Weather from '../assets/Weather.png'
import WorkCalender from '../assets/WorkCalender.png'
import Quiz from '../assets/Quiz.png'
import Brilla from '../assets/Brillascreen.png'
import { motion } from 'framer-motion';
export default function Protfolio() {

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
        <div className="container pt-4 bigAssContain">
          <ul className="list-group list-group ulImg">
            <li>
              <a href='https://salut-2-d1e41c6b2557.herokuapp.com/'>
                Salut
                <motion.img 
                  src={Salut} 
                  className="img-fluid mahdiPic"
                  alt="me" 
                  whileHover={{ scale: 1.1 }}
                />
              </a>
            </li>

             
            <li>
              <a href='https://mahdi-matty.github.io/Open-Weather/'>
                Weather Forcast
                <motion.img 
                  src={Weather} 
                  className="img-fluid mahdiPic"
                  alt="me" 
                  whileHover={{ scale: 1.1 }}
                />
              </a>
            </li>
           
            <li>
              <a href='https://mahdi-matty.github.io/Work-Day/'>
                Office Calender
                <motion.img 
                  src={WorkCalender} 
                  className="img-fluid mahdiPic"
                  alt="me" 
                  whileHover={{ scale: 1.1 }}
                />
              </a>
            </li>
          
            <li>
              <a href='https://mahdi-matty.github.io/code-Qiez/'>
                Take a Quiz
                <motion.img 
                  src={Quiz} 
                  className="img-fluid mahdiPic"
                  alt="me" 
                  whileHover={{ scale: 1.1 }}
                />
              </a>
            </li>
            <li>
              <a href='https://brillamentee.netlify.app'>
                Learn by flashcards
                <motion.img 
                  src={Brilla} 
                  className="img-fluid mahdiPic"
                  alt="me" 
                  whileHover={{ scale: 1.1 }}
                />
              </a>
            </li>
          </ul>
        </div>
        </motion.section>
    </motion.div>
      );
    }