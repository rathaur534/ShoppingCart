import {MdDelete} from "react-icons/md";
import { useDispatch } from "react-redux";
import {add,remove} from '../redux/Slices/CartSlice';
import { toast } from "react-toastify";

const CardItem=({item,itemIndex})=>{
     
         const dispatch=useDispatch();
    function removeFromCart()
    {
                 dispatch(remove(item.id));
                 toast.success("Item removed ")
    }
           return (
        <div>
            <div className="flex  w-[600px] gap-10 ">
                <div className="h-[220px] w-[200px]">
                    <img src={item.image} className=" h-full w-full"/>
                </div>
                <div className="flex flex-col gap-5 text-left w-[320px]">
                <div >
                    <h1  className="text-gray-700 font-bold text-lg text-left">{item.title}</h1>
                 </div>
                 <div>
                 <h1 className="text-gray-400 font-normal text-[15px] text-left">{item.description.split(" ").slice(0, 20).join(" ") + "..."}</h1>
                 </div>
                <div className="flex justify-between">
                    <p className="text-green-600 font-semibold">${item.price}</p>
                    <div onClick={removeFromCart} className="bg-red-500 rounded-full p-3 hover:bg-red-900  transition duration-300 
    ease in">
                        <MdDelete  />
                    </div>
                </div>
                </div>
            </div>


            <hr className="m-6 h-[2px] bg-black opacity-50 "/>

               </div>
           );
};
export default CardItem