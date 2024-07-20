import React from 'react'
import { Container } from 'react-bootstrap'

const Contact = () => {
  return (
    <Container>
      <div>
        <h2 className='text-center pt-2'>Contact us </h2>
        <div>
          <form action='mailto:vharunsivaraj06@gmail.com' method='post' encType='text/plain'>
                  <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">Name</label>
                  <input type="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required></input>
                </div>
                <div class="mb-3">
                  <label for="exampleInputEmail1" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required></input>
                  <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" className="form-label" >Content of Message</label>
                  <input type="password" placeholder='(Optional)'  className="form-control" id="exampleInputPassword1"></input>
                </div>
                
                <div className='text-center'>
                <button type="submit" className="btn btn-primary mb-3">Submit</button>
                </div>
          </form>
        </div>

      </div>
    </Container>
  )
}

export default Contact