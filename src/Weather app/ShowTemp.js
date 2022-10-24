import React from 'react'
import Card from 'react-bootstrap/Card';

const ShowTemp=({text})=> {
  return (
    <>
   <div>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Description</Card.Title>
        <Card.Text>
          {text.description}
        </Card.Text>
      </Card.Body>
    </Card>
   </div>
   <br></br>
   <div>
     <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Temp</Card.Title>
        <Card.Text>
          {text. temp}
        </Card.Text>
      </Card.Body>
    </Card>
   </div>
   <br></br>
   <div>
   <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Temp-Maximum</Card.Title>
        <Card.Text>
          {text.temp_max}
        </Card.Text>
      </Card.Body>
    </Card>
   </div>
   <br></br>
   <div>
   <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Temp-Minimum</Card.Title>
        <Card.Text>
          {text.temp_min}
        </Card.Text>
      </Card.Body>
    </Card>
   </div>
   <br></br>
   <div>
   <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Humidity</Card.Title>
        <Card.Text>
          {text.humidity}
        </Card.Text>
      </Card.Body>
    </Card>
   </div>
   <br></br>
   <div>
   <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Sunrise</Card.Title>
        <Card.Text>
          {text.sunrise}
        </Card.Text>
      </Card.Body>
    </Card>
   </div>
   <br></br>
   <div>
   <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Sunset</Card.Title>
        <Card.Text>
          {text.sunset}
        </Card.Text>
      </Card.Body>
    </Card>
   </div>
   <br></br>
   <div>
   <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Country</Card.Title>
        <Card.Text>
          {text.country}
        </Card.Text>
      </Card.Body>
    </Card>
   </div>
   
   </>
  )
}

export default ShowTemp
