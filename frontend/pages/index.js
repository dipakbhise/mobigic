import Head from 'next/head'
import Image from 'next/image'
import signup from '../components/signup'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
     First Name:<input type="text" name='firstname' placeholder="Enter Your First Name" />

Last Name:<input type="text" name='lastname' placeholder="Enter Your Lastst Name" />

Email:<input type="text" placeholder="Enter Your Email" />

Password: <input type="password" name='password' placeholder="enter Your Password" />

Confirm Password: <input type="password" name='cpassword' placeholder="COnfirm Password" />

<button>Register</button>

      
    </>
  )
}
