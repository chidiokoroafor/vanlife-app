import { useOutletContext } from "react-router-dom";

const HostVanDetailPhotos = () => {
     const van = useOutletContext();
  return (
      <div>
           <img className="rounded-md size-48" src={van.imageUrl} alt={van.name} />
    </div>
  )
}

export default HostVanDetailPhotos