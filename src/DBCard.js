import React from 'react'
import './DBCard.css'

export default function DBCard(props) {
  return (
    <div className='dbcall'>
        <div className='dbclogo dbcitem'><img src={props.logo} alt={props.name} width='100%'/></div>
        {props.link ?  <a href={props.page}><div className='dbcname dbcitem'>{props.name}</div></a> : <div className='dbcname dbcitem'>{props.name}</div>}
    </div>
  )
}
