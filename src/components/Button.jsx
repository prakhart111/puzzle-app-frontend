import React from 'react'

const Button = ({text,onClick}) => {
  return (
    <button 
    onClick = {onClick}
    className="bg-[#E23636] font-black px-4 min-w-[280px] min-h-[62px] text-[25px]">
        {text}
    </button>
  )
}

export default Button