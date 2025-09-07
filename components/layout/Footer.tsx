import { images } from "../../constants";
const Footer: React.FC = ()=>{

    return(
 <footer className="bg-[#222222] text-white p-6 ">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Logo & Description */}
        <div>
         <img src={images.logo} alt="Site logo" className="w-20 h-16 cursor-pointer text-wh"/>
          <p className="text-sm text-gray-400">
            Discover your perfect stay with us — from cozy rooms to luxury villas.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-md font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm text-gray-300">
            <li><a href="#">Home</a></li>
            <li><a href="#">Explore</a></li>
            <li><a href="#">Login</a></li>
            <li><a href="#">Sign Up</a></li>
          </ul>
        </div>

        {/* Accommodation Types */}
        <div>
          <h3 className="text-md font-semibold mb-2">Accommodation</h3>
          <ul className="space-y-1 text-sm text-gray-300">
            <li><a href="#">Rooms</a></li>
            <li><a href="#">Mansions</a></li>
            <li><a href="#">Countryside</a></li>
            <li><a href="#">Beachfront</a></li>
          </ul>
        </div>

        {/* Contact / Socials */}
        <div>
          <h3 className="text-md font-semibold mb-2">Get in Touch</h3>
          <ul className="space-y-1 text-sm text-gray-300">
            <li>Email: support@example.com</li>
            <li>Phone: +1 234 567 890</li>
            <li>Instagram | Twitter | Facebook</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} StaySpot. All rights reserved.
      </div>
    </footer>
    )
}
export default Footer;