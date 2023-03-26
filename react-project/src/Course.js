import React from 'react'

const Course = ({image, title, description}) => {

  return (
    <div>
        <img src={image} alt="" />
        <div className='title'>{title}</div>
        <div className='text'>{description}</div>
    </div>
  )
}

export default Course



