import { CartItem } from "../../global"

const CartItem = ({ item }: { item: CartItem }) => {
  return (
    <tr className="cart-item">
      <td>{item.productDetail}</td>
      <td>N {item.unitPrice}</td>
      <td>{item.quantity}</td>
      <td>{item.totalPrice}</td>
    </tr>
  )
}

export default CartItem