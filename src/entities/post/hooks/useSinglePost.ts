import { useEffect, useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { postsApi } from '../api/post-api'

export const useSinglePost = () => {
	const [title, setTitle] = useState('')
	const { id } = useParams()
	const navigate = useNavigate()

	const { data: post, isLoading, error } = postsApi.useGetPostByIdQuery(id)

	useEffect(() => {
		if (error) navigate('/not-found')
		if (post?.id) setTitle(`#${post.id}`)
	}, [post, error])

	return useMemo(() => ({ title, isLoading, post }), [title, isLoading])
}
