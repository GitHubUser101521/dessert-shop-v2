import useAppStore from "../stores/AppStore";
import useCartStore from "../stores/CartStore";
import Swal from 'sweetalert2'

function ConfirmOrderPopup() {
    const { cart, setCart, countTotalPrice } = useCartStore()
    const { setConfirmOrderPopup } = useAppStore()

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' || event.key === 'Esc') { 
          setConfirmOrderPopup(false)
        }
    });

    const resetCart = () => {
        Swal.fire({
            title: "Order Confirmed",
            text: "Prepare for a sweet delivery to your house!",
            icon: "success",
            confirmButtonText: "Start New Order",
            confirmButtonColor: "#c73a0f"
        });

        setCart([])
        setConfirmOrderPopup(false)
    }

  return (
    <>
      <div className='black-background'></div>
      <div className='confirm-popup'>
        <h2 className='font-bold text-2xl'>See Your Orders</h2>
        <p className='text-gray-500'>Please proceed with payment</p>

        <div className='bg-primary px-4 pt-4 rounded-md mt-4'>
            <div className='h-60 overflow-scroll w-full '>
                {
                    cart.map((item) => (
                        <div className="flex justify-between items-center mb-2" key={item.name}>
                            <div className="flex gap-4 items-center">
                                <div>
                                    <img src={`/${item.imgUrl}.png`} className="dessert-preview"/>
                                </div>

                                <div className='text-sm flex flex-col gap-2'>
                                    <p className="font-medium">{ item.name }</p>
                                    
                                    <div className="flex gap-4">
                                        <p className='text-orange'>{ item.quantity }x</p>
                                        <p className='text-gray-700'>@{ (item.quantity * item.price).toFixed(2) }</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mr-4">
                                <p className="font-bold text-lg">${ (item.quantity * item.price).toFixed(2) }</p>
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className='flex items-center justify-between py-4'>
                <p>Order Total</p>
                <p className='text-2xl font-bold'>${ (countTotalPrice()).toFixed(2) }</p>
            </div>
        </div>

        <button 
            className='orange-btn bg-orange mt-4'
            onClick={resetCart}
        >
            Confirm Order
        </button>
      </div>
    </>
  )
}

export default ConfirmOrderPopup
