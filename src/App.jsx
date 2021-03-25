import React from 'react'
import './App.css'
import { Table } from './components/Table/Table'
import { UploadForm } from './components/UploadForm/UploadForm.jsx'
import { useParser } from './Hooks/useParser';
import { ErrorMessage } from './components/ErrorMessage/ErrorMessage'

const App = () => {

  const { csvArr, setData, error } = useParser()

  return (
    <div className='container'>
      <UploadForm setData={setData} csvArr={csvArr} />
      {error && <ErrorMessage />}
      { !error && <Table csvArr={csvArr} />}
    </div>
  )
}

export default App;
