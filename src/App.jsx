
import './App.css'
import HomePage from './HomePAge'
import ProfilePage from './ProfilePage'

function App() {

  return (
    <>
    {/* name={"React JS"} */}
     <HomePage name={"React JS"}></HomePage>
      <ProfilePage userId={4} />
    </>
  )
}

export default App
