import React from 'react'

import { Button, Row, Col, Card } from 'react-bootstrap'

const Form2 = () => {
  return (
    <div className='a'>
      <Row>
        <Col> <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
            JavaScript Tutorial for beginners in hindi and urdu in most easiest way.This javascript crash course in hindi explain you every javascript programming point in detail.If you want to enter in the web development or mobile development then you must learn javascript tutorial course in hindi. In this course you will learn how to use javascript with html.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card></Col>
        <Col><Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card></Col>

        <Col><Card style={{ width: '30rem' }}>
          <Card.Img variant="top" src="https://www.industrialempathy.com/posts/image-optimizations/" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card></Col>
      </Row>
    </div>
  )
}

export default Form2
