import { useState } from 'react'
import Analytics from './components/Analytics'
import Card from './components/Card'
import Footer from './components/Footer'
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
      <Card />
      <Footer />
      </>
   )
}

export default App
