import React, {useState} from 'react'
import DBCard from './DBCard'
import "./DBCard.css"
import AddButton from './AddButton'

export default function Tutor(props) {
    const [srch, setSrch] = useState('')

    const handleChange = e => {
        setSrch(e.target.value)
      }

    function check(val, obj) {
        for (var key in obj) {
            if (obj[key]==val)
                return true;
        }
        return false;
    }

  return (
    <div>
        <div className='tutor'>
            {props.tutor?.map((course) => {
                if (check(srch, course)) {
                    return (
                        <div className='tutoritem'><DBCard name={course.subject} logo={course.logo}/></div>
                    )
                }
            })}
        </div>
        <h1>Select The Cars You Wish To Add</h1>
        <br />
        <h1>Filter cars by search</h1>
        <input value={srch} onChange={handleChange}></input>
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
