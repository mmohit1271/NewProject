import React from 'react'

export default function NewsItem(props) {
  return (
    <>
      <div className='col-md-3 mb-3'>
        <div className="card" >
          <img height={200} src={props.image?props.image:"/images/No_Image_Available.jpg"} className="card-img-top" alt="No Image"/>
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <div className='date-source'>
                <p>{props.source}</p>
                {/* <p>{ new Date(props.publish).toDateString()}</p> */}
            </div>
            <p className="card-text">{props.description}</p>
            <hr/>
            <a href={props.url} className="btn btn-dark" target='_blank' rel='noreferrer' width='100%'>Read Full Story..</a>
          </div>
        </div>

        </div> 
    </>
  )
}
