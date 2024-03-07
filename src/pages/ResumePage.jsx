import { motion } from 'framer-motion';
export default function Resume() {

    return (
      <motion.div 
      className='resumePageDev'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
        <div className="container pt-4 resumePageDev" >
          <ul className="list-group list-group resumePageUl" >
            <li className='list-group-item resumeLiItem'>
            <motion.p 
              style={{ display: 'flex', alignItems: 'center' }}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >English Teacher at World Language Center Dushanbe</motion.p>
            </li>
            <li className='list-group-item resumeLiItem'>
            <motion.p 
                style={{ display: 'flex', alignItems: 'center' }}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >Project Manager Afghanite Geomining, Kabul</motion.p>
            </li>
            <li className='list-group-item resumeLiItem'>
            <motion.p 
              style={{ display: 'flex', alignItems: 'center' }}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >Project Manager Greentech, Kabul</motion.p>
            </li>
            <li className='list-group-item resumeLiItem'>
              <p>Co-Founder Betarjom</p>
            </li>
            <li className='list-group-item resumeLiItem'>
            <motion.p 
              style={{ display: 'flex', alignItems: 'center' }}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >junior Web developer Karwan, zoodfood, mudh</motion.p>
            </li>
          </ul>
        </div>
    </motion.div>
      );
    }