import React from 'react'
import signup from '../components/signup'

const login = () => {
  return (
    <div>
        Email:<input type="text" placeholder="Enter Your Email" />

Password: <input type="password" name='password' placeholder="enter Your Password" />



<button>Login</button>
    </div>
  )
}

export default login