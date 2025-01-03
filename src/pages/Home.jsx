import heroImg from '../assets/images/hero-image.svg'

const Home = () => {
    return (
      <>
     
            
            <div className="h-[75vh] w-full relative">
                <img className="w-full max-h-full object-cover" src={heroImg} alt="" />
                <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                    <div className="space-y-8 max-w-[650px]">
                        <h2 className="text-white text-5xl font-bold">You got the travel plans, we got the travel vans.</h2>
                        <p className="text-white text-2xl">Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
                        <button className="w-full bg-btn font-bold text-white py-3 rounded">Find your van</button>
                    </div>
                </div>
                
            </div>
           
    </>
  )
}

export default Home