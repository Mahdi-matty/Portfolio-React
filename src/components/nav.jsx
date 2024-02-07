import { Link } from 'react-router-dom';
import Navbar from './UI/Navbar'
import {FaUser, FaBriefcase, FaEnvelope, FaFileAlt} from 'react-icons/fa'

export default function Nav() {

    return (
        <Navbar
        links={[
          <Link key={1} className="nav-link text-light" to="/" style={{display: 'none'}}>
            <FaUser />
          </Link>,
          <Link key={2} className="nav-link text-light" to="/">
            <FaUser />
            </Link>,
            <Link key={3} className="nav-link text-light" to="/Portfolio">
            <FaBriefcase />
            </Link>,
            <Link key={4} className="nav-link text-light" to="/contact">
            <FaEnvelope />
            </Link>,
            <Link key={5} className="nav-link text-light" to="/resume">
            <FaFileAlt />
            </Link>,
        ]}
  
    />
  );
}