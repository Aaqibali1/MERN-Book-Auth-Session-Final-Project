import React from 'react'
import { UserContext } from '../App'
import { useContext } from 'react'
import Navbar from './Navbar'
import Card from './Card'
import './Home.css'
function Home() {
  const userContext = useContext(UserContext)
  const handleLogout = async () => {
   await fetch('/api/logout', {
      method: 'DELETE',
    })
      .then((response) => response.text())
      .then((data) => {
        console.log('Logout successful:', data);
        window.location.href = '/'; // Replace '/login' with the appropriate login page URL
      })
      .catch((error) => {
        console.error('Failed to logout:', error);
        // Handle the error and provide an appropriate response
      });
  };
  
  return (
    <div>
      <Navbar userEmail={userContext.email} onLogout={handleLogout} />
      <div className="center">
        <Card/>
      </div>
    </div>
  )
}

export default Home
