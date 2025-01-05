import { useOutletContext } from "react-router-dom";

const HostVanDetailPricing = () => {
     const van = useOutletContext();
  return (
      <div>
          <h2 className="text-2xl font-bold">${ van.price}/day</h2>
    </div>
  )
}

export default HostVanDetailPricing