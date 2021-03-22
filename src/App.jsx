import React from 'react'
import './App.css'
import { Table } from './components/Table/Table'
import { Loader } from './components/Loader/Loader'
import { Header } from './components/Header/Header'
import { useParser } from './Hooks/useParser';

const App = () => {

  const { csvArr, loading, setData } = useParser()

  return (
    <div className='container'>
      <Header setData={setData} />
      {loading && <Loader />}
      {csvArr.length ? <Table csvArr={csvArr} /> : <p>No</p>}
    </div>
  )
}

export default App;
