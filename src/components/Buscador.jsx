import { useState } from "react";

function Buscador({ setDatosApi, datosApi, arrayOriginal }) {
    const [inputBuscador, setInputBuscador] = useState("");

    function filtrarAnimes(e) {
        const inputValue = e.target.value.toLowerCase();
        setInputBuscador(inputValue);

        if (inputValue === "") {
            setDatosApi(arrayOriginal);
        } else {
            const filtro = datosApi.filter((anime) =>
                anime.title.toLowerCase().includes(inputValue)
            );
            setDatosApi(filtro);
        }
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
