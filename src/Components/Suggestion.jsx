 

function Suggestion() {
  return (
    <div className="z-50">
        <div className="w-full lg:h-[30rem] h-[42rem] bg-slate-900 translate-y-[30rem]  lg:flex flex-row-reverse    ">
       <div className="one w-full lg:w-[50%] lg:h-full text-white flex items-center justify-center flex-col">
           <div className="header text-center text-3xl text-white">Our Vision</div>
           <p className=" flex flex-wrap p-2">To create a world where all individuals have equal access to basic human rights, education, healthcare, and opportunities for sustainable livelihoods. We envision empowered communities working together to overcome poverty, injustice, and environmental degradation, fostering a global society built on dignity, equality, and compassion.</p>
         </div>
       <div className="two w-full lg:w-[50%] lg:h-full  flex items-center justify-center mt-4 lg:mt-0">  



        <div className="Suggestionform text-white w-[80%] h-[80%] bg-zinc-600 rounded-2xl">
            <div className="suggestion_heading text-3xl text-center mt-4"> Any Suggestions</div>
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
                    <label htmlFor="ideas w-full">Your Suggestion</label>
                    <textarea name="ideas" id="" placeholder="your suggestion" rows={3} className="w-full rounded-xl resize-none "></textarea>
                </div>
                <div className="btns lg:mt-5 mt-3 flex justify-between gap-4">
                    <button className="w-20 h-10 bg-slate-800 hover:bg-stone-900 text-white rounded-xl">Send</button>
                    <button  className="w-20 h-10 bg-slate-800 hover:bg-stone-900 text-white rounded-xl">Reset</button>
                </div>
            </form>
        </div>

       </div>
    </div>
    </div>
  )
}

export default Suggestion
