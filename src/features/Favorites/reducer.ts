import { T_AppThunk } from 'store/types'
import { createAction, PayloadAction } from '@reduxjs/toolkit'
import { createReducer, Dispatch } from '@reduxjs/toolkit'
import { I_FavoriteItem } from './type'

const initialState: I_FavoriteItem = []

const addToFavoritesAction = createAction<number>('FAVORITES/add')
const removeFromFavoritesAction = createAction<number>('FAVORITES/remove')

const favoritesReducer = createReducer(initialState, (builder) => {
  builder.addCase(
    addToFavoritesAction,
    (state: any, action: PayloadAction<number>) => {
      return Array.from(new Set([...state, action.payload])) //уникальное значение
    }
  )

  builder.addCase(
    removeFromFavoritesAction,
    (state: any, action: PayloadAction<number>) => {
      return state.filter((favoriteId: number) => favoriteId !== action.payload)
    }
  )
})

export const addtoFavorites =
  (favoriteId: number): T_AppThunk =>
  (dispatch :Dispatch) => {
    dispatch(addToFavoritesAction(favoriteId))
  }

export const removeFromFavorites =
  (favoriteId: number): T_AppThunk =>
  (dispatch :Dispatch) => {
    dispatch(removeFromFavoritesAction(favoriteId))
  }

export default favoritesReducer
