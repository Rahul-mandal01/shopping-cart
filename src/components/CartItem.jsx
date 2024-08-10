import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from "react-redux";
import {remove} from "../redux/Slices/CartSlice";
import {toast} from "react-toastify"

const CartItem = ({item, itemIndex}) => {
    const dispatch = useDispatch();

    const removeFromCart = () => {
        dispatch(remove(item.id));
        toast.success("Item removed successfully");
    }
    return(
        <div>
            <div>
                <img src={item.image} alt="" />
            </div> 
            <div>
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <div>
                    <p>{item.price}</p>
                    <div
                        onClick={removeFromCart} 
                    >
                        <FcDeleteDatabase/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default CartItem;