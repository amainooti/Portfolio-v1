import React from 'react';
import "./Card.css";

export const Card = ({text, img}) => {
  return (
    <div className='card__container'>
        <img src={img} alt="" />
        <span> {text} </span>
    </div>
  )
}
