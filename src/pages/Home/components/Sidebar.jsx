import React from 'react'

const Sidebar = () => {
  return (
    <aside className='hidden h-screen w-96 bg-slate-700 2xl:block'>
      <nav className='flex flex-col justify-center w-10/12 py-10 mx-auto space-y-6 text-xl text-white'>
        <p className='text-lg'>Coummunity</p>
        <p>우리 회사 소개</p>
        <p>채용</p>
        <p>라운지</p>
        <p>질문 답변</p>
      </nav>
    </aside>
  )
}

export default Sidebar
