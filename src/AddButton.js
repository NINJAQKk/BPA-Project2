import React from 'react'
import "./AddButton.css"

export default function AddButton(props) {
  return (
    <div className='abcontainer'>
      <button className='addbutton' onClick={props.onClick}>
        <h1>{props.course.subject}</h1>
        <img className='abimg' src={props.course.logo} height='300px'/>
        Manufacturer: {props.course.manufacturer}
        <br />
        Price: {props.course.price}
        <br />
        Year: {props.course.year}
        <br />
        Availability: {props.course.availability}
        <br />
        Color: {props.course.color}
        <br />
        Drive: {props.course.drive}
        </button>
      </div>
  )
}
