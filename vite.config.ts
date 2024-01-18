import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from 'tailwindcss'

// https://vitejs.dev/config/
export default defineConfig({
	base: 'https://github.com/Aleksandra1990Dor/posts-app.git',
	plugins: [react()],
	css: {
		postcss: {
			plugins: [tailwindcss()]
		}
	}
})
