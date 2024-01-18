import { useEffect, useMemo, useState } from 'react'
import { postsApi } from '../api/post-api'

export const useInfinityScroll = () => {
	const [isFetching, setIsFetching] = useState(false)
	const [limit, setLimit] = useState(6)
	const [isScrolledToTop, setIsScrolledToTop] = useState(false)

	const {
		data: posts,
		isLoading,
		refetch
	} = postsApi.useGetAllPostsQuery({
		limit: limit,
		start: 0
	})

	const scrollHandler = (e: any): void => {
		if (
			e.target.documentElement.scrollHeight -
				e.target.documentElement.scrollTop -
				window.innerHeight <
			50
		) {
			setIsFetching(true)
			window.scrollTo(
				0,
				e.target.documentElement.scrollHeight +
					e.target.documentElement.scrollTop
			)
		}
	}

	useEffect(() => {
		document.addEventListener('scroll', scrollHandler)
		return () => {
			document.removeEventListener('scroll', scrollHandler)
		}
	}, [])

	useEffect(() => {
		if (isFetching) {
			setLimit(prev => (prev < 97 ? prev + 6 : prev))
			setIsFetching(false)
		}
	}, [isFetching])

	useEffect(() => {
		if (isScrolledToTop) {
			window.scrollTo(0, 0)
			setLimit(6)
			refetch()
			setIsScrolledToTop(false)
		}
	}, [isScrolledToTop])

	return useMemo(
		() => ({ isLoading, posts, setIsScrolledToTop }),
		[isLoading, posts]
	)
}
