import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Signin from './Pages/Signin';
import Signup from './Pages/Signup';
import About from './Pages/About';
import Profile from './Pages/Profile';
import Header from './components/Header';

export default function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/Home'element={<Home />} />
      <Route path='/Sign-in'element={<Signin />} />
      <Route path='/Sign-up'element={<Signup />} />
      <Route path='/About'element={<About />} />
      <Route path='/Profile'element={<Profile />} />
    </Routes>
    </BrowserRouter>
  )
}
