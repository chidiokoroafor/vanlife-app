import aboutHeroImg from '../assets/images/hero-image2.svg'
const About = () => {
  return (
      <div className="min-h-screen">
           
          <div className="h-[55vh] w-full ">
                <img className="w-full max-h-full object-cover" src={aboutHeroImg} alt="" />
                
          </div>
          <div className="w-[90%] mx-auto my-8 space-y-8 text-Text">
              <h2 className="text-3xl font-bold">Don’t squeeze in a sedan when you could relax in a van.</h2>
              <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉)</p>

              <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
              
              <div className="bg-primary2 p-6 rounded">
                  <h3 className="font-bold text-2xl">Your destination is waiting. Your van is ready.</h3>
                  <button className="bg-Text text-white py-2 px-4 mt-4 rounded-md">Explore our vans</button>
              </div>
          </div>
         
    </div>
  )
}

export default About