 

function ConnectContact() {
  return (
    <div className="w-full  h-auto bg-slate-900 z-50 translate-y-[30rem] flex lg:flex-row flex-col">
        <div className="first lg:w-[50%] lg:h-full ">
            <div className="heading text-3xl text-white text-center">Connect With Us</div>
            <div className="flex items-center justify-center gap-2 mt-2">
                <ul className="flex flex-col gap-5 text-white">
                     <li className="hover:text-blue-500">Instagram</li>
                     <li  className="hover:text-blue-500">Linkedin</li>
                     <li  className="hover:text-blue-500">Twitter</li>
                     <li  className="hover:text-blue-500">Facebook</li>
                </ul>
                <ul className=" flex gap-2 flex-col ">
                    <li><img src="https://renuhealthcare.vercel.app/Footersvg/instagram.png" alt="" /></li>
                    <li><img src="https://renuhealthcare.vercel.app/Footersvg/linkedin.png" alt="" /></li>
                    <li><img src="https://renuhealthcare.vercel.app/Footersvg/twitter.png" alt="" /></li>
                    <li><img src="https://renuhealthcare.vercel.app/Footersvg/facebook.png" alt="" /></li>
                </ul>
            </div>
        </div>
        <div className="second  lg:w-[50%] lg:h-full lg:mt-0 mt-4">
            <div className="heading text-3xl text-white text-center">Contact Us</div>
            <div className="flex items-center justify-center gap-2 mt-2">
                <ul className="flex flex-col gap-5 text-white">
                     <li className="hover:text-blue-500">Gurugram,Haryana - 122503,India</li>
                     <li className="hover:text-blue-500">info@admedusociety.org</li>
                     <li className="hover:text-blue-500">+91-9671457355</li>
                     < li className="hover:text-blue-500">+91-9671457355</li>
                </ul>
                <ul className=" flex gap-2 flex-col ">
                    <li><img src="https://renuhealthcare.vercel.app/Footersvg/house.gif" alt="" className="w-10 rounded-full" /></li>
                    <li><img src="https://renuhealthcare.vercel.app/Footersvg/Mail.gif" alt="" className="w-10" /></li>
                    <li><img src="https://renuhealthcare.vercel.app/Footersvg/Phone.gif" alt="" className="w-10" /></li>
                    <li><img src="https://renuhealthcare.vercel.app/Footersvg/Phone.gif" alt="" className="w-10" /></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default ConnectContact
