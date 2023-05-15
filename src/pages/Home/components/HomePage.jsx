import React from 'react'
import Header from '../../../components/Header'
import Hero from './Hero'
import List from './List'
import Sidebar from './Sidebar'

const HomePage = () => {
  return (
    <div>
      <Header />
      <div className='flex justify-center'>
        <Sidebar />
        <div className='container flex flex-col items-center justify-center'>
          <Hero />
          <List />
        </div>
      </div>
    </div>
  )
}

export default HomePage