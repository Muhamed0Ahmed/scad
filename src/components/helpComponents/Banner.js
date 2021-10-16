import React from 'react'
import { Container, Carousel } from 'react-bootstrap'
import Img1 from '../../images/bannerHome.PNG';

function Banner() {
    return (
        <div>
            <Container>
            <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Img1}
            alt="First slide"
          />
          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Img1}
            alt="Second slide"
          />

          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Img1}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Img1}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Img1}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>

            </Container>
            
        </div>
    )
}

export default Banner

