import './App.css'
import { useState } from 'react'
import Header from './components/Header'
import Carrusel from './components/Carrusel'
import Footer from './components/footer'
import MiApi from './components/MiApi'

function App() {
  const [dataBuscador, setDataBuscador] = useState([])
  return (
    <>
      <Header dataBuscador = {dataBuscador} />
      <Carrusel />
      <MiApi setDataBuscador = {setDataBuscador} />
      <Footer />
    </>
  )
}

export default App
