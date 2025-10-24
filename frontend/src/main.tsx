import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import type { Root } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

declare global {
  interface Window {
    mountReactApp?: (element: HTMLElement) => Root
    $RefreshReg$?: (type: unknown, id: string) => void
    $RefreshSig$?: () => (type: unknown) => unknown
    __vite_plugin_react_preamble_installed__?: boolean
  }
}

const ensureReactRefreshPreamble = () => {
  if (
    import.meta.env.DEV &&
    typeof window !== 'undefined' &&
    !window.__vite_plugin_react_preamble_installed__
  ) {
    window.$RefreshReg$ = () => {}
    window.$RefreshSig$ = () => (type) => type
    window.__vite_plugin_react_preamble_installed__ = true
  }
}

const mountApp = (element: HTMLElement) => {
  ensureReactRefreshPreamble()

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
