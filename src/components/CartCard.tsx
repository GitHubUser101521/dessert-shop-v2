import useCartStore from "../stores/CartStore"
import { CartCardPropType } from "../stores/Types"

function CartCard({ name, price, quantity, imgUrl }: CartCardPropType) {
    const { deleteItem } = useCartStore()

    return (
        <>
            <div className='flex justify-between items-center'>
                <div className="flex items-center gap-4">
                    <div>
                        <img src={`/${imgUrl}.png`} className="dessert-preview" />
                    </div>

                    <div>
                        <p className='font-bold text-sm mb-1'>{ name }</p>

                        <div className='text-sm flex gap-4'>
                            <p className='text-orange'>{ quantity }x</p>
                            <p className='text-gray-500'>@{ price.toFixed(2) }</p>
                            <p className='text-gray-700'>${ (quantity * price).toFixed(2) }</p>
                        </div>
                    </div>
                </div>

                <div 
                    className='cursor-pointer mr-4'
                    onClick={() => deleteItem(name)}
                >
                    <p>x</p>
                </div>
            </div>

            <hr className='my-4 opacity-20' />
        </>
    )
}

export default CartCard
