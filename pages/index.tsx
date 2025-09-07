import axios from "axios";
import { useEffect, useState } from "react";
import PropertyCard from "../components/property/PropertyCard";
import Pill from "../components/layout/Pill ";
import { images } from "../constants";

export default function Home() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState<string>("All");


    const filters:string[] = [
  "All",
  "Top Villa",
  "Self Checkin",
  "Instant Book",
  "Book now, pay later",
  "Free Reschedule",
];

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get("/api/properties");
        setProperties(response.data);
      } catch (error) {
        console.error("Error fetching properties:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
          {/* hero section */}
    <div className="relative w-full h-[80vh]">
           {/* Background Image */}
        <img src={images.hero} alt="hero-image" className=" absolute object-cover w-full h-full inset-0 z-0"/>
        
           {/* Centered Text */}
        <div className="absolute inset-0 z-10 text-white text-center flex  flex-col justify-center items-center px-4">
          <h1 className="text-5xl font-bold mb-2">Find your favorite place here!</h1>

          <p className="text-lg ">The best prices for over 2 million properties worldwide.</p>
        </div>
    </div>

    
       {/*Filter Section */}
      <div>
         <div className="m-6 p-6 flex flex-wrap gap-3">
          {filters.map((filter) =>(
            <Pill
              key={filter}
              label={filter}
               isActive={activeFilter === filter}
             onClick={()=> setActiveFilter(filter)}
            />))}
           </div>

           <div className="flex justify-between">
          <button className="rounded-full border cursor-pointer hover:bg-[#2f866f] hover:text-white px-4 py-2">Filter</button>
          <button className="rounded-full border cursor-pointer hover:bg-[#2f866f] hover:text-white px-4 py-2">Sort By: High Price</button>
           </div>
       </div>
 
              {/*Listing Section Section */}
             <div className="grid  gap-4">
             {properties.map((property,index) => (
             <PropertyCard key={index} property={property} />))}
            </div>
    </div>

  );
}
