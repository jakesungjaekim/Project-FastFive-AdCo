import React from 'react'
import Card from '../../../components/Card'

const List = () => {
  return (
    <div className='max-w-[1440px] w-full mx-auto px-6 py-4'>
      <p className='mb-4 text-xl font-bold lg:text-2xl'>업종별 살펴보기</p>
      <div className='grid grid-cols-1 gap-3 lg:grid-cols-2 2xl:grid-cols-3'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default List