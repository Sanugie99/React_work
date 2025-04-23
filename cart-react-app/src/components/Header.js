import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/Cartcontext";

const Header = () => {
    const {items} = useContext(CartContext);
    
    //총 개수
    const totalCount = items.reduce((sum,item) => sum + item.quantity,0);
    //총 합
    const totalPrice = items.reduce((sum,item) => sum+ item.quantity*item.price,0);

    return(
        <div>
            <Link to="/products">Products</Link>
            <br/>
            <Link to="/cart">장바구니({totalCount})개 - 총 : {totalPrice}원</Link>
        </div>
    )
}

export default Header;