import { useState } from 'react'
import Navbar from './components/navbar'
import Edit from './pages/edit'
import Explore from './pages/explore'
import Settings from './pages/settings'

function App() {
  const [state, setState] = useState<string>("explore")
  const [user, setUser] = useState<IUser|null>(null)

  return (
    <>
      <Navbar user={user} state={state} setState={setState}></Navbar>
      {
        state === "edit" ? <Edit user={user}></Edit>
        : state === "explore" ? <Explore user={user}></Explore>
        : state === "settings" ? <Settings user={user}></Settings>
        : null
      }
    </>
  )
}

export default App
