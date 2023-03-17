import React from 'react'
import card from './card.module.css'

const Card = () => {
  return (
    <div>
        <div className={card.cardFront}>
            <img src='./images/bg-card-front.png' alt="cfngjgn" />
            <p>0000 0000 0000 0000</p>
            <div>
                <span>JANE APPLEASEED</span>
                <span>00/00</span>
            </div>
            </div>
        <div className={card.cardBack}><img src='./images/bg-card-back.png' alt="cfngjgn" /></div>

    </div>
  )
}

export default Card