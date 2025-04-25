import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { CartCardPropType } from './Types';



type CartStoreType = {
    cart: CartCardPropType[],
    setCart: (newState: CartCardPropType[]) => void,
    handleQuantityChange: (itemName: string, newQty: number) => void,
    deleteItem: (name: string) => void,
    isConfirmOpen: boolean,
    setIsConfirmOpen: (newState: boolean) => void,
    countTotalPrice: () => number,
    findItem: (itemName: string) => CartCardPropType | undefined
}

const useCartStore = create<CartStoreType>()(
      persist(
        (set, get) => ({
            cart: [],
            setCart: (newState) => {
                set({ cart: newState })
            },
            handleQuantityChange: (itemName, newQty) => {
                set((prevState) => ({
                  ...prevState, 
                  cart: prevState.cart
                    .map((item) =>
                        item.name === itemName ? { ...item, quantity: newQty } : item
                    )
                    .filter(item => item.quantity > 0)
                    ,
                }))
            },
            deleteItem: (name) => {
                set((prevState) => ({
                    ...prevState,
                    cart: prevState.cart.filter(item => item.name !== name)
                }))
            },
            isConfirmOpen: false,
            setIsConfirmOpen:(newState) => {
                set({ isConfirmOpen: newState})
            },
            countTotalPrice: () => {
                let totalPrice = 0
                get().cart.forEach(item => totalPrice += item.price * item.quantity)
                return totalPrice
            },
            findItem: (itemName) => get().cart.find(item => item.name === itemName) 
        }),
        {
          name: 'cart-storage', 
        }
      )
  );
  
  export default useCartStore;