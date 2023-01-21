import React from 'react';
import './SalesRep.css';

export default function SalesRep(props) {
  return (
    <div className='srall'>
        <img src={props.person.logo} className='srimg' height='500px'/>
        <h1 className=''>{props.person.subject}</h1>
        <div className='srtext'>Sales Representative</div>
        <div className='srtext'><b>Email:</b> {props.person.email}</div>
        <div className='srtext'><b>Phone Number:</b>  {'123-456-7890'}</div>
    </div>
  )
}//won't let me use terminal
//can't type
//it's the powershell one, right?
//I compiled it, but how run no screen share in discord
// can you open your own terminal