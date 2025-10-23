import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
      react(),
      tailwindcss({
      config: {
        content: {
          relative: true,
          files: [
            './index.html',
            './src/**/*.{ts,tsx,js,jsx}',
            '../backend/backend/templates/**/*.{html,txt}',
            '../backend/backend/**/*.py',      // 如果在 Python 组件里拼接类名，也可以一并包含
          ],
        },
      },
    }),
  ],
})
