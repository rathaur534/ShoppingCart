import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify";
import { add, remove } from '../redux/Slices/CartSlice';
import Cart from '../pages/Cart';
import CartSlice from "../redux/Slices/CartSlice";

const Product = ({ post }) => {
  const { cart } = useSelector((state) => state);
  console.log(cart);
  const dispatch = useDispatch();

  function addToCart() {
    dispatch(add(post));
    toast.success("Item added to Cart");
  }
  function removeFromCart() {
    dispatch(remove(post.id));
    toast.error("Item removed from Cart");

  }
  return (

    <div className="flex flex-col justify-center items-center hover:scale-110 transition duration-300 
    ease in gap-4 p-4 mt-10 ml-5 rounded-xl  shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
      <div>
        <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">{post.title}</p>
      </div>
      <div>
        <p className="w-40 text-gray-400 font-normal text-[10px] text-left">
          {post.description.split(" ").slice(0, 10).join(" ") + "..."}</p>
      </div>
      <div className="h-[180px]">
        <img src={post.image} className="h-full w-full " />
      </div>
      <div className="flex justify-between gap-12 items-center w-full mt-5">
        <div>
          <p className="text-green-600 font-semibold">${post.price}</p>
        </div>
        {
          cart.some((p) => p.id === post.id) ?
            (<button className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase 
            hover:bg-gray-700 hover:text-white transition duration-300 
            ease in" onClick={removeFromCart}>
              Remove Item
            </button>) :
            (<button className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase 
            hover:bg-gray-700 hover:text-white transition duration-300 
            ease in" onClick={addToCart}>
              Add to Cart
            </button>)
        }
      </div>
    </div>)
}
export default Product