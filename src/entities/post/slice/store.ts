import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { postsApi } from '../api/post-api'

const rootReducer = combineReducers({
	[postsApi.reducerPath]: postsApi.reducer
})

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
		middleware: getDefaultMidleware =>
			getDefaultMidleware().concat(postsApi.middleware)
	})
}

export const store = setupStore()
