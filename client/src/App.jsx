import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Signin from './Pages/Signin';
import Signup from './Pages/Signup';
import About from './Pages/About';
import Profile from './Pages/Profile';

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/'element={<Home />} />
      <Route path='/Sign-in'element={<Signin />} />
      <Route path='/Sign-up'element={<Signup />} />
      <Route path='/About'element={<About />} />
      <Route path='/Profile'element={<Profile />} />
    </Routes>
    </BrowserRouter>
  )
}
