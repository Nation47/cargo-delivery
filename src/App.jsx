import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup';
import Home from './pages/Home';
import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';

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
        <div className='bg-emerald-600 py-4'>
          <Toaster />
          <Routes>
            <Route path='/login' element={<Login setToken={setToken} /> } />
            <Route path='/signup' element={<Signup />} />
            {token? <Route path='/' element={<Home token={token} />} />:""}
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App;

