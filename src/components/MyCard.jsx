import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function MyCard({picture, title, type, episodes, year, status}) {
  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={picture} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Tipo: {type}</ListGroup.Item>
          <ListGroup.Item>Capitulos: {episodes}</ListGroup.Item>
          <ListGroup.Item>Año: {year}</ListGroup.Item>
          <ListGroup.Item>Estado: {status}</ListGroup.Item>
        </ListGroup>
      </Card>
    </>
  )
}

export default MyCard;