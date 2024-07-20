import React from 'react'
import { Container } from 'react-bootstrap'

const About = () => {
  return (
    <Container >
        <div className='border'>
          <p className='display-4 ps-5'>About Us</p>
        </div>
        <div>
         <h3 className='ps-4 pt-3'>Welcome to CodeBlogs!</h3>
         <p className='ps-4 lead muted'>we’re passionate about exploring the dynamic world of software. Whether you’re a seasoned developer, a tech enthusiast, or someone just beginning to explore the vast possibilities of software, our blog is designed to be your go-to resource.</p>
         <p className='ps-4 pt-3 h4'>What We Offer:</p>
         <p className='ps-4 pt-3 pb-3'>
          <ul>
            <li className='pt-4'>
            Insightful Articles: Dive deep into the latest trends, technologies, and methodologies<br></br> shaping the software industry today.
            </li>
            <li className='pt-4'>
            Practical Tutorials: Step-by-step guides and tutorials that help you master new skills <br></br>and enhance your software development prowess.
            </li>
            <li className='pt-4'>
            Expert Advice: Learn from industry experts and thought leaders<br></br>who share their insights and experiences.
            </li>
          </ul>
          </p>
        </div>
    </Container>
  )
}

export default About