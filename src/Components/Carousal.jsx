 import { useState,useEffect } from "react";
// import slider from "./slider.json"
import "../App.css"
function Carousal() {
  const[val,setval]=useState(1)
  useEffect(() => {
    setTimeout(() => {
      setval((count) => count + 1);
    }, 6000);
   if(val==8){
    setval(1)
     
   }
  console.log( )
  });
   

  // console.log(val)
   
  return (
    <div className=" w-full h-full bg-zinc-800 absolute  overflow-x-auto" >
    
      <div className="carosul_container w-full h-full flex items-center justify-center flex-row bg-zinc-900 overflow-y-hidden overflow-x-auto relative">
      <img src="https://renuhealthcare.vercel.app/HomepageImages/Corousel/Home1.jpg" className="w-full h-full absolute hidden" alt=""  />
      <img src="https://renuhealthcare.vercel.app/HomepageImages/Corousel/Home2.jpg" className="w-full h-full absolute   " alt=""  />
      <img src="https://renuhealthcare.vercel.app/HomepageImages/Corousel/Home3.jpg" className="w-full h-full absolute hidden " alt=""  />
      <img src="https://renuhealthcare.vercel.app/HomepageImages/Corousel/Home4.jpg" className="w-full h-full absolute hidden" alt=""  />
      <img src="https://renuhealthcare.vercel.app/HomepageImages/Corousel/Home5.jpg" className="w-full h-full absolute hidden " alt=""  />
      <img src="https://renuhealthcare.vercel.app/HomepageImages/Corousel/Home6.jpg" className="w-full h-full absolute hidden" alt=""  />
      <img src="https://renuhealthcare.vercel.app/HomepageImages/Corousel/Home7.jpg" className="w-full h-full absolute hidden " alt=""  />
      <img src="https://renuhealthcare.vercel.app/HomepageImages/Corousel/Home8.jpg" className="w-full h-full absolute hidden" alt=""  />
      
      {/* {
        slider.map(slideimgs=>{
          return(
            <img src={slideimgs.img} key={slideimgs.id} className="nete w-full h-full absolute opacity-0" alt="" />
          )
        })
      } */}
     
      </div>
    </div>
  )
}

export default Carousal
