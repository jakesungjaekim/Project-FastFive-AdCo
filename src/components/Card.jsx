import React from 'react'

const Card = () => {
  return (
    <div className='w-full h-64 px-4 py-6 border rounded-2xl border-zinc-200'>
      <div className='relative flex items-center justify-start mb-5'>
        <img 
          className='object-cover w-32 h-32 rounded-md'
          src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80" 
          alt="image01" 
        />
        <div className='min-w-[200px] absolute top-0 left-[40%] flex flex-col '>
          <p className='min-w-[200px] font-bold text-md text-zinc-500'>회사 이름</p>
          <p className='min-w-[200px] text-sm text-zinc-300'>카테고리</p>
        </div>
      </div>
      <div className='w-full'>
        <p className='w-full max-w-[500px]'>회사 설명하기</p>
      </div>
    </div>
  )
}

export default Card