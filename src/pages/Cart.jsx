import { useSelector } from "react-redux";
import { NavLink,Link } from "react-router-dom";
import CardItem from '../components/CardItem'
import { useEffect, useState } from "react";

const Cart =()=>{
   const {cart}= useSelector((state)=> state); 
     const [totalAmount,setTotalAmount]=useState(0);

     useEffect(()=>{
         setTotalAmount(cart.reduce(( acc, curr)=> acc+curr.price ,0));
     },[cart])


    return(
             <div className="h-full">
                {
                    cart.length> 0 ?
                    (<div className="flex  mt-10 mx-auto gap-20 justify-center">
                   

                   <div>
                    {
                        cart.map( (item,index) => {
                            return <CardItem key={item.id} item={item} itemIndex={index}/>
                        })
                    }
                    </div>



                    <div className="flex flex-col justify-between mb-20 ">
                     <div className="flex flex-col">
                      <div className="text-green-900 font-bold text-md uppercase">Your Cart </div>
                      <div className="text-green-700 font-bold text-[30px] uppercase">Summary </div>
                      <p>
                        <span className="font-bold">Total Items: {cart.length  }</span>
                        
                      </p>
                    </div>


                    <div className="flex flex-col gap-4">
                      <p className="font-bold">Total Amount: ${totalAmount }</p>
                      <button className="bg-green-500 px-20 py-2 rounded-md font-semibold text-white hover:bg-green-900 text-center">
                        CheckOut Now
                      </button>
                    </div>
                    </div>


                     </div>):
                    (
                        <div className="flex flex-col items-center justify-center mt-10">
                        <h1 className="font-semibold text-lg" >Cart Empty </h1>
                        <Link to={"/"}>
                          <button className="bg-blue-500 px-6 py-2 rounded-md mt-5 hover:bg-blue-900 uppercase text-white">
                          Shop Now
                          </button>
                         </Link>
                        </div>
                    )
                }
             </div>
    );
}
export default Cart;