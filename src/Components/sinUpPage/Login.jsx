import React from 'react'
import "../sinUpPage/SinUp.css"

const Login = () => {
  return (
    <div className='Main_SinUp'>


      <div className="sinup_left">
        <img src="https://img.freepik.com/premium-photo/empty-black-smartphone-with-cart-bags-light-background-online-shopping-purchase-concept-mock-up-3d-rendering_670147-5588.jpg?w=900" alt="" />
      </div>

      <div className="sinup_Right">



      <div className="container">
      <h2>Log in to Exclusive</h2>
      <p>Enter your details below</p>
      <form>
        <input type="text" placeholder="Name" />
        <input type="password" placeholder="Password" />
        <button type="button">Create Account</button>
      </form>
      
      
    </div>



      </div>
    </div>
  )
}

export default Login;