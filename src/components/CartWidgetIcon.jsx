import Ract, {useContext} from 'react'
import { Badge } from 'react-bootstrap';
import { FiShoppingCart } from "react-icons/fi";

import { CartContext } from '../context/CartContext';

const CartWidgetIcon = () => {

  const {cart} = useContext(CartContext)

  console.log("contexto: ", cart)

  return (
    <div>
      <FiShoppingCart color='white' fontSize={'1.8rem'}/>
      <Badge bg="danger">38</Badge>
    </div>
  )
}

export default CartWidgetIcon
