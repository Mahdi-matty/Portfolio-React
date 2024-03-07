import { useState } from 'react'
import { Outlet  } from 'react-router-dom';
import Nav from './components/nav';

function App() {

  return (
    <>
    <Nav />
    <main className="mx-3 wholeBody">
        <Outlet />
      </main>
      
    </>
  )
}

export default App
