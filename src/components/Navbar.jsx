import {FaShoppingCart} from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
const Navbar =()=>{
    const {cart}=useSelector((state)=> state);
    return (<div className="relative">
        <nav className="flex  justify-between items-center max-w-6xl h-20 mx-auto">
            <NavLink to="/">
                <div className="h-20">
                    <img className="h-full rounded-full" src="https://static.vecteezy.com/system/resources/thumbnails/017/208/923/small/luxury-letter-a-logo-a-logotype-for-elegant-and-stylish-fashion-symbol-vector.jpg"/>
               </div>
            </NavLink>
           
            <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
                <NavLink to="/">
                <p>Home</p>
                </NavLink>
                <NavLink to="/cart">
             <div  className="relative" >
                <FaShoppingCart className="text-2xl"/>
                {
                    cart.length>0&&
                    <span className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex  justify-center
                     items-center animate-bounce rounded-full text-white">{cart.length}</span>
                }
             </div>
              </NavLink>
          </div>
        </nav>
           
    </div>
    )
}
export default Navbar;