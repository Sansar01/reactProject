import { useState ,useEffect} from 'react'
import {useDispatch} from 'react-redux'
import './App.css'
import authService from '../appwrite/auth';
import { login, logout } from '../store/authSlice';
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header';
import {Outlet} from 'react-router-dom'

function App() {
  const [loading, setloading] = useState(true);
  const dispatch = useDispatch();

  console.log("url ",import.meta.env.VITE_APPWRITE_URL);

  useEffect(()=>{
           authService.getCurrentUser()
           .then((userData)=>{
            if(userData)
            {
              dispatch(login({userData}))
            }
            else
            {
              
              dispatch(logout());
            }
           }).finally(()=>setloading(false));

  },[])
 
  
 return !loading ? (
  <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
    <div className='w-full block'>
        <Header/>
      <main>
        Todo:<Outlet/>
      </main>
      <Footer/>
    </div>
  </div>
 ):
 null
}

export default App
