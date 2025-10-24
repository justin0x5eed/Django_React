import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import type { Root } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

declare global {
  interface Window {
    mountReactApp?: (element: HTMLElement) => Root
  }
}

const mountApp = (element: HTMLElement) => {
  const root = createRoot(element)

  root.render(
    <StrictMode>
      <App />
    </StrictMode>,
  )

  return root
}

const djangoRoot = document.getElementById('root')

if (djangoRoot) {
  mountApp(djangoRoot)
}

if (typeof window !== 'undefined') {
  window.mountReactApp = (element: HTMLElement) => mountApp(element)
}
