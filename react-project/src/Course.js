import React from 'react'

const Course = (props) => {
    const {title, description} = props;
  return (
    <div>
        <div>{title}</div>
        <div>{description}</div>
    </div>
  )
}

export default Course



