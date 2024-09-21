 
import './App.css'
import Logopage from './pages/Logopage'
 import Home from "./pages/Home"
import { useState,useEffect } from 'react'; 
 
function App() {
  
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
  
     
    setTimeout(() => {
      
        setIsLoading(false);
        console.log(isLoading);
        
    }, 4000);
}, []);
  return (
    <>
   <div className="app_container w-full h-full flex items-center justify-center ">
       {
        isLoading ? <Logopage /> : <Home />
       }
   </div>
    </>
  )
}

export default App
