import React from 'react'
import Form from 'react-bootstrap/Form';
import '../src/index.css'
import Button from 'react-bootstrap/Button';

function Contact() {
  return (
    <div className=' row-4 ' >
            <div className='col-6 offset-3 p-6 cont-form border-1 rounded-2xl' >
                <p className='text-white text-5xl ' >Get In Touch</p>
                <br></br>
                <Form >
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className='text-white' >Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" className='bg-transparent border-orange' />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label className='text-white' >Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} className='bg-transparent' />
      </Form.Group>
    </Form>
    <br></br>
    <Button className='form-sub' variant="outline-success">Success</Button>

            </div>
    </div>
  )
}

export default Contact