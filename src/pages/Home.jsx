import { motion } from 'framer-motion'
import Button from '../components/Button'
import Section from '../components/Section'

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <div className="relative overflow-hidden bg-gradient-to-b from-sky-50 to-white dark:from-slate-900 dark:to-slate-950">
        <div className="absolute inset-0 -z-10 opacity-50 [background:radial-gradient(600px_circle_at_50%_0%,rgba(111,188,240,0.25),transparent_60%)]" />
        <Section className="pt-16 pb-20">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                SUI Ghana
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.6 }} className="mt-4 text-lg text-slate-600 dark:text-slate-300">
                A community driving Web3 innovation in Ghana with the Sui blockchain — through education, events, and open collaboration.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }} className="mt-6 flex gap-3">
                <Button href="#" variant="primary">Join Community</Button>
                <Button href="/events" variant="outline">View Events</Button>
              </motion.div>
            </div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="relative">
              <div className="aspect-[4/3] w-full rounded-2xl border border-sky-500/20 bg-gradient-to-br from-slate-900 to-slate-800 shadow-xl ring-1 ring-white/5 dark:from-slate-800 dark:to-slate-900"></div>
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
            </motion.div>
          </div>
        </Section>
      </div>

      {/* What we do */}
      <Section title="What we do" subtitle="Programs" className="py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: 'Developer Education', desc: 'Hands-on training, workshops and learning tracks for Sui devs.' },
            { title: 'Hackathons', desc: 'We organize and support hackathons with mentorship and resources.' },
            { title: 'Community', desc: 'Meetups, talks and collaborations across Ghana\'s Web3 ecosystem.' },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border border-sky-500/20 bg-white/60 p-6 shadow-sm backdrop-blur dark:bg-slate-900/60">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{item.title}</h3>
              <p className="mt-2 text-slate-600 dark:text-slate-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Highlights */}
      <Section title="Highlights" subtitle="Impact" className="py-4">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            ['20+','Events & meetups'],
            ['500+','Developers reached'],
            ['6','Hackathons supported'],
          ].map(([a,b]) => (
            <div key={b} className="rounded-xl border border-sky-500/20 bg-white/60 p-6 text-center shadow-sm backdrop-blur dark:bg-slate-900/60">
              <p className="text-4xl font-bold text-sky-600 dark:text-sky-300">{a}</p>
              <p className="mt-2 text-slate-600 dark:text-slate-300">{b}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Featured event */}
      <Section title="Upcoming" subtitle="Featured event" className="py-16">
        <div className="rounded-2xl border border-sky-500/20 bg-gradient-to-r from-sky-50 to-white p-6 shadow-sm dark:from-slate-800 dark:to-slate-900">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">SUI Ghana Builders Meetup – Accra</h3>
              <p className="mt-1 text-slate-600 dark:text-slate-300">Sat, Jan 18 · 10:00 AM GMT · Impact Hub Accra</p>
            </div>
            <Button href="/events" variant="primary">See details</Button>
          </div>
        </div>
      </Section>

      {/* Partners */}
      <Section title="Partners" subtitle="Ecosystem" className="py-16">
        <div className="grid grid-cols-2 items-center gap-6 md:grid-cols-4">
          {['Sui Foundation','Universities','Local Hubs','Sponsors'].map((p) => (
            <div key={p} className="flex h-16 items-center justify-center rounded-lg border border-sky-500/20 bg-white/60 text-sm text-slate-600 backdrop-blur dark:bg-slate-900/60 dark:text-slate-300">
              {p}
            </div>
          ))}
        </div>
      </Section>
    </div>
  )
}
