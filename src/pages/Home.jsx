import Caards from "../Components/Caards"
import Carousal from "../Components/Carousal"
import ConnectContact from "../Components/ConnectContact"
import Footer from "../Components/Footer"
import Header from "../Components/Header"
import Sharingvoluntaringideas from "../Components/Sharingvoluntaringideas"
import Suggestion from "../Components/Suggestion"

 

function Home() {
  return (
    <div className="w-full h-full  flex flex-col">
     
      <Header />
      <Carousal />
      <Caards />
      <Sharingvoluntaringideas />
      <Suggestion />
      <ConnectContact />
      <Footer />
    </div>
  )
}

export default Home
