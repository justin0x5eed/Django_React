import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-primary">Hello Tailwind + DaisyUI!</h2>
          <p>This is running inside Docker 🐳</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Click Me</button>
          </div>
        </div>
      </div>
    </div>
  )
}

