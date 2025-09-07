import { images } from "../../constants";
const Header: React.FC = ()=>{

    return(
        <header className="bg-white">
            <div className="flex flex-wrap justify-between items-center p-6 gap-4">
                 {/* Logo */}
                <img src={images.logo} alt="Site logo" className="w-20 h-16 cursor-pointer hidden md:block"/>
                    
                  {/*search bar*/}  
                  <div className="w-full  max-w-md">
                <input type="text"
                placeholder="search"
                className="text-gray-700 w-full rounded-md border px-6 py-2 focus:outline-none focus:ring-2 ring-[#34967C]"
                ></input>
                  </div>

                 {/*Buttons*/}
                <div className=" flex justify-between items-center ">
                <button type="button" className="text-white bg-[#34967C] hover:bg-[#2f866f] cursor-pointer rounded-full px-6 py-2 mx-2">Sign in</button>
                <button type="button" className="text-white bg-[#34967C] hover:bg-[#2f866f] cursor-pointer rounded-full px-6 py-2 mx-2">Sign up</button>
                </div>
            </div>

              <div className="w-full border-t border-b py-3 mt-4">
        <nav className="flex flex-wrap justify-center gap-6 text-sm text-gray-700">
        <button className="cursor-pointer hover:underline hover:text-emerald-500 transition-colors">Rooms</button>
        <button className="cursor-pointer hover:underline hover:text-emerald-500 transition-colors">Mansion</button>
        <button className="cursor-pointer hover:underline hover:text-emerald-500 transition-colors">Countryside</button>
        <button className="cursor-pointer hover:underline hover:text-emerald-500 transition-colors">Beachfront</button>
        <button className="cursor-pointer hover:underline hover:text-emerald-500 transition-colors">Cabins</button>
        </nav>
              </div>

        </header>
    )
}
export default Header;