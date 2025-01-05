import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const VanDetail = () => {
    const params = useParams()
    
    const [van, setVan] = useState(null)

    useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then((res) => res.json())
            .then((data) => {
                setVan(data.vans)
            } )  
    },[params])

  return (
      <div className="w-[90%] mx-auto ">
          {van ? 
          <div className="grid md:grid-cols-2 gap-8 my-8 items-centr">
            <div>
                <img className="rounded-md" src={van.imageUrl} alt={van.name} />
                </div>
            
            <div className="space-y-8">
                <button className={`${van.type == "simple" ? 'bg-Simple' : van.type == "rugged" ? 'bg-Rugged' : 'bg-Text'} py-1 px-3 capitalize rounded text-primary`}>{van.type}</button>
                <div className="my-2 flex justify-between items-center font-[500]">
                    <h3 className="text-2xl">{van.name}</h3>
                    <p className="text-2xl">${ van.price}/day</p>
                </div>
                <p>{van.description}</p>
                <button className="w-full bg-btn font-bold text-white py-3 rounded">Rent this van</button>
            
                </div>
              </div>  
        : <h2 className="text-2xl text-center font-bold my-8">Loading...</h2> }      
    </div>
  )
}

export default VanDetail