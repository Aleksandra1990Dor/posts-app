import type { FC } from 'react'
import { Link } from 'react-router-dom'
import { IPost } from '../slice/posts.interface'
import Button from '../../../shared/ui/Button'

const Post: FC<{ post: IPost }> = ({ post }) => {
	return (
		<div className="flex flex-col w-full sm:w-10/12 mx-auto p-4 sm:p-6 rounded-lg bg-green/10 gap-2 sm:gap-4 shadow-md hover:shadow-lg">
			<div className="text-gray flex justify-between text mb-2 sm:mb-0 text-sm">
				<small>user #{post.userId}</small>
				<small>post #{post.id}</small>
			</div>
			<Link to={`/posts-app/posts/${post.id}`}>
				<h2 className="font-bold text-lg leading-none uppercase max-h-10 truncate w-11/12 sm:w-8/12">
					{post.title}
				</h2>
			</Link>
			<p className="italic text-slate-600 w-11/12 mb-2 sm:mb-0 sm:w-10/12  max-h-10 truncate text-sm">
				{post.body}
			</p>
			<Button href={`/posts/${post.id}`}>View all...</Button>
		</div>
	)
}

export default Post
