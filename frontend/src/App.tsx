import React from 'react'

const highlights = [
  {
    title: 'Tailwind utilities',
    description:
      'Compose modern interfaces with expressive utility classes and responsive design baked in.',
    accent: 'Utility-first',
  },
  {
    title: 'DaisyUI components',
    description:
      'Drop-in themed components such as buttons, cards, and stats to accelerate your workflow.',
    accent: 'Component kit',
  },
  {
    title: 'Accessible defaults',
    description:
      'Dark mode aware colors, sensible focus states, and keyboard-friendly interactions out of the box.',
    accent: 'Inclusive UX',
  },
]

const roadmap = [
  'Scaffold your idea with ready-to-use hero, navbar, and footer sections.',
  'Customize the global theme in seconds using DaisyUI theme tokens.',
  'Ship polished experiences faster with consistent design building blocks.',
]

function App() {
  const heroHeadingId = React.useId()

  return (
    <div className="min-h-screen bg-base-200 text-base-content">
      <header className="bg-base-100 shadow-sm">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-5">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">
              Tailwind &amp; DaisyUI Playground
            </h1>
            <p className="text-sm text-base-content/70">
              Explore the styling system now that the plugins are installed.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="badge badge-primary badge-lg">v5 DaisyUI</span>
            <span className="badge badge-secondary badge-lg">Tailwind v4</span>
          </div>
        </div>
      </header>

      <main className="mx-auto flex max-w-7xl flex-col gap-16 px-6 py-16">
        <section className="hero rounded-3xl bg-gradient-to-br from-primary/10 via-base-100 to-secondary/10">
          <div className="hero-content flex-col gap-10 lg:flex-row-reverse">
            <div className="mockup-window border bg-base-100 shadow-xl lg:max-w-md">
              <div className="space-y-6 p-8">
                <h2 className="text-2xl font-semibold">What&apos;s included?</h2>
                <p className="text-base text-base-content/70">
                  DaisyUI is configured and ready to go. Try switching themes, combining
                  components, and layering Tailwind utilities to craft your layout.
                </p>
                <div className="stats shadow">
                  <div className="stat">
                    <div className="stat-title">Components</div>
                    <div className="stat-value text-primary">30+</div>
                    <div className="stat-desc">Reusable building blocks</div>
                  </div>
                  <div className="stat">
                    <div className="stat-title">Themes</div>
                    <div className="stat-value text-secondary">20</div>
                    <div className="stat-desc">Toggle with data-theme</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="max-w-2xl space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full bg-base-100/80 px-4 py-1 text-sm font-medium shadow">
                <span className="loading loading-dots loading-sm text-secondary" aria-hidden />
                Styling pipeline active
              </div>
              <h2
                id={heroHeadingId}
                className="text-4xl font-black leading-tight md:text-5xl"
              >
                Build beautiful interfaces faster with Tailwind and DaisyUI.
              </h2>
              <p className="text-lg text-base-content/70">
                The familiar Vite + React starter now ships with modern utility classes and a full
                component library. Mix and match to validate your setup instantly.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
                <button
                  className="btn btn-primary btn-wide"
                  aria-describedby={heroHeadingId}
                >
                  View documentation
                </button>
                <button className="btn btn-outline btn-secondary">Switch theme</button>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-3">
          {highlights.map((item) => (
            <article key={item.title} className="card bg-base-100 shadow-lg">
              <div className="card-body">
                <span className="badge badge-outline badge-primary w-fit">{item.accent}</span>
                <h3 className="card-title text-2xl">{item.title}</h3>
                <p className="text-base-content/70">{item.description}</p>
                <div className="card-actions">
                  <button className="btn btn-sm btn-link">Learn more</button>
                </div>
              </div>
            </article>
          ))}
        </section>

        <section className="grid gap-10 lg:grid-cols-5 lg:items-center">
          <div className="lg:col-span-3 space-y-5">
            <h3 className="text-3xl font-bold">Get started in minutes</h3>
            <p className="text-base-content/70">
              DaisyUI extends Tailwind so you can focus on shipping features instead of wiring up
              design tokens. Follow this quick start checklist to verify everything is configured.
            </p>
            <ul className="space-y-3">
              {roadmap.map((step, index) => (
                <li key={step} className="flex items-start gap-3">
                  <span className="badge badge-primary badge-lg mt-1">{index + 1}</span>
                  <span className="text-base text-base-content/80">{step}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-2">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h4 className="card-title">Need inspiration?</h4>
                <p className="text-base-content/70">
                  DaisyUI ships with pre-built sections, brand-new theming, and interactive elements
                  such as modals, tabs, and collapses. Try composing them here to ensure the styles
                  load correctly.
                </p>
                <div className="join join-vertical lg:join-horizontal">
                  <button className="btn join-item btn-accent">Open modal</button>
                  <button className="btn join-item btn-neutral">Launch demo</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-base-100">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-base-content/70 md:flex-row">
          <p>Tailwind &amp; DaisyUI integration is live and ready to explore.</p>
          <div className="flex items-center gap-3">
            <button className="btn btn-xs btn-ghost">Documentation</button>
            <button className="btn btn-xs btn-ghost">GitHub</button>
            <button className="btn btn-xs btn-ghost">Themes</button>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
