import { useState, useEffect } from "react";
import MyCard from "./MyCard";

function MiApi() {
  const [loading, setLoading] = useState(true);
  const [datosApi, setDatosApi] = useState([]);

  async function fetchData() {
    try {
      const data = await fetch("https://api-anime-production-0f6a.up.railway.app/getAllAnime?limit=10&page=1");
      const dataJson = await data.json();
      setDatosApi(dataJson.collection);
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
          <MyCard 
            picture = {datosApi[0].picture}
            title = {datosApi[0].title}
            type = {datosApi[0].type}
            episodes = {datosApi[0].episodes}
            year = {datosApi[0].animeSeason.year}
            status = {datosApi[0].status}
          />
        </main>
      )}
    </>
  )
}
export default MiApi;