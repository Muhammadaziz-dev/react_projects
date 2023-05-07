import React from 'react'
import { Link } from 'react-router-dom'
import { Nav, Navbar, NavItem,NavLink } from 'reactstrap'

export default function Header() {
  return (
    //   <Navbar>
    //         <Nav className="ml-auto" navbar>
    //             <NavItem>
    //                 <NavLink href='/'>Home</NavLink>
    //             </NavItem>
    //             <NavItem>
    //             <NavLink href='/about'>About</NavLink> 
    //             </NavItem>
    //             <NavItem>
    //             <NavLink href='/news'>News</NavLink> 
    //             </NavItem>
    //              <NavItem>
    //             <NavLink href='/contact'>Contact</NavLink> 
    //             </NavItem>
    //         </Nav>
    //   </Navbar>
    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/news">News</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
    </nav>
  )
}
