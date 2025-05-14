import React from 'react'
import { Link } from 'react-router-dom';

const links = [
    {
    name:"Home",
    hre:"/home",
    },
    {
    name:"Contacto",
    hre: "/Contacto",
    },

];


const NavBar = () => {
  return <div>
    {links.map (x => (
        <Link to={x.href}>{x.name}</Link>
    ))}


  </div> 
  
};

export default NavBar
