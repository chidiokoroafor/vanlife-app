import { useOutletContext } from "react-router-dom"

const HostVanDetailDetails = () => {
    const van = useOutletContext();
    
  return (
      <div className="mt-8 space-y-4">
          <p><strong>Name: </strong>{van.name} </p>
          <p><strong>Category: </strong>{van.type} </p>
          <p><strong>Description: </strong>{van.description} </p>
          <p><strong>Visibility: </strong>Public </p>
    </div>
  )
}

export default HostVanDetailDetails