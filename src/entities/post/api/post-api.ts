import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IPost } from '../slice/posts.interface'
import { BASE_URL } from '../../../shared/ui/api-helpers/constants'

export const postsApi = createApi({
	reducerPath: 'posts',
	baseQuery: fetchBaseQuery({
		baseUrl: BASE_URL
	}),
	endpoints: build => ({
		getAllPosts: build.query<IPost[], { limit: number; start: number }>({
			query: ({ limit = 6, start = 0 }) => ({
				url: '/posts',
				params: {
					_limit: limit,
					_start: start
				}
			})
		}),
		getPostById: build.query<IPost, string | undefined>({
			query: id => ({
				url: `/posts/${id}`
			})
		})
	})
})
