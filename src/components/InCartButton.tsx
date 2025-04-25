import useCartStore from "../stores/CartStore"

type InCartType = {
  name: string,
  quantity: number
}

function InCartItems({ name, quantity }: InCartType) {
  const { handleQuantityChange } = useCartStore()
  return (
    <button className='in-cart-btn cart-btn'>
      <span onClick={() => handleQuantityChange(name, quantity + 1)}><img src="/icon-increment-quantity.png" /></span>
      <p>{ quantity }</p>
      <span onClick={() => handleQuantityChange(name, quantity - 1)}><img src="/icon-decrement-quantity.png" /></span>
    </button>
  )
}

export default InCartItems