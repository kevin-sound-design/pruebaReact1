import { useState } from "react";

function Buscador({ dataBuscador }) {
  const [inputBuscador, setInputBuscador] = useState("");
  const [dataParaFiltrar, setDataParaFiltrar] = useState(dataBuscador);

  function filtrarAnimes(e) {
    const inputValue = e.target.value.toLowerCase();
    setInputBuscador(inputValue);

    const filtro = dataBuscador.filter((anime) =>
      anime.title.toLowerCase().includes(inputValue)
    );

    setDataParaFiltrar(filtro);
    console.log(dataParaFiltrar)
    
  }

  return (
    <form>
      <input
        type="text"
        placeholder="Buscar anime"
        value={inputBuscador}
        onChange={filtrarAnimes}
      />
    </form>
  );
}

export default Buscador;
