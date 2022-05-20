import Head from "next/head"
import {
  SButton,
  SCartContainer,
  SCartTable,
  SContainer,
  SFullPage,
  SPageTitle
} from "../components/styled"
import data from '.././utils/data.json'
import CartItem from "../components/Cart/CartItem"
import Link from "next/link"

const Cart = () => {
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
            <tbody>
              <tr>
                <th>Product Details</th>
                <th>Unit Price</th>
                <th>Quantity</th>
                <th>Total Price</th>
                <th>Remove</th>
              </tr>
              {data.cartItems.map(item => <CartItem item={item} key={item.productDetail} />)}
            </tbody>
            <tfoot>
              <tr>
                <td>
                  <Link href={'/'} passHref>
                    <SButton>Continue Shopping</SButton>
                  </Link>
                </td>
                <td>
                  <SButton>Add Product</SButton>
                </td>
                {/* <td>
                  <h3>Sub Total: N 500,000</h3>
                </td> */}
                <td>
                  <h3>Total: N 600,000</h3>
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