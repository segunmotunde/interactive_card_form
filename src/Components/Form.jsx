import React from 'react'
import { Link } from 'react-router-dom';
import form from './form.module.css'

const Form = ({handleForm, handleSubmit, formData}) => {
  const { cardName, cardNumber,cardMonth, cardYear, cardCvc} = formData;
  return (
    <div className={form.form}>
      <form onSubmit={handleSubmit}>
        <div className={form.formDiv}>
          <label htmlFor="name">CARDHOLDER NAME</label>
          <input 
          type={"text"} 
          className='name' 
          id='name' 
          placeholder='e.g. Jane Appleaseed'
          name= {"cardName"}
          value={cardName}
          onChange={handleForm}
          />
        </div>
        <div className={form.formDiv}>
          <label htmlFor="number">CARD NUMBER</label>
          <input 
          type='number' 
          className='number' 
          id='number' 
          placeholder='e.g. 1234 5678 9123 0000'
          value={cardNumber}
          name= {"cardNumber"}
          onChange={handleForm}
          />
        </div>
        <div className={`${form.formDiv} ${form.formDiv3}`}>
          <div className={form.expiry}>
            <label htmlFor="expiry">EXP. DATE (MM/YY)</label><br></br>
            <input 
            type={"number"} 
            className='expiryMM' 
            id='expiryMM' 
            placeholder='MM'
            maxLength={2}
            name= {"cardMonth"}
            onChange={handleForm}
            value={cardMonth}
            />
            <input 
            type={"number"} 
            className='expiryYY'
             id='expiryYY' 
             placeholder='YY'
             maxLength={3}
             value={cardYear}
             name= {"cardYear"}
             onChange={handleForm}
             />
          </div>
          <div className={form.cvc}>
            <label htmlFor="cvc">CVC</label><br></br>
            <input 
            type={"number"} 
            className='cvc' 
            id='cvc' 
            placeholder='e.g. 123'
            maxLength={3}
            value={cardCvc}
            name= {"cardCvc"}
            onChange={handleForm}
            />
          </div>
        </div>
        <div className={form.button}>
          <button type='submit'><Link to="/thankyou" >Confirm</Link></button>
        </div>
      </form>
    </div>
  )
}

export default Form