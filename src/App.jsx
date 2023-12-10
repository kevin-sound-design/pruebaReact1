import './App.css'
import { useState } from 'react'
import Header from './components/Header'
import Carrusel from './components/Carrusel'
import Footer from './components/footer'
import MiApi from './components/MiApi'

function App() {
  const [datosApi, setDatosApi] = useState([]);
  const [arrayOriginal, setArrayOriginal] = useState([])
  return (
    <>
      <Header setDatosApi = {setDatosApi} datosApi = {datosApi} arrayOriginal = {arrayOriginal} />
      <Carrusel />
      <MiApi setDatosApi = {setDatosApi} datosApi = {datosApi} setArrayOriginal = {setArrayOriginal} />
      <Footer />
    </>
  )
}

export default App
