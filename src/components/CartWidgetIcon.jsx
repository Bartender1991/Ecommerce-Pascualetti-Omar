import { Badge } from 'react-bootstrap';
import { FiShoppingCart } from "react-icons/fi";

const CartWidgetIcon = () => {
  return (
    <div>
      <FiShoppingCart color='white' fontSize={'1.8rem'}/>
      <Badge bg="danger">38</Badge>
    </div>
  )
}

export default CartWidgetIcon
