import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Profile from './pages/Profile'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'

export default function App() {
  return <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home />}></Route>
    <Route path='/about' element={<About />}></Route>
    <Route path='/profile' element={<Profile />}></Route>
    <Route path='/sign-in' element={<SignIn />}></Route>
    <Route path='/sign-up' element={<SignUp />}></Route>
  </Routes>
  </BrowserRouter>
}
