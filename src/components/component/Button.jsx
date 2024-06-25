import React from 'react'

const Button = ({text,costumStyle}) => {
  return (
    <>
    <button className={'px-12 py-4 text-white text-2xl gradient-btn '+costumStyle}>{text}</button>
    </>
  )
}

export default Button