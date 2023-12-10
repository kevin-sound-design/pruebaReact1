import Buscador from "./Buscador";

function Header({setDatosApi, datosApi, arrayOriginal}) {
  return (
    <>
      <nav>
        <ul>
          <li>Listas de animes</li>
        </ul>
        <Buscador setDatosApi = {setDatosApi} datosApi = {datosApi} arrayOriginal = {arrayOriginal}/>
      </nav>
    </>
  )
}
export default Header;