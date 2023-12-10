import { useState, useEffect } from "react";
import MyCard from "./MyCard";

function MiApi({setDatosApi, datosApi, setArrayOriginal}) {
  const [loading, setLoading] = useState(true);
  

  async function fetchData() {
    try {
      const data = await fetch("https://api-anime-production-0f6a.up.railway.app/getAllAnime?limit=12&page=1");
      const dataJson = await data.json();
      dataJson.collection.sort((a,b)=>{
        return a.animeSeason.year - b.animeSeason.year;
      })
      setDatosApi(dataJson.collection);
      setArrayOriginal(dataJson.collection)
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