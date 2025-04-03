import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './feature/cart/cartSlice'

export default configureStore({
  reducer: {
    cart: cartSlice,
  },
})