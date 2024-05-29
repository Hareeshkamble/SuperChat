
import './App.css'
import Home from './Components/Pages/Home'
import Login from './Components/Pages/Login'
import Signup from './Components/Pages/Signup'
import{Routes, Route,Navigate} from "react-router-dom"
import NotAllowed from './Components/NotAllowed'
import { useAuthContext } from './Context/AuthContext'
import { Toaster } from 'react-hot-toast'
function App() {
  const {authUser}=useAuthContext()


  return (
   <div className='p-4 h-screen flex items-center justify-center'>
<Routes>
  <Route exact path='/' element={authUser? <Home/> : <Navigate to={"/login"}/> }/>
  <Route exact path='/login' element={authUser?<Navigate to="/" /> : <Login/>}/>
  <Route exact path='/signup' element={authUser? <Navigate to="/"/>:<Signup/>}/>
  <Route exact path='/notallowed' element={<NotAllowed/>}/>
</Routes>
<Toaster/>
   </div>
  )
}

export default App
