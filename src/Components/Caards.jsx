 

function Caards() {
  return (
    <div className="text-xl z-30 w-full lg:flex align-center justify-center gap-4 translate-y-[30rem]">
      <div className="card_container lg:flex align-center justify-around gap-4-">


        <div className="card lg:w-1/5 w-[15rem]  ml-[3%] lg:ml-[0%]  lg:h-auto bg-white shadow-2xl shadow-black p-2 rounded-2xl hover:scale-110 transition-all duration-150">
            <div className="headder text-3xl text-center">Make a Donation</div>
            <div className="cardimg">
                <img src="https://renuhealthcare.vercel.app/HomepageImages/ThreeSlogans/donation.gif" alt="" />
                <p className="flex flex-wrap text-[1rem]">

                Every drop contributes to the ocean of change. Your donation, no matter how small, holds the power to create ripples of hope and transform lives. Together, lets weave a tapestry of compassion and kindness, making our world a brighter place for all.
                </p>
            </div>
        </div>



        <div className="card lg:w-1/5  w-[15rem] h-auto ml-[30%] lg:ml-0 bg-white shadow-2xl shadow-black p-2 rounded-2xl hover:scale-110 transition-all duration-150">
            <div className="headder text-3xl text-center">Become a volunteer</div>
            <div className="cardimg">
                <img src="https://renuhealthcare.vercel.app/HomepageImages/ThreeSlogans/volunteer.gif" alt="" />
                <p className="flex flex-wrap text-[1rem]">

                Become the heartbeat of change. As a volunteer in our NGO, you re not just lending your time; you re igniting a movement of compassion and empowerment. Join hands with us to paint a brighter tomorrow, one act of service at a time.
                </p>
            </div>
        </div>




        <div className="card lg:w-1/5 ml-[3%] lg:ml-[0%]  w-[15rem] h-auto bg-white shadow-2xl shadow-black p-2 rounded-2xl hover:scale-110 transition-all duration-150">
            <div className="headder text-3xl text-center">Sponsorship</div>
            <div className="cardimg">
                <img src="https://renuhealthcare.vercel.app/HomepageImages/ThreeSlogans/sponsor.gif" alt="" />
                <p className="flex flex-wrap text-[1rem]">

                Fuel the journey of impact. By sponsoring our cause, you re not just investing in a project; you re investing in the future of communities, in dreams yet to be realized. Together, let s create a legacy of empowerment and transformation.
                </p>
            </div>
        </div>
      
       
      </div>
    </div>
  )
}

export default Caards
