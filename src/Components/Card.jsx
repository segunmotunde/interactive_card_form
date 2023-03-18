import React from 'react'
import card from './card.module.css'

const Card = () => {
  return (
    <div className={card.body}>
      <div className={card.Container}>
          <div className={card.cardFront}>
              <img src='./images/bg-card-front.png' alt="cfngjgn" />
              <p>0000 0000 0000 0000</p>
              <div className={card.nameContainer}>
                  <span>JANE APPLEASEED</span>
                  <span>00/00</span>
              </div>
              </div>
          <div className={card.cardBack}>
            <img src='./images/bg-card-back.png' alt="cfngjgn" />
            <p>000</p>
          </div>
      </div>
    </div>
  )
}

export default Card