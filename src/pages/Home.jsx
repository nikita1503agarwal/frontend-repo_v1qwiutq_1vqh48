import { motion } from 'framer-motion'
import Button from '../components/Button'
import Section from '../components/Section'

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <div id="home" className="relative overflow-hidden bg-gradient-to-b from-sky-50 to-white dark:from-slate-900 dark:to-slate-950">
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
                <Button href="#contact" variant="primary">Join Community</Button>
                <Button href="#events" variant="outline">View Events</Button>
              </motion.div>
            </div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="relative">
              <div className="aspect-[4/3] w-full rounded-2xl border border-sky-500/20 bg-gradient-to-br from-slate-900 to-slate-800 shadow-xl ring-1 ring-white/5 dark:from-slate-800 dark:to-slate-900"></div>
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
            </motion.div>
          </div>
        </Section>
      </div>

      {/* About */}
      <Section id="about" title="About" subtitle="Who we are" className="py-16">
        <div className="grid gap-6 md:grid-cols-2">
          <p className="text-slate-600 dark:text-slate-300">
            SUI Ghana is a developer-first community advancing the Sui ecosystem in Ghana. We host educational programs, meetups, and hackathons while partnering with universities, hubs, and industry to grow Web3 talent.
          </p>
          <div className="rounded-xl border border-sky-500/20 bg-white/60 p-6 shadow-sm backdrop-blur dark:bg-slate-900/60">
            <ul className="space-y-2 text-slate-600 dark:text-slate-300 list-disc pl-5">
              <li>Hands-on workshops and mentorship</li>
              <li>Project incubation and showcase opportunities</li>
              <li>Inclusive, collaborative community values</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Services */}
      <Section id="services" title="Services" subtitle="What we offer" className="py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: 'Developer Education', desc: 'Learning tracks, workshops, and study groups for builders.' },
            { title: 'Hackathons', desc: 'Events with mentorship, resources, and prizes for innovators.' },
            { title: 'Community & Partnerships', desc: 'Meetups, university programs, and ecosystem connections.' },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border border-sky-500/20 bg-white/60 p-6 shadow-sm backdrop-blur dark:bg-slate-900/60">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{item.title}</h3>
              <p className="mt-2 text-slate-600 dark:text-slate-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Events */}
      <Section id="events" title="Events" subtitle="What’s coming up" className="py-16">
        <div className="space-y-4">
          {[{
            name: 'SUI Ghana Builders Meetup – Accra',
            time: 'Sat, Jan 18 · 10:00 AM GMT',
            place: 'Impact Hub Accra',
          }, {
            name: 'Intro to Move on Sui – Online',
            time: 'Thu, Feb 6 · 6:00 PM GMT',
            place: 'Zoom',
          }].map((e) => (
            <div key={e.name} className="rounded-xl border border-sky-500/20 bg-white/60 p-5 shadow-sm backdrop-blur dark:bg-slate-900/60">
              <div className="flex flex-col items-start justify-between gap-3 md:flex-row md:items-center">
                <div>
                  <h3 className="text-base font-semibold text-slate-900 dark:text-white">{e.name}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{e.time} · {e.place}</p>
                </div>
                <Button href="#contact" variant="primary">RSVP</Button>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Gallery */}
      <Section id="gallery" title="Gallery" subtitle="Moments" className="py-16">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="aspect-square rounded-lg border border-sky-500/20 bg-gradient-to-br from-slate-200 to-slate-100 dark:from-slate-800 dark:to-slate-900" />
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Contact" subtitle="Get in touch" className="py-16">
        <form onSubmit={(e) => e.preventDefault()} className="mx-auto grid max-w-2xl gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="grid gap-1">
              <label htmlFor="name" className="text-sm text-slate-600 dark:text-slate-300">Name</label>
              <input id="name" name="name" className="rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none ring-sky-400 placeholder:text-slate-400 focus:ring-2 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100" placeholder="Your name" required />
            </div>
            <div className="grid gap-1">
              <label htmlFor="email" className="text-sm text-slate-600 dark:text-slate-300">Email</label>
              <input id="email" type="email" name="email" className="rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none ring-sky-400 placeholder:text-slate-400 focus:ring-2 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100" placeholder="you@example.com" required />
            </div>
          </div>
          <div className="grid gap-1">
            <label htmlFor="message" className="text-sm text-slate-600 dark:text-slate-300">Message</label>
            <textarea id="message" name="message" rows={4} className="rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none ring-sky-400 placeholder:text-slate-400 focus:ring-2 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100" placeholder="How can we help?" required />
          </div>
          <div className="flex items-center justify-between">
            <p className="text-xs text-slate-500">We typically reply within 2–3 business days.</p>
            <Button type="submit" variant="primary">Send message</Button>
          </div>
        </form>
      </Section>

      {/* Stats / Highlights */}
      <Section id="highlights" title="Highlights" subtitle="Impact" className="py-4">
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

      {/* Partners */}
      <Section id="partners" title="Partners" subtitle="Ecosystem" className="py-16">
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
