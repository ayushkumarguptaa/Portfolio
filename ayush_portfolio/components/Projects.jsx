import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Api from '../components/Projectapi'
import '../src/index.css'

function Projects() {
  return (
    <div className='mt-8'>
        <div className='grid justify-center items-center' >
            <p className='text-white text-4xl'>My Projects Highlights</p>
            <br></br>
            <div className='flex justify-center'>
            <Button variant="primary"
             className='project_btn'>
             EXPLORE MORE
             </Button></div>
        </div>
        <br></br>
        <div>
            {/* Project Cards */}
            <div className='flex flex-wrap mt-4 w-[100vw]'>
              {Api.map((data)=>{
              return(
                <Card className='ml-[7%] mb-[7%] max-w-[22%] max-h-[80%]' >
      <Card.Img variant="top" src={data.img} />
      <Card.Body>
        <Card.Title>{data.title}</Card.Title>
        {/* <Card.Text>
          
        </Card.Text> */}
      </Card.Body>
      <Card.Body>
        <Card.Link href="#" className='no-underline' >Visit here</Card.Link>
      </Card.Body>
    </Card>
              )
            })}
            </div>
        </div>
    </div>
  )
}

export default Projects