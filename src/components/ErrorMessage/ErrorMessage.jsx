import React from 'react'
import './errorMessage.css'
export const ErrorMessage = () => {

   return (
      <div className='error'>
         <p className='error__message'>
            File format is not correct
         </p>
      </div>
   )
}