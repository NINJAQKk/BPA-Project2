import React from 'react'
import DBCard from './DBCard'
import "./DBCard.css"
import AddButton from './AddButton'

export default function Tutor(props) {
  return (
    <div>
        <div className='tutor'>
            {props.tutor?.map((course) => {
                return (
                    <div className='tutoritem'><DBCard name={course.subject} logo={course.logo}/></div>
                )
            })}
        </div>
        <h1>Select The Cars You Wish To Add</h1>
        <div className='tutorbuttons'>
            {props.allClasses?.map((course, index) => {
                return (
                    <AddButton onClick={()=>props.handleAddTutorClick(index)} course={course}/>
                    )
            })}
        </div>
    </div>
  )
}
