import { useState } from 'react'
import Analytics from './components/Analytics'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import NewLetter from './components/NewLetter'


function App() {
   return (
    <>
      <Navbar />
      <Hero />
      <Analytics />
      <NewLetter />
      </>
   )
}

export default App
