import { Link } from 'react-router-dom';
import Navbar from './UI/Navbar'

export default function Nav() {

    return (
        <Navbar
        links={[
          <Link key={1} className="nav-link text-light" to="/">
            Home
          </Link>,
          <Link key={2} className="nav-link text-light" to="/about">
            About Us
            </Link>,
            <Link key={3} className="nav-link text-light" to="/Portfolio">
            portfolio
            </Link>,
            <Link key={4} className="nav-link text-light" to="/contact">
            contact
            </Link>,
            <Link key={5} className="nav-link text-light" to="/resume">
            resume
            </Link>,
        ]}
  
    />
  );
}