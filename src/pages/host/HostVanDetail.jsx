import { useEffect, useState } from "react"
import { Link, NavLink, Outlet, useParams } from "react-router-dom"

const HostVanDetail = () => {
     const params = useParams()
    
    const [van, setVan] = useState({})

    useEffect(() => {
        fetch(`/api/host/vans/${params.id}`)
            .then((res) => res.json())
            .then((data) => {
                setVan(data.vans[0])
            } )  
    }, [params.id])
    
  return (
      <div className="space-y-8">
          <Link relative="path" to={".."} className="hover:underline block mt-8">&larr; Back to all vans</Link>
          <div className="mt-8 bg-white p-6">
             <div className="flex gap-6 items-centr">
                {/* <div> */}
                    <img className="rounded-md size-48" src={van.imageUrl} alt={van.name} />
                {/* </div> */}
                
                <div className="space-y-4">
                    <button className={`${van.type == "simple" ? 'bg-Simple' : van.type == "rugged" ? 'bg-Rugged' : 'bg-Text'} py-1 px-3 capitalize rounded text-primary`}>{van.type}</button>
                    <div className="my-2  font-[500]">
                        <h3 className="text-2xl">{van.name}</h3>
                        <p className="text-2xl">${ van.price}/day</p>
                    </div>
            
                </div>
              </div>

              <ul className="flex gap-4 text-Text2 my-8 text-lg">
                <li>
                    <NavLink end className={({isActive})=>isActive?'font-bold underline text-Text':'hover:font-bold hover:underline'} to={`/host/vans/${params.id}`}>Details</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive})=>isActive?'font-bold underline text-Text':'hover:font-bold hover:underline'} to={`/host/vans/${params.id}/pricing`}>Pricing</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive})=>isActive?'font-bold underline text-Text':'hover:font-bold hover:underline'} to={`/host/vans/${params.id}/photos`}>Photos</NavLink>
                </li>
               
              </ul>
              
              <div>
                  <Outlet context={van} />
              </div>
              
          </div>
          
    </div>
  )
}

export default HostVanDetail