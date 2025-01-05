import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Vans = () => {
    const [vans, setVans] = useState([])
    
    useEffect(() => {
        fetch("/api/vans")
            .then((res) => res.json())
            .then((data) => {
                setVans(data.vans)
            } )  
    },[])

  return (
      <div className="w-[90%] mx-auto">
          <h2 className="text-3xl font-bold">Explore our van options</h2>
          <div className="flex gap-8 mt-4">
              {
                  ["simple", "rugged", "Luxury"].map((type) => {
                      return <button key={type} className="py-1 px-3 bg-filter text-Text2 rounded">{ type}</button>
                  })
              }
              <button className="underline">Clear Filters</button>
          </div>
        {vans.length>0 ? 
          <div className="grid grid-cols-3 my-8 gap-8">
              {
                  vans.map((van) => {
                      return <div key={van.id}>
                          <Link to={`/vans/${van.id}`}>
                          <div>
                               <img className="rounded-md" src={van.imageUrl} alt={van.name} />
                          </div>
                         
                          <div className="my-2 flex justify-between items-center font-[500]">
                              <h3>{van.name}</h3>
                              <p>{ van.price}/day</p>
                          </div>
                          
                          <button className={`${van.type == "simple" ? 'bg-Simple' : van.type == "rugged" ? 'bg-Rugged':'bg-Text'} py-1 px-3 capitalize rounded text-primary`}>{ van.type}</button>
                          </Link>
                      </div>
                  })
              }
          </div>
        : <h2 className="text-2xl text-center font-bold my-8">Loading...</h2>}
    </div>
  )
}

export default Vans