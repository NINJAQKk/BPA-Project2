import './App.css';
import React, {useState, useEffect} from 'react'
import Navbar from './Navbar'
import Dashboard from "./Dashboard"
import Tutor from "./tutor"
import Learn from "./learn"
import Civic from './civic.jpg'
import Chemistry from './chemistry.jpg'
import Plus from './grayplus.png'
import Andrew from './andrew.jpg'
import Krish from './krish.jpg'
import Spandan from './spandan.jpg'
import SalesRep from './SalesRep';
import Silverado from './silverado.jpg'
import Pickup from './pickup.jpg'
import Camry from './camry.jpg'
import ModelS from './models.jpg'
import Explorer from './Explorer.jpg'
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';

const allClasses = [
  {
    'subject': 'Honda Civic',
    'logo': Civic,
    'manufacturer': "Honda",
    'price': "$22,999",
    'year': "2017",
    'availability': '5',
    'color': 'White',
    'drive': 'Automatic'
  },
  {
    'subject': 'Chevy Silverado',
    'logo': Silverado,
    'manufacturer': "Chevy",
    'price': "$27,999",
    'year': "2012",
    'availability': '2',
    'color': 'Blue',
    'drive': 'Automatic'
  },
  {
    'subject': 'Ram Pickup',
    'logo': Pickup,
    'manufacturer': "Ram",
    'price': "$34,999",
    'year': "2021",
    'availability': '3',
    'color': 'Red',
    'drive': 'Automatic'
  },
  {
    'subject': 'Toyota Camry',
    'logo': Camry,
    'manufacturer': "Toyota",
    'price': "$14,999",
    'year': "2011",
    'availability': '7',
    'color': 'Blue',
    'drive': 'Automatic'
  },
  {
    'subject': 'Tesla Model S',
    'logo': ModelS,
    'manufacturer': "Tesla",
    'price': "$59,999",
    'year': "2016",
    'availability': '1',
    'color': 'Red',
    'drive': 'Automatic'
  },
  {
    'subject': 'Ford Explorer',
    'logo': Explorer,
    'manufacturer': "Ford",
    'price': "$35,999",
    'year': "2019",
    'availability': '3',
    'color': 'Red',
    'drive': 'Automatic'
  },
  // {
  //   'subject': ' Statistics',
  //   'logo': Chemistry
  // },
  // {
  //   'subject': ' Music',
  //   'logo': Chemistry
  // },
  // {
  //   'subject': 'English ',
  //   'logo': Chemistry
  // },
]

const allPeople = [
  {
    'subject': "Andrew Balson",
    'logo': Andrew,
    'link': true,
    'page': "andrew",
    'email': 'andrew.balson@gmail.com',
  },
  {
    'subject': "Krish Daela",
    'logo': Krish,
    'link': true,
    'page': "krish",
    'email': 'krish.daela@gmail.com',
  },
  {
    'subject': "Spandan Patel",
    'logo': Spandan,
    'link': true,
    'page': "spandan",
    'email': 'spandan.patel@gmail.com',
  },
]

function App() {
  const [tutor, setTutor] = useState([{'subject': 'Add More', 'logo': Plus, 'link': true, 'page': 'tutor'}])
  const [learn, setLearn] = useState([{'subject': 'Add More', 'logo': Plus}])
  const [indix, setIndix] = useState([])
  const [indox, setIndox] = useState([])
  const [people, setPeople] = useState(allPeople)

  function handleAddTutorClick(index) {
    if (index in indix) return
    if (tutor[0].subject==="Add More") {
      tutor.shift()
    }
    setTutor((prev) => {
      return [allClasses[index], ...prev]
    })
    setIndix((prev) => {
      return[...prev, index]
    })
  }

  function handleAddLearnClick(index) {
    if (index in indox) return
    if (learn[0].subject==="Add More") {
      learn.shift()
    }
    setLearn((prev) => {
      return [allClasses[index], ...prev]
    })
    setIndox((prev) => {
      return[...prev, index]
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Dashboard tutor={tutor} learn={learn} people={people}/>} />
            <Route path='/tutor' element={<Tutor tutor={tutor} allClasses={allClasses} handleAddTutorClick={handleAddTutorClick}/>} />
            <Route path='/andrew' element={ <SalesRep person={allPeople[0]}/> } />
            <Route path='/krish' element={ <SalesRep person={allPeople[1]}/> } />
            <Route path='/spandan' element={ <SalesRep person={allPeople[2]}/> } />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
