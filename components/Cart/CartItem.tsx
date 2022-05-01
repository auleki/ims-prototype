import { useState, useEffect } from "react"
import { CartItem } from "../../global"
import { icons } from "../../utils/constants"
import { SIconButton } from "../styled"

const CartItem = ({ item }: { item: CartItem }) => {
  const [totalPrice, setTotalPrice] = useState<number>(0)
  useEffect(() => {
    setTotalPrice(item.unitPrice * item.quantity)
  }, [])
  return (
    <tr className="cart-item">
      <td>{item.productDetail}</td>
      <td>₦ {item.unitPrice}</td>
      <td className="quantity-td">
        <SIconButton><icons.minus /></SIconButton>
        <span className="quantity">{item.quantity}</span>
        <SIconButton><icons.plus /></SIconButton>
      </td>
      <td>₦ {totalPrice}</td>
      <td><SIconButton><icons.delete /></SIconButton></td>
    </tr>
  )
}

export default CartItem