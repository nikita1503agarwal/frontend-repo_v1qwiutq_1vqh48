import { useState } from 'react'
import Section from '../components/Section'

const items = Array.from({ length: 12 }).map((_, i) => ({
  id: i + 1,
  src: `https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wx`,
  alt: 'Community event photo',
}))

export default function Gallery() {
  const [active, setActive] = useState(null)

  return (
    <div>
      <div className="bg-gradient-to-b from-sky-50 to-white py-16 dark:from-slate-900 dark:to-slate-950">
        <Section title="Gallery" subtitle="Highlights">
          <p className="max-w-3xl text-lg text-slate-600 dark:text-slate-300">Photos from meetups, hackathons, and workshops across Ghana.</p>
        </Section>
      </div>

      <Section className="py-16">
        <div className="columns-1 gap-4 sm:columns-2 md:columns-3">
          {items.map((it) => (
            <button key={it.id} className="group mb-4 block w-full overflow-hidden rounded-xl border border-sky-500/20 bg-white/40 shadow-sm backdrop-blur hover:brightness-105 dark:bg-slate-900/40" onClick={() => setActive(it)}>
              <img src={it.src} alt={it.alt} className="h-auto w-full object-cover transition group-hover:scale-[1.02]" />
            </button>
          ))}
        </div>
      </Section>

      {active && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-6" onClick={() => setActive(null)}>
          <img src={active.src} alt={active.alt} className="max-h-[85vh] w-auto rounded-xl shadow-2xl" />
        </div>
      )}
    </div>
  )
}
