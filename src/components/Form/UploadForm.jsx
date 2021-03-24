import React from 'react'
import './uploadForm.css'
export const UploadForm = ({ setData, resetData }) => {
   const fileInput = React.createRef();

   const handleSubmit = (e) => {
      e.preventDefault()
      if (fileInput.current.files[0]) {
         setData(fileInput.current.files[0])
      }
   }
   const resetInput = e => {
      e.preventDefault()
      resetData()
   }
   return (
      <form className='form' onSubmit={handleSubmit}>
         <input type="file" name="uploadfile" id="img" ref={fileInput} accept='.csv' />
         <label className='input' htmlFor="img">Click to upload &#9668;</label>
         <br />
         <div className='buttons'>
            <button onClick={resetInput}>Reset</button>
            <button type="submit">Parsing</button>
         </div>

      </form>
   );
}
