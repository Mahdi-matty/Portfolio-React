import Footer from '../components/footer'
import { motion } from "framer-motion"
export default function Resume() {

    return (
        <div className="container pt-4" >
          <ul className="list-group list-group" >
            <li className='list-group-item'>
              <p>English Teacher at World Language Center Dushanbe</p>
            </li>
            <li className='list-group-item'>
              <p>Project Manager Afghanite Geomining, Kabul</p>
            </li>
            <li className='list-group-item'>
              <p>Project Manager Greentech, Kabul</p>
            </li>
            <li className='list-group-item'>
              <p>Co-Founder Betarjom</p>
            </li>
          </ul>
          <Footer/>
        </div>
      );
    }