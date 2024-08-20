import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";

const Home = () => {
    const API_URL = process.env.REACT_APP_API_URL;
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);

    async function fetchProductData(){
        setLoading(true);

        try{
            const res = await fetch(API_URL);
            const data = await res.json();

            setPosts(data);
        }

        catch(err){
            console.log("Error Occured");
            setPosts([]);
        }

        setLoading(false);

    }

    useEffect ( () =>{
        fetchProductData();
        // eslint-disable-next-line
    },[]);


    return(
        
        <div>
        {
            loading ? <Spinner/> :
            (posts.length > 0 ) ?
            (<div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]" >
                {               
                    posts.map( (post) => (
                    <Product key={post.id} post={post} />
                    ))
                }
            </div>) :
            <div className="flex min-h-[90vh] justify-center items-center  " >
                <p className="bg-red-600  rounded-lg text-white uppercase tracking-wider font-semibold  mt-5 border-2 border-green-600 p-3 px-10">No Data Found</p>
            </div>
        } 
        </div>
    )
};

export default Home;