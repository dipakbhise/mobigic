import React from 'react'

const signup = () => {
  return (
    <>
        First Name:<input type="text" name='firstname' placeholder="Enter Your First Name" />

        Last Name:<input type="text" name='lastname' placeholder="Enter Your Lastst Name" />

        Email:<input type="text" placeholder="Enter Your Email" />

        Password: <input type="password" name='password' placeholder="enter Your Password" />

        Confirm Password: <input type="password" name='cpassword' placeholder="COnfirm Password" />
    </>
  )
}

export default signup