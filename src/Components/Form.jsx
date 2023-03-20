import React from 'react'
import form from './form.module.css'

const Form = () => {
  return (
    <div className={form.form}>
      <form>
        <div className={form.formDiv}>
          <label for="name">CARDHOLDER NAME</label>
          <input type={"text"} className='name' id='name' placeholder='e.g. Jane Appleaseed'></input>
        </div>
        <div className={form.formDiv}>
          <label for="number">CARD NUMBER</label>
          <input type={"number"} className='number' id='number' placeholder='e.g. 1234 5678 9123 0000'></input>
        </div>
        <div className={`${form.formDiv} ${form.formDiv3}`}>
          <div className={form.expiry}>
            <label for="expiry">EXP. DATE (MM/YY)</label><br></br>
            <input type={"number"} className='expiryMM' id='expiryMM' placeholder='MM'></input>
            <input type={"number"} className='expiryYY' id='expiryYY' placeholder='YY'></input>
          </div>
          <div className={form.cvc}>
            <label for="cvc">CVC</label><br></br>
            <input className='cvc' id='cvc' placeholder='e.g. 123'></input>
          </div>
        </div>
        <div className={form.button}>
          <button type='submit'>Confirm</button>
        </div>
      </form>
    </div>
  )
}

export default Form