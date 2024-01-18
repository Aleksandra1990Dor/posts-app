import type { FC } from 'react'
import Layout from '../shared/ui/Layout'
import AllPosts from '../entities/post/ui/AllPosts'

const HomePage: FC = () => {
	return (
		<Layout title="View All Posts:">
			<AllPosts />
		</Layout>
	)
}

export default HomePage
