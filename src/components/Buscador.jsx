/*function Buscador({colaboradores, setColaboradores, baseColaboradores}){

    function filtrarEmpleados(e){
        e.preventDefault()
        const inputBuscador = e.target.value;
        if(inputBuscador===""){
            setColaboradores(baseColaboradores)

        }else{
            const filtro = colaboradores.filter((colaborador) => {
                const clavesBusqueda = ["nombre", "correo", "edad", "cargo", "telefono"];
        
                return clavesBusqueda.some((clave) =>
                  colaborador[clave].toLowerCase().includes(inputBuscador.toLowerCase())
                );
              });
            setColaboradores(filtro);
        }
        
    }

    return(
        <input className="buscador" type="text" placeholder="Busca un colaborador" onChange={filtrarEmpleados}/>
    )
}

export default Buscador;*/