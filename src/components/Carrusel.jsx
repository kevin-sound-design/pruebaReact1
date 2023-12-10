import Carousel from 'react-bootstrap/Carousel';
import { useEffect, useState } from 'react';

function Carrusel() {
  const [loading, setLoading] = useState(true);
  const [dataCarrusel, setDataCarrusel] = useState([])

  async function fetchDataCarrusel() {
    try {
      const data = await fetch("https://api-anime-production-0f6a.up.railway.app/getAnimeByTitle?limit=10&page=1&title=boruto");
      const dataJson = await data.json();
      setDataCarrusel(dataJson.collection)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchDataCarrusel()
  }, []);

  return (
    <>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <Carousel className='carrusel'>
          <Carousel.Item className='carrusel-item'>
            <img src={dataCarrusel[0].picture} alt={dataCarrusel[0].title} />
            <Carousel.Caption>
              <h3>{dataCarrusel[0].title}</h3>
              <p>capitulos: {dataCarrusel[0].episodes} <br /> Estado: {dataCarrusel[0].status}</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className='carrusel-item'>
            <img src={dataCarrusel[3].picture} alt={dataCarrusel[3].title} />
            <Carousel.Caption>
              <h3>{dataCarrusel[3].title}</h3>
              <p>Capitulos: {dataCarrusel[3].episodes} <br /> Estado: {dataCarrusel[3].status}</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className='carrusel-item'>
            <img src={dataCarrusel[4].picture} alt={dataCarrusel[4].title} />
            <Carousel.Caption>
              <h3>{dataCarrusel[4].title}</h3>
              <p>
              Capitulos: {dataCarrusel[4].episodes} <br /> Estado: {dataCarrusel[4].status}
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      )}

    </>
  )

}
export default Carrusel;