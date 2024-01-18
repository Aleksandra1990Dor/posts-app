import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App.tsx'
import './app/index.scss'
import { Provider } from 'react-redux'
import { store } from './entities/Post/slice/store.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
)
