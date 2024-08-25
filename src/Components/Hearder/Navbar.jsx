import React, { useRef, useState } from 'react'
import "../Hearder/Navbar.css"
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [show, newShow] = useState(false)
  let profileMenu = ["Home", "Manage my account", "My order", "Logout"]


  const val = useRef();


  const showProfile = () => {
    newShow(true)
    console.log("js")
  }

  const hideProfile = (e) => {
    console.log("jhgtf")
    if (val.current && !val.current.contains(e.reletedTarget)) {
      newShow(false)
    }
  }

  return (
    <div className='Navbar'>
      <div className="left-header">
        <h2>Exclusive</h2>
      </div>
      <div className="middle-header">
        <Link to="/Home" className='Nav-link'>Home</Link>
        <Link to="/Contact" className='Nav-link'>Contact</Link>
        <Link to="/About" className='Nav-link'>About</Link>
        <Link to="/SinUp" className='Nav-link'>Sign Up</Link>

      </div>
      <div className="right-header">
        <div className="header-search-input">
          <input type="text" name="" id="" placeholder='What are you looking for?' />
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>

        <i></i>
        <i className="fa-regular fa-heart"></i>
        <i className="fa-solid fa-cart-plus"></i>

        <div className="profilelogo" >
          <img src="https://picsum.photos/200/300" alt="" onMouseEnter={showProfile} />

          {
            show && <div className="profileDropdown" ref={val} onMouseLeave={hideProfile}>
              {profileMenu.map((val, index) => (

                <div className="listName" key={index}>
                  <p>{val}</p>
                </div>
              ))}

            </div>
          }




        </div>
      </div>
    </div>
  )
}

export default Navbar;