import { useDispatch, useSelector } from "react-redux";
import {add,remove} from "../redux/Slices/CartSlice";
import { toast } from 'react-toastify';



const Product = ({post}) =>{

    const {cart} = useSelector((state) => state);
    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(add(post));
        toast.success("Item added to cart");
    }

    const removeFromCart = () => {
        dispatch(remove(post.id));
        toast.success("Item removed from cart");
    }
    return (
        <div>
            <div>
                <p>{post.title}</p>
            </div>
            <div>
                <p>{post.description}</p>
            </div>
            <div>
                <img src={post.image} alt=""/>
            </div>
            <div>
                <img src={post.price} alt=""/>
            </div>
            <button>
                {
                    cart.some((p) => p.id === post.id) ?
                    (<button
                    onClick={removeFromCart}
                    >
                        Remove Item
                    </button>)
                    : (
                        <button
                    onClick={addToCart}>
                            Add to Cart
                        </button>
                    )
                }
            </button>

        </div>
    )
};

export default Product;
