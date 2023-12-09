import { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function MiApi() {
    const [datosApi, setDatosApi] = useState([]);
    const [loading, setLoading] = useState(true);
    
    async function fetchData(){
      try {
        const data = await fetch("");
        const dataJson = await data.json();
        setDatosApi(dataJson); 
      } catch (error) {
        console.log(error)
      }finally{
        setLoading(false);
      }
    } 
  
    useEffect(()=>{
      fetchData()
    },[]);

  return (
    <>
      {loading ? (
      <h2>Loading...</h2>
    ) : (
      <main>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://i.pinimg.com/236x/49/5a/33/495a33e8f5f8113d54e77d1a3203fc7b.jpg" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    </main>
    )}
    </>
  )
}
export default MiApi;