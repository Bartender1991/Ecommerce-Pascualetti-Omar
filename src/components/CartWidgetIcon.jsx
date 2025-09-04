import { Badge } from 'react-bootstrap';
import { FiShoppingCart } from "react-icons/fi";

import { CartContext } from '../context/CartContext';
import { useContext } from 'react';

const CartWidgetIcon = () => {

  const {cart} = useContext(CartContext)

  console.log(cart,"contexto: ")

  return (
    <div>
      <FiShoppingCart color='white' fontSize={'1.8rem'}/>
      <Badge bg="danger">38</Badge>
    </div>
  )
}

export default CartWidgetIcon
