import { useState } from 'react'
import Navbar from './components/navbar'
import Home from './pages/home'
import Explore from './pages/explore'
import Settings from './pages/settings'

enum MenuType{
  HOME,
  EXPLORE,
  SETTINGS
}

function App() {
  const [state, setState] = useState<string>("home")
  const [user, setUser] = useState<IUser|null>(null)

  return (
    <>
      <Navbar user={user} state={state}></Navbar>
      {
        state === "home" ? <Home user={user}></Home>
        : state === "explore" ? <Explore user={user}></Explore>
        : state === "settings" ? <Settings user={user}></Settings>
        : null
      }
    </>
  )
}

export default App
