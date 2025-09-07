import { PROPERTYLISTINGSAMPLE } from "../../constants";
import { PropertyProps } from "../../interfaces";

interface PropertyCardProps{
  property:PropertyProps
}

const PropertyCard: React.FC<PropertyCardProps> = ({property}) =>{

    return(
        <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {PROPERTYLISTINGSAMPLE.map((property,index)=>
                      (<div key={index}className="bg-white rounded-xl  shadow-md hover:shadow-lg cursor-pointer">
                        <img src={property.image} alt={property.name} className="w-full h-48 object-cover"/>
                        <div className="p-4">
                          <h2 className="text-lg font-semibold mb-1">{property.name}</h2>
                          <p className="text-gray-700">{property.price}</p>
                          <p className="text-yellow-500 font-medium">⭐{property.rating}</p>
                        </div>
            
                      </div>))}
        </div>
    )
}

export default PropertyCard;