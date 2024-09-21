 import logo from "../assets/logotask.png"

function Logopage() {
  return (
    <div  className="w-[95%] h-[38rem] lg:h-[35rem]   rounded-2xl shadow-2xl shadow-gray-600 flex items-center justify-center flex-col bg-white ">
    

      <div className="logo w-72 ">
        <img src={logo} alt="" />
      </div>
     <div className="text-3xl flex flex-wrap ml-4 lg:ml-0">  Renu Sharma Healthcare & Education Foundation</div>
     <div>A  new vision of nation</div>
    </div>
  )
}

export default Logopage
