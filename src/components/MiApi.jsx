import { useState, useEffect } from "react";
import MyCard from "./MyCard";

function MiApi({setDataBuscador}) {
  const [loading, setLoading] = useState(true);
  const [datosApi, setDatosApi] = useState([]);

  async function fetchData() {
    try {
      const data = await fetch("https://api-anime-production-0f6a.up.railway.app/getAllAnime?limit=12&page=1");
      const dataJson = await data.json();
      setDatosApi(dataJson.collection);
      setDataBuscador(dataJson.collection);
      console.log(datosApi)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData()
  }, []);

  return (
    <>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <main>
          {datosApi.map((anime, index) => (
            <MyCard 
              key={index + "animePosicion"}
              picture={anime.picture}
              title={anime.title}
              type={anime.type}
              episodes={anime.episodes}
              year={anime.animeSeason.year}
              status={anime.status}
            />
          ))}
        </main>
      )}
    </>
  )
}
export default MiApi;