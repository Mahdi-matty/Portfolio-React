import Footer from '../components/footer'
import { motion } from "framer-motion"
export default function Resume() {

    return (
        <div className="container pt-4 resumePageDev" >
          <ul className="list-group list-group resumePageUl" >
            <li className='list-group-item resumeLiItem'>
              <p>English Teacher at World Language Center Dushanbe</p>
            </li>
            <li className='list-group-item resumeLiItem'>
              <p>Project Manager Afghanite Geomining, Kabul</p>
            </li>
            <li className='list-group-item resumeLiItem'>
              <p>Project Manager Greentech, Kabul</p>
            </li>
            <li className='list-group-item resumeLiItem'>
              <p>Co-Founder Betarjom</p>
            </li>
            <li className='list-group-item resumeLiItem'>
              <p>junior Web developer Karwan, zoodfood, mudh</p>
            </li>
          </ul>
        </div>
      );
    }