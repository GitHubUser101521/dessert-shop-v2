import { YesCartItems, NoCartItem } from '../components/Components'
import useCartStore from "../stores/CartStore"

function Cart() {
    const { cart } = useCartStore()
  
    const cartTotal = () => {
        let totalItems = 0
        cart.forEach(item => totalItems += item.quantity )

        return totalItems
    }

    return (
        <div className="w-3/10 bg-white my-10 rounded-lg p-4">
            <h3 className='text-orange font-bold text-2xl'>Your Cart {`(${cartTotal()})`}</h3>
            
            {
                cart.length > 0 ?
                <YesCartItems />
                :
                <NoCartItem />
            }
        </div>
    )
}

export default Cart
