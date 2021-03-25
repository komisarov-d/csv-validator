import React from 'react'
import './UploadForm.css'

export const UploadForm = ({ setData, csvArr }) => {
   const fileInput = React.createRef();

   const handleUpload = (e) => {
      e.preventDefault()
      if (fileInput.current.files[0]) {
         setData(fileInput.current.files[0])
      }
   }

   return (
      <form className='form'>
         <input type="file" name="uploadfile" id="img" ref={fileInput} onChange={handleUpload} accept='.csv' />
         <label className='label' htmlFor="img">Import users</label>
      </form>
   )
}