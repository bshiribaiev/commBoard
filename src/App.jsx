import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const resources = [
    { name: "Codepath", course: "WEB 101", link: "https://www.codepath.org/courses"},
    { name: "Codepath", course: "WEB 102", link: "https://www.codepath.org/courses" },
    { name: "Codepath", course: "WEB 103", link: "https://www.codepath.org/courses"},
    { name: "Codepath", course: "TIP 101", link: "https://www.codepath.org/courses"},
    { name: "Codepath", course: "TIP 102", link: "https://www.codepath.org/courses"},
    { name: "Codepath", course: "TIP 103", link: "https://www.codepath.org/courses"},
    { name: "Coursera", course: "Machine Learning Specialization", link: "https://www.coursera.org/learn/machine-learning" },
    { name: "CUNY Tech Prep", course: "WEB dev track", link: "https://cunytechprep.org/"},
    { name: "CUNY Tech Prep", course: "Data Science track", link: "https://cunytechprep.org/"},
    { name: "Break Through Tech", course: "AI & ML Fellowship", link: "https://www.breakthroughtech.org/programs/admissions/"},
  ];
  return (
    <>
      <h1>Best Resources to Become a Great Software Engineer</h1>
      <div className='cardGrid'> 
        {resources.map((res, index) => (
          <div className="wrapper"> 
          <Card key={index} name={res.name} course={res.course} link={res.link}/>
          </div> 
        ))}
      </div>
    </>
  )
}

export default App;
