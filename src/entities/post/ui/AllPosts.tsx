import type { FC } from 'react'
import { MdKeyboardDoubleArrowUp } from 'react-icons/md'
import { useInfinityScroll } from '../hooks/useInfinityScroll'
import Post from './Post'
import Loader from '../../../shared/ui/Loader'

const AllPosts: FC = () => {
	const { isLoading, posts, setIsScrolledToTop } = useInfinityScroll()

	return (
		<div className="sm:px-6 flex flex-col gap-4 sm:gap-8 items-center">
			{posts
				? posts?.map(post => <Post key={post.id} post={post} />)
				: !isLoading && (
						<p className="italic text-slate-600 text-base">
							No posts found ...
						</p>
					)}
			{/* button scroll to top */}
			{posts && posts?.length > 16 && (
				<button
					className="fixed bottom-10 left-1/2 bg-green/10 hover:bg-green/20 p-2 rounded-full text-green/65 hover:text-green/90 animate-opacity"
					onClick={() => setIsScrolledToTop(true)}
				>
					<MdKeyboardDoubleArrowUp className="inline text-2xl" />
				</button>
			)}
			{isLoading && <Loader />}
		</div>
	)
}

export default AllPosts
