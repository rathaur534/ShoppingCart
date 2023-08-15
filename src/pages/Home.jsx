import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";

const Home=()=>{
    const api_url="https://fakestoreapi.com/products";
    const [loading ,setloading]=useState(false);
    const [posts,setposts]=useState([]);

    async function fetchProductdata()
    {
        setloading(true);
        try{
              const response=await fetch(api_url);
              const data=await response.json();
              setposts(data);
        }
        catch(err)
        {
            console.log("Error Occured");
            setposts([]);
        }

        setloading(false);
    }

    useEffect(()=>
    {
        fetchProductdata();

    },[]);
    return  (
       <div >

        {
            loading ? <Spinner/> :
            posts.length>0 ?
            (
                <div  className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto space-y-10 space-x-5 min-h-[80vh]" >
                    {
               posts.map( (post)=> (
                   <Product key={post.id} post={post}/>
               ) )
                  }
                </div> ):
                <div className="flex justify-center items-center mt-20">
                    <p className="font-bold ">No Data Found</p>
                </div>
        }
       </div>
     
    );
};
export default Home;