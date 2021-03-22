import React from 'react'
import './uploadForm.css'
export const UploadForm = ({ setData }) => {
   const fileInput = React.createRef();

   const handleSubmit = (e) => {
      e.preventDefault();
      setData(fileInput.current.files[0])
   }
   return (
      <form className='form' onSubmit={handleSubmit}>
         <input type="file" name="uploadfile" id="img" ref={fileInput} />
         <label htmlFor="img">Click to upload</label>
         <br />
         <button type="submit">Parsing</button>
      </form>
   );
}
