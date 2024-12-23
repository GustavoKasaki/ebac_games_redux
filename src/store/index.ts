import { configureStore } from '@reduxjs/toolkit'

import carrinhoReducer from './reducers/carrinho'

export type RootReducer = ReturnType<typeof store.getState>

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer
  }
})
