import { Badge } from 'react-bootstrap';
import { FiShoppingCart } from "react-icons/fi";

import { CartContext } from '../context/CartContext';
import { useContext } from 'react';

const CartWidgetIcon = () => {

  const {cart, cartQuantity} = useContext(CartContext)

  console.log(cart,"contexto: ")

  return (
    <div>
      <FiShoppingCart color='white' fontSize={'1.8rem'}/>
      {cart.length > 0 && <Badge bg="danger">{cartQuantity()}</Badge>}
    </div>
  )
}

export default CartWidgetIcon
