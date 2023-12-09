import Buscador from "./Buscador";

function Header({dataBuscador}) {
  return (
    <>
      <nav>
        <ul>
          <li>Listas de animes</li>
        </ul>
        <Buscador dataBuscador = {dataBuscador}/>
      </nav>
    </>
  )
}
export default Header;