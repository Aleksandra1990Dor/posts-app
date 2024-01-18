import type { FC } from 'react'
import Layout from '../shared/ui/Layout'
import { Link } from 'react-router-dom'

const NotFound: FC = () => {
	return (
		<Layout title="Whoops!" className="flex flex-col items-center gap-8 py-16">
			<h2 className="text-9xl text-green">404</h2>
			<Link to="/" className="font-medium underline hover:text-green/85">
				View main page source
			</Link>
		</Layout>
	)
}

export default NotFound
