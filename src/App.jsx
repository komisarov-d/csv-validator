import React from 'react'
import './App.css'
import { Table } from './components/Table/Table'
import { Loader } from './components/Loader/Loader'
import { Header } from './components/Header/Header'
import { useParser } from './Hooks/useParser';
import { ErrorMessage } from './components/ErrorMessage/ErrorMessage'

const App = () => {

  const { csvArr, loading, setData, error, resetData } = useParser()

  return (
    <div className='container'>
      <Header setData={setData} resetData={resetData} csvArr={csvArr} />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      { !error && <Table csvArr={csvArr} />}
    </div>
  )
}

export default App;
