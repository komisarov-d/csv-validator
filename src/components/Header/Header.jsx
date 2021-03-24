import React from 'react'
import { UploadForm } from '../Form/UploadForm'
import './header.css'

export const Header = ({ setData, resetData, csvArr }) => {
   return (
      <header className='header'>
         <h2 className='title'>List of hiring lawyers</h2>
         <UploadForm setData={setData} resetData={resetData} csvArr={csvArr} />
      </header>
   )
}