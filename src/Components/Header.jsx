 
import { IoMdCloseCircleOutline } from "react-icons/io";
import logo from "../assets/logotask.png"
import { RxDropdownMenu } from "react-icons/rx";
import { useState } from "react";
function Header() {
  const[isclicked,setIsclicked]=useState(false)
  const menuopen=()=>{
    setIsclicked(false);
    console.log(isclicked)
  }
  const menuclose=()=>{
    setIsclicked(true);
    console.log(isclicked)
  }
  return (
    <div className=" z-10 text-gray-700 mt-2 bg-white lg:bg-white backdrop-blur-sm lg:bg-opacity-10 opacity-95  rounded-2xl h-[5rem] lg:h-[4rem] lg:w-full w-max p-2 lg:p-0 fixed   ">
        <div className="header_container container   mx-auto flex align-items justify-around flex-col lg:flex-row">
          <div className="logo w-20 mt-2">
            <img src={logo} alt="" className="translate-y-[-1rem] lg:bg-white rounded-xl " />
          </div>
          <navbar className=" h-max lg:mt-[1.5rem] lg:translate-y-[-0.8rem] translate-y-[-1rem]">
            < ul className="flex align-center justify-center  lg:gap-4 gap-2 m-[0.3rem] p-[0.2] flex-col lg:flex-row text-center text-bold">
              <li onClick={menuopen} className= {`h-full  p-1 rounded-[0.4rem] hover:bg-zinc-400 bg-white lg:hidden ${isclicked?" inline":" hidden"}`}><button   ><RxDropdownMenu className="w-14 text-3xl"/></button></li>



              
              <ul className= {`"flex items-center justify-center  lg:flex-row flex-col" ${isclicked?"hidden":"lg:flex gap-4"}`}>
              <li className="h-full  p-1 rounded-[0.4rem] hover:bg-zinc-400 bg-white w-20"><button className="w-full h-full">Home</button></li>
              <li className="h-full  p-1 rounded-[0.4rem] hover:bg-zinc-400 bg-white w-20"><button>About</button></li>
              <li className="h-full  p-1 rounded-[0.4rem] hover:bg-zinc-400 bg-white w-20"><button>Donate</button> </li>
              <li className="h-full  p-1 rounded-[0.4rem] hover:bg-zinc-400 bg-white w-20"><button>Gallery</button></li>
              <li className="h-full  p-1 rounded-[0.4rem] hover:bg-zinc-400 bg-white w-20"><button>Event</button></li>
              <li className="h-full  p-1 rounded-[0.4rem] hover:bg-zinc-400 bg-white w-20"><button>Contact</button></li>
              <li className="h-full  p-1 rounded-[0.4rem] hover:bg-zinc-400 bg-white w-20"><button>Login</button></li>
              </ul>



              <li  onClick={menuclose} className={`h-full  p-1 rounded-[0.4rem] hover:bg-zinc-400 bg-white lg:hidden ${!isclicked?" inline":" hidden"}`}><button ><IoMdCloseCircleOutline className=" text-3xl"  /></button></li>
            </ul>
          </navbar>
        </div>
    </div>
  )
}

export default Header
