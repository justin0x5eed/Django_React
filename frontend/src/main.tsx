import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import type { Root } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Counter from './components/Counter.tsx'
import Progress from './components/Progress.tsx'

// 定义一个通用的挂载函数
const mountApp = (element: HTMLElement, Component: React.FC<any>, props?: any): Root => {
  const root = createRoot(element)
  root.render(
    <StrictMode>
      <Component {...props} />
    </StrictMode>
  )
  return root
}

const viteRoot = document.getElementById('vite_root')
if (viteRoot) {
  mountApp(viteRoot, App)
}

// 默认：如果存在 #root，就挂载主应用
const counterRoot = document.getElementById('counter_root')
if (counterRoot) {
  mountApp(counterRoot, Counter)
}
const progressRoot = document.getElementById('progress_root')
if (progressRoot) {
  mountApp(progressRoot, Progress)
}

// 暴露到 window 以便 Django 模板或外部脚本动态调用
if (typeof window !== 'undefined') {
  (window as any).mountReactApp = (element: HTMLElement, Component: React.FC<any>, props?: any) =>
    mountApp(element, Component, props)
}

// 可选：导出组件注册表（方便根据名字查找）
export const components = {
  App,
  Counter,
  ProgressDemo,
}

