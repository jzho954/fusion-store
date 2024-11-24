import { createContext, useContext, useReducer } from 'react'

type CartItem = {
  id: number
  name: string
  price: number
  quantity: number
}

type CartState = {
  items: CartItem[]
  total: number
}

const CartContext = createContext<{
  state: CartState
  dispatch: React.Dispatch<any>
}>({ state: { items: [], total: 0 }, dispatch: () => null })
const cartReducer = (state: CartState, action: any) => {
    switch (action.type) {
      case 'ADD_ITEM':
        const updatedItems = [...state.items, action.payload]
        return {
          items: updatedItems,
          total: updatedItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
        }
      default:
        return state
    }
  }

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [], total: 0 })
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)