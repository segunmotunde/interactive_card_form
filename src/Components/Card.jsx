import React from 'react'
import card from './card.module.css'

const Card = ({formData}) => {
  const { cardName, cardNumber,cardMonth, cardYear, cardCvc} = formData;
  return (
    <div className={card.body}>
      <div className={card.Container}>
          <div className={card.cardFront}>
              <img src='./images/bg-card-front.png' alt="cfngjgn" />
              <p>{cardNumber.length < 1 ? '1234 5678 9123 0000': cardNumber}</p>
              <div className={card.nameContainer}>
                  <span>{cardName.length < 1? "Jane Appleaseed": cardName}</span>
                  <span>{cardMonth.length<1?'00':cardMonth}/{cardYear.length<1?'00': cardYear}</span>
              </div>
              </div>
          <div className={card.cardBack}>
            <img src='./images/bg-card-back.png' alt="cfngjgn" />
            <p>{cardCvc.length<1?'123': cardCvc}</p>
          </div>
      </div>
    </div>
  )
}

export default Card