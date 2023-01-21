import React from 'react'
import DBCard from './DBCard'
import "./DBCard.css"
import AddButton from './AddButton'

export default function Learn(props) {
  return (
    <div>
        <div className='tutor'>
            {props.learn?.map((course) => {
                return (
                    <div className='tutoritem'><DBCard name={course.subject} logo={course.logo}/></div>
                )
            })}
        </div>
        <h1>Select The Courses You Wish To Add</h1>
        <div className='tutorbuttons'>
            {props.allClasses?.map((course, index) => {
                return (
                    <AddButton onClick={()=>props.handleAddLearnClick(index)} name={course.subject}/>
                    )
            })}
        </div>
    </div>
  )
}
