import React from 'react'
import thanks from './thankyouPage.module.css'

const ThankPage = () => {
  return (
    <div className={thanks.container}>
      <div><img src='../p'/></div>
      <h2>THANK YOU!</h2>
      <p>We've added your card details</p>
      <button>Continue</button>
    </div>
  )
}

export default ThankPage