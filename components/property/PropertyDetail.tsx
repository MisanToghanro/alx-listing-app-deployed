import { PropertyProps } from "../../interfaces"


const PropertyDetail: React.FC<{property: PropertyProps}> = ({property}) => {

    return(
        <div>
           
                <h1>{property.name}</h1>
                <div>
                   <span>{property.rating}</span>
                   <span>{property.address.city},{property.address.country}</span>
                </div>

                {/*image grid*/}
                <div>
                    <img src={property.image} alt={property.name}></img>
                </div>
                
                {/*Description*/}
                <div>
                    <h2>Description</h2>
                    <p>{}</p>
                </div>

                {/* Amenities */}
            <div>
                <h2>What this place offers</h2>
                 <ul className="flex flex-wrap space-x-4">
          {property.category.map((amenity, index) => (
            <li key={index} className="bg-gray-200 p-2 rounded-md">
              {amenity}
            </li>
          ))}
        </ul>
            </div>
            
        </div>
    )
}
export default PropertyDetail