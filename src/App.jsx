import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Welcome from './components/Welcome'
import Learn from './components/Learn'
import Counter from './components/Counter'
import UserList from './components/User'

function App() {
  const name = "Shivani Rao"
  const usn = "4VP23MC028"
  const a = [1, 2, 3, 4]
  const obj = {
    name: "Shivani Rao",
    usn: "4VP23MC028"
  }
  console.log(a)

  return (
    <>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          <img
            src={reactLogo}
            alt="React Logo"
            style={{
              width: '100px',
              height: '100px',
              animation: 'rotateLogo 5s linear infinite',
              filter: 'drop-shadow(0 0 10px cyan)',
              cursor: 'pointer',
            }}
          />
        </a>
       
        <h1 style={{ color: 'cyan', textShadow: '0 0 10px cyan' }}>React Basics Demo</h1>
        
        <Welcome obj={obj} />
        <UserList />
        <Counter />
        <Learn />
      </div>
      
     
    </>
  )
}

export default App
