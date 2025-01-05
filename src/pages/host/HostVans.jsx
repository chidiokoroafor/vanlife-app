import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const HostVans = () => {
     const [vans, setVans] = useState([])
        
        useEffect(() => {
            fetch("/api/host/vans")
                .then((res) => res.json())
                .then((data) => {
                    setVans(data.vans)
                } )  
        }, [])
    
  return (
      <div className="my-8">
          <h1 className="font-bold text-3xl">Your listed vans</h1>
          <div className="mt-8 space-y-8">
              {
                  vans.map((van) => {
                      
                     return <Link key={van.id} className="flex gap-6 p-4 rounded bg-white" to={`/host/vans/${van.id}`}>
                            <div>
                                <img className="size-20 rounded" src={van.imageUrl} alt="" />
                            </div>
                            <div className="font-bold text-lg">
                                <p className="text-2xl">{ van.name}</p>
                                <p className="font-medium">${ van.price}/day</p>
                            </div>
                       </Link>
                  })
              }
          </div>
         
      </div>
  )
}

export default HostVans