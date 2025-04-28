import { YesCartItems, NoCartItem, ConfirmOrderPopup } from '../components/Components'
import useAppStore from '../stores/AppStore'
import useCartStore from "../stores/CartStore"

function Cart() {
    const { cart, countTotalPrice } = useCartStore()
    const { confirmOrderPopup, setConfirmOrderPopup } = useAppStore()
  
    const cartTotal = () => {
        let totalItems = 0
        cart.forEach(item => totalItems += item.quantity )

        return totalItems
    }

    return (
        <>
            <div className="hidden lg:block w-3/10 bg-white my-10 rounded-lg p-4">
                <h3 className='text-orange font-bold text-2xl'>Your Cart {`(${cartTotal()})`}</h3>
                
                {
                    cart.length > 0 ?
                    <YesCartItems />
                    :
                    <NoCartItem />
                }
            </div>

            <div className='btm-box'>
                <button 
                    className='p-2 w-2/3 text-white rounded-full border-none bg-orange lg:hidden'
                    onClick={() => setConfirmOrderPopup(true)}
                    disabled={cart.length <= 0}
                >
                    {
                        cart.length <= 0 ?
                        `Start ordering!`
                        :
                        `See Order (${ cartTotal() })`
                    }
                </button>

                <div>
                    <p className='text-2xl font-bold'>${ countTotalPrice().toFixed(2) }</p>
                </div>
            </div>

            {
                confirmOrderPopup && <ConfirmOrderPopup />
            }
        </>
    )
}

export default Cart
