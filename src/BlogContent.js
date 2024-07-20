import React from 'react'
import { Link } from 'react-router-dom'

const BlogContent = ({item}) => {
  return (
    
  <div className=' border border-success-subtle rounded  text-center'>
    <img src={require(`${item.src}`)} className=' w-75 p-3 rounded ' alt='img' ></img>
    <p  className='fw-bold fs-4'>{item.title}</p>
    <p lead>{item.content}</p>
    <div className='text-center'>
     <Link to={`/blog/${item.id}`}><button type="button" className="btn btn-primary mb-3 ">View Blog</button></Link>
    
    </div>
  </div>
  
  )
}

export default BlogContent