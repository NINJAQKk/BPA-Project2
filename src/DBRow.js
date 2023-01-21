import React, {useState} from 'react'
import DBCard from './DBCard'
import './DBRow.css'
import { NavLink as Link } from "react-router-dom";

export default function DBRow(props) {
  return (
    <div>
        <div className='dbrtop'>
            <div className='dbrt'>{props.rowTitle}</div>
            {props.direct ? <div className='dbrsa' ><Link to={props.link}>See All</Link></div> : <div />}
        </div>

        <div className='dbrall'>
            {props.cards?.map((course) => {
                return (
                    <div className='rowcard'><DBCard name={course.subject} logo={course.logo} link={course.link} page={course.page}/></div>
                )
            })}
        </div>
    </div>
  )
}
