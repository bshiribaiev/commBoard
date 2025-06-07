import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const resources = [
    { name: "Codepath", course: "WEB 101" },
    { name: "Codepath", course: "WEB 102" },
    { name: "Codepath", course: "WEB 103" },
    { name: "Codepath", course: "TIP 101" },
    { name: "Codepath", course: "TIP 102" },
    { name: "Codepath", course: "TIP 103" },
    { name: "Coursera", course: "Machine Learning Specialization" },
    { name: "CUNY Tech Prep", course: "WEB dev track" },
    { name: "CUNY Tech Prep", course: "Data Science track" },
    { name: "Break Through Tech", course: "AI & ML Fellowship" },
  ];
  return (
    <>
      <h1>Best Resources to Become a Great Software Engineer</h1>
      <div className='cardGrid'> 
        {resources.map((res, index) => (
          <div className="wrapper"> 
          <Card key={index} name={res.name} course={res.course} />
          </div> 
        ))}
      </div>
    </>
  )
}

export default App;
