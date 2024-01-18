import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from '../pages/HomePage'
import NotFound from '../pages/NotFound'
import SinglePost from '../pages/SinglePostPage'
import Loader from '../shared/ui/Loader'

const router = createBrowserRouter([
	{
		path: '/',
		errorElement: <NotFound />,
		children: [
			{ path: '', element: <Home /> },
			{ path: '/posts/:id', element: <SinglePost /> }
		]
	}
])

function App() {
	return <RouterProvider router={router} fallbackElement={<Loader />} />
}

export default App
