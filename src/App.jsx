import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { Body } from './components/Body'


function App() {

  return (
    <>
      <div>
        <Header />
        <div className='mt-40'>
          <Body />
        </div>
      </div>
    </>
  )
}

export default App
