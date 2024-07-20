import React from 'react'
import { useParams } from 'react-router-dom'

const ViewBlog = ({items}) => {
    const {id} = useParams()
    const findedobj = items.find((item)=> (item.id).toString() === id)
  return (
    <section>
        {findedobj && 
          <>
          <h2 className='text-center '>{findedobj.title}</h2>
          <p lead className='lh-lg ps-3 pb-3 fs-5 pe-2'>{findedobj.fullcontent}</p>

          </>

        }

        {!findedobj &&
           <>
            <h2 className='text-center pt-2'>Loading.....</h2>
           </>
        }
    </section>
    
  )
}

export default ViewBlog