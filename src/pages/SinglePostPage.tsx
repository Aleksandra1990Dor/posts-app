import type { FC } from 'react'
import { useSinglePost } from '../entities/post/hooks/useSinglePost'
import Layout from '../shared/ui/Layout'
import Button from '../shared/ui/Button'
import Loader from '../shared/ui/Loader'

const SinglePost: FC = () => {
	const { isLoading, post, title } = useSinglePost()

	return (
		<Layout
			title={`Post ${title}`}
			className="sm:px-6 flex flex-col gap-16 sm:gap-12"
		>
			<Button href="/">View all posts</Button>
			{isLoading ? (
				<Loader />
			) : (
				<div className="flex flex-col w-full sm:w-11/12 mx-auto rounded-lg bg-green/5 gap-8 p-4 sm:p-10 border border-green shadow-xl">
					<div className="text-gray flex justify-between text-sm">
						<small>user #{post?.userId}</small>
						<small>post #{post?.id}</small>
					</div>
					<h2 className="font-bold text-xl uppercase sm:w-8/12 leading-none">
						{post?.title}
					</h2>
					<p className="italic text-green/95 w-10/12 sm:w-8/12 mb-8 leading-relaxed text-sm">
						{post?.body}
					</p>
				</div>
			)}
		</Layout>
	)
}

export default SinglePost
