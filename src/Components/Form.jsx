import React from 'react'

const Form = () => {
  return (
    <div>
      <form>
        <div>
          <label for="name">CARDHOLDER NAME</label>
          <input type={"text"} className='name' id='name' placeholder='e.g. Jane Appleaseed'></input>
        </div>
        <div>
          <label for="number">CARD NUMBER</label>
          <input type={"number"} className='number' id='number' placeholder='e.g. 1234 5678 9123 0000'></input>
        </div>
        <div>
          <label for="expiry">EXP. DATE (MM/YY)</label>
          <input type={"number"} className='expiry' id='expiryMM' placeholder='MM'></input>
          <input type={"number"} className='expiry' id='expiryYY' placeholder='YY'></input>
        </div>
        <div>
          <label for="cvc">CVC</label>
          <input className='cvc' id='cvc' placeholder='e.g. 123'></input>
        </div>
        <div>
          <button type='submit'>Confirm</button>
        </div>
      </form>
    </div>
  )
}

export default Form