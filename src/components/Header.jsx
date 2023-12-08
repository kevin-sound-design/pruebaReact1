function Header() {
  return (
    <>
      <nav>
        <ul>
          <li>Listas de animes</li>
        </ul>
        <form>
          <input type="text" placeholder="Buscar anime"/>
          <input type="submit" value="Buscar"/>
        </form>
      </nav>
    </>
  )
}
export default Header;