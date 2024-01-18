import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from 'tailwindcss'

// https://vitejs.dev/config/
export default defineConfig({
	base: 'https://Aleksandra1990Dor/github.io/posts-app/',
	plugins: [react()],
	css: {
		postcss: {
			plugins: [tailwindcss()]
		}
	}
})
