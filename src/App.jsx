import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup';
import Home from './pages/Home';
import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import Landing from './pages/Landing';
import Navbar from './components/Navbar';
import Requests from './components/Requests';

function App() {
  const [token, setToken] = useState(false);

  if(token){
    sessionStorage.setItem('token', JSON.stringify(token))
  }

  useEffect(() => {
    if(sessionStorage.getItem(token)){
      const data = JSON.parse(sessionStorage.getItem(token));
      setToken(data)
    }
  }, [])
  
  return (
    <>
      <BrowserRouter>
        <div className='bg-emerald-600 h-screen'>
          <Toaster />
          <Routes>           
            <Route element={<Navbar />}>
              {!token &&
              <Route path='/login' element={<Login setToken={setToken} /> } />}
              {!token &&
              <Route path='/signup' element={<Signup />} />}
              {token? <Route path='/home' element={<Home token={token} />} />:""}
              <Route path='/' element={<Landing />} />
              <Route path='requests' element={<Requests />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App;

