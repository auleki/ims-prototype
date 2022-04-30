import Head from "next/head"
import { SButton, SCartContainer, SCartTable, SContainer, SFullPage, SPageTitle } from "../components/styled"
import data from '.././utils/data.json'
import CartItem from "../components/Cart/CartItem"

const Cart = () => {
  console.log(data.cartItems)
  return (
    <SFullPage>
      <Head>
        <title>Cart - Inventory Management System</title>
        <meta name="description" content="The cart page, that shows all items to be purchased" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SContainer>
        <SCartContainer>
          <SPageTitle>Shopping Cart</SPageTitle>
          <SCartTable>
            <th>
              <tr>
                <td>Product Details</td>
                <td>Unit Price</td>
                <td>Quantity</td>
                <td>Total Price</td>
              </tr>
            </th>
            <tbody>
              {data.cartItems.map(item => <CartItem item={item} key={item.productDetail} />)}
            </tbody>
            <tfoot>
              <tr>
                <td>
                  <SButton>Continue Shopping</SButton>
                </td>
                <td>
                  <h3>Sub Total: N 500,000</h3>
                </td>
                <td>
                  <SButton>CHECKOUT</SButton>
                </td>
              </tr>
            </tfoot>
          </SCartTable>
        </SCartContainer>
      </SContainer>
    </SFullPage>
  )
}

export default Cart