 
import voluntrypic from "../assets/volunterypic.jpg"
function Sharingvoluntaringideas() {
  return (
    <div className="w-full lg:h-[30rem] h-[42rem] bg-slate-900 translate-y-[30rem] z-50 lg:flex ">
       <div className="one w-full lg:w-[50%] lg:h-full border border-white">
           <img src={voluntrypic} className="w-full h-full" alt="" />
         </div>
       <div className="two w-full lg:w-[50%] lg:h-full  flex items-center justify-center ">  



        <div className="voluntryform text-white w-[80%] h-[80%] bg-zinc-600 rounded-2xl">
            <div className="voluntery_heading text-3xl text-center mt-4">Share your Volunteering Ideas</div>
            <form action="" className="flex items-center justify-center flex-col mt-0 p-4">

                <div className="name flex flex-col w-full h-auto ">
                    <label htmlFor="Name w-full">Name</label>
                    <input type="text" name="Name" id="" placeholder="Name"  className="w-full h-[2.5rem] rounded-xl"/>
                </div>
                <div className="email flex flex-col w-full h-auto">
                    <label htmlFor="Email w-full">Email</label>
                    <input type="email" name="email" id="" placeholder="email" className="w-full h-[2.5rem] rounded-xl" />
                </div>
                <div className="Your_ideas flex flex-col w-full h-auto">
                    <label htmlFor="ideas w-full">Your Ideas</label>
                    <textarea name="ideas" id="" placeholder="your ideas" rows={3} className="w-full rounded-xl resize-none "></textarea>
                </div>
                <div className="btns lg:mt-5 mt-3  flex justify-between gap-4 ">
                    <button className="w-20 h-10 bg-slate-800 hover:bg-stone-900 text-white rounded-xl">Send</button>
                    <button  className="w-20 h-10 bg-slate-800 hover:bg-stone-900 text-white rounded-xl">Reset</button>
                </div>
            </form>
        </div>

       </div>
    </div>
  )
}

export default Sharingvoluntaringideas
