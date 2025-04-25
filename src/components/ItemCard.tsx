import useCartStore from "../stores/CartStore"
import { CartCardPropType, ItemType } from "../stores/Types"
import InCartItems from "./InCartButton"


function ItemCard({ name, imgUrl, category, price }: ItemType) {
    const { cart, setCart, findItem, handleQuantityChange } = useCartStore()

    const itemFound = findItem(name)

    const handleAddToCart = () => {
        if (!itemFound) {
            const newItem: CartCardPropType = {
                name: name,
                price: price,
                quantity: 1,
                imgUrl: imgUrl
            }

            setCart([ ...cart, newItem ])
        } else {
            handleQuantityChange(name, itemFound.quantity + 1)
        }
    }

    const renderName = (name: string) => {
        if (name.length > 25) {
            return name.slice(0, 20) + '...'
        }

        return name
    }

    return (
        <div className="relative h-min">
            <div className="w-full aspect-square">
                <img 
                    src={`/${imgUrl}.png`} 
                    alt={imgUrl} 
                    className={`w-full rounded-lg ${itemFound ? 'border-4 border-[#c73a0f]': ''}`}
                />
            </div>

            <div className="mt-[calc(10%)]">
                <p className="font-bold text-xs">{ category }</p>
                <p title={name} >{ renderName(name) }</p>
                <p>${ price.toFixed(2) }</p>
            </div>

            <div className="flex justify-center">
                {
                    itemFound ? 
                    <InCartItems name={itemFound.name} quantity={itemFound.quantity}/>
                    :
                    <button 
                        className='add-to-cart-btn cart-btn'
                        onClick={() => handleAddToCart()}
                    >
                        <img src='/icon-add-to-cart.svg'/>
                        Add to Cart
                    </button>
                }
            </div>
        </div>
    )
}

export default ItemCard
