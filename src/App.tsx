import React from 'react'
import Navbar from './components/Navbar'
import Content from './components/Content'
import Footer from './components/Footer'

function App() {
  return (
    <div className='bg-zinc-50 h-[2000px]'>
      <Navbar />
      <Content />
      <Footer />
    </div>
  )
}

export default App
