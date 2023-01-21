import React, {useState} from 'react'
import DBRow from "./DBRow"
import "./Dashboard.css"
import Logo from "./carlogo.png"

export default function Dashboard(props) {
  const [submit, setSubmit] = useState(false)
  const [amount, setAmount] = useState(10000);
  const [time, setTime] = useState(12);
  const [msg, setMsg] = useState('')

  function handleOnSubmit() {
    setSubmit(true)
  }

  function handleOnLoan() {
    setMsg("With a 10% interest rate, in order to pay back a loan of $" + amount + " over a period of " + time + " months, you will need to pay $"  + (parseInt(amount) / parseInt(time) * 1.1).toFixed(2) + " a month.")
  }

  const handleAChange = e => {
    setAmount(e.target.value)
  }

  const handleBChange = e => {
    setTime(parseInt(e.target.value) > 0 ? e.target.value : "1")
  }

  return (
    <div>
        <img src={Logo} className='dblogo'/>
        <br />
        <DBRow rowTitle="Wishlist" cards={props.tutor} link='/tutor' direct={true}/>
        <DBRow rowTitle="Contact Us" cards={props.people} link='/' direct={false}/>
        <br />
        <u><h1>Hours of Operation:</h1></u>
        <ul className='dblist'>
          <li>Monday: 8am-10pm</li>
          <li>Tuesday: 8am-10pm</li>
          <li>Wednesday: 8am-10pm</li>
          <li>Thursday: 8am-10pm</li>
          <li>Friday: 8am-10pm</li>
          <li>Staurday: 8am-midnight</li>
          <li>Sunday: 12pm-10pm</li>
        </ul>
        <br />
        <u><h1>Chat With A Sales Representative:</h1></u>
        <input></input>
        <br />
        <button onClick={handleOnSubmit} className="dbbutton">Submit</button>
        <br />
        {submit ? <div className='dbsubmit'>A sales representative will be with you shortly.</div> : <div />}
        <br />
        <u><h1>Loan Calculator:</h1></u>
        <div className='dblist'>Enter how much money you want your loan to give</div>
        <input value={amount} onChange={handleAChange}></input>
        <div className='dblist'>Enter the period of time in months you want to pay it over</div>
        <input value={time} onChange={handleBChange}></input>
        <br />
        <button onClick={handleOnLoan} className="dbbutton">Submit</button>
        <br />
        <div className='dblist'>{msg}</div>
        <br /><br />  
        <a /*href="https://docs.google.com/forms/d/e/1FAIpQLScqulwaFGvMx2efLTNftSOxXA0kzF7PCIU33vXbCwu-TNe3zA/viewform"*/><u><h1>Contact Us</h1></u></a>
        <div>.</div>
    </div>
  )
}
