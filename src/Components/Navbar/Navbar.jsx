import React, { useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import underline from '../../assets/nav_underline.svg'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {

    const [menu,setMenu] = useState("home");
    const menuRef = useRef();

const openMenu = () => {
    menuRef.current.style.right = "0";

}
const closeMenu = () => {
    menuRef.current.style.right = "-350px";
    
}


    return(
        <div className='navbar'>
            <img src={logo} alt="" />
            <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open' />
            <ul ref={menuRef} className="nav-menu">
                <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
                <li><a className='anchor-link' href="#home"><p onClick={()=>setMenu("home")}>Home</p></a>{menu === "home"?<img src={underline} alt='' />:<></>}</li>
                <li><a className='anchor-link' href="#about"><p onClick={()=>setMenu("about")}>About Me</p></a>{menu === "about"?<img src={underline} alt='' />:<></>}</li>
                <li><a className='anchor-link' href="#services"><p onClick={()=>setMenu("services")}>Projects</p></a>{menu === "services"?<img src={underline} alt='' />:<></>}</li>
                <li><a className='anchor-link' href="#work"><p onClick={()=>setMenu("work")}>Certificates</p></a>{menu === "work"?<img src={underline} alt='' />:<></>}</li>
                <li><a className='anchor-link' href="#contact"><p onClick={()=>setMenu("contact")}>Contact</p></a>{menu === "contact"?<img src={underline} alt='' />:<></>}</li>
            </ul>
            <div className="nav-connect"><a className='anchor-link' href="#contact">Connect With Me</a></div>
        </div>

    )
}

export default Navbar