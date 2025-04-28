import useAppStore from "../stores/AppStore";
import useCartStore from "../stores/CartStore"
import { ConfirmOrderPopup } from '../components/Components'
import CartCard from "./CartCard";

function YesCartItems() {
    const { cart, countTotalPrice } = useCartStore()
    const { confirmOrderPopup, setConfirmOrderPopup } = useAppStore()

    return (
        <>
            <div className='max-h-80 overflow-auto bg-white mt-4'>
                {
                    cart.map((p) => (
                        <CartCard {...p} key={p.name}/>
                    ))
                }
            </div>

            <div className='flex items-center justify-between'>
                <p>Order Total</p>
                <p className='text-2xl font-bold'>${ (countTotalPrice()).toFixed(2) }</p>
            </div>

            <div className='flex justify-center items-center gap-1 my-4 p-4 rounded-md bg-primary'>
                <img src="/icon-carbon-neutral.svg" />
                <p className='text-xs'>This is a <span className='font-bold'>carbon-neutral</span> delivery</p>
            </div>

            <button 
                className='orange-btn bg-orange'
                onClick={() => setConfirmOrderPopup(true)}
            >
                See Order
            </button>

            {
                confirmOrderPopup && <ConfirmOrderPopup />
            }
        </>
    )
}

export default YesCartItems
