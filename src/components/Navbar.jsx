import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
const Navbar = () => {
    return(
        <div className="bg-gray-300">
            <div className="flex flex-row justify-between ">
                <NavLink to="/" >
                    <div>
                        <img alt="" src="logo.png" width={100} />
                    </div>
                </NavLink>

                <NavLink to="/">
                    <p>Home</p>
                </NavLink>

                <NavLink to="/cart">
                    <FaShoppingCart/>
                </NavLink>


            </div>

            
        </div>
    )
};

export default Navbar;