import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import BlogSection from './BlogSection'


const Herosection = () => {
  return (
    
    <Container>
      <div className='d-flex justify-content-center'>
        <p className='display-2 fw-semibold lh-base'>Hi! I am <span className='text-primary'>Vharun</span><br></br>Web Developer</p>
      </div>
      <BlogSection/>
    </Container>
  )
}

export default Herosection