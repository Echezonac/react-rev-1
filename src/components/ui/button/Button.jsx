import React from 'react'

const Button = ({type, onClick, children}) => {
  return (
    <button className='btn btn-dark my-3' type={type || 'button'} onClick={onClick}>{children}</button>
  )
}

export default Button