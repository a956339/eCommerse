import React from 'react'
import "../sinUpPage/SinUp.css"
import { Link } from 'react-router-dom';
const SinUp = () => {
  return (
    <div className='Main_SinUp'>


      <div className="sinup_left">
        <img src="https://img.freepik.com/premium-photo/empty-black-smartphone-with-cart-bags-light-background-online-shopping-purchase-concept-mock-up-3d-rendering_670147-5588.jpg?w=900" alt="" />
      </div>

      <div className="sinup_Right">



      <div className="container">
      <h2>Create an account</h2>
      <p>Enter your details below</p>
      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email or Phone Number" />
        <input type="password" placeholder="Password" />
        <button type="button">Create Account</button>
      </form>
      <button className="google-btn">Sign up with Google</button>
      <p className="login-text">
        Already have an account? <Link to="/Login">
      Log in
        </Link>
      </p>
    </div>



      </div>
    </div>
  )
}

export default SinUp;