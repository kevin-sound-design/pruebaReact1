import Carousel from 'react-bootstrap/Carousel';

function Carrusel() {
  return (
    <Carousel className='carrusel'>
      <Carousel.Item className='carrusel-item'>
        <img src="https://i.pinimg.com/236x/49/5a/33/495a33e8f5f8113d54e77d1a3203fc7b.jpg" alt="a" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='carrusel-item'>
        <img src="https://i.pinimg.com/236x/49/5a/33/495a33e8f5f8113d54e77d1a3203fc7b.jpg" alt="a" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='carrusel-item'>
        <img src="https://i.pinimg.com/236x/49/5a/33/495a33e8f5f8113d54e77d1a3203fc7b.jpg" alt="a" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}
export default Carrusel;