import Section from '../components/Section'
import { Code, Rocket, GraduationCap, Users, MessageSquare, Wrench } from 'lucide-react'

const services = [
  { icon: Code, title: 'Developer Training', desc: 'Curriculum-driven tracks in Move and Sui tooling.' },
  { icon: GraduationCap, title: 'Workshops & Bootcamps', desc: 'Hands-on learning with mentors and real projects.' },
  { icon: Rocket, title: 'Hackathon Support', desc: 'Mentorship, judging, and prize support for builders.' },
  { icon: Users, title: 'Community Engagement', desc: 'Meetups, AMAs, and campus chapters across Ghana.' },
  { icon: MessageSquare, title: 'Blockchain Education', desc: 'Intro to crypto, wallets, safety, and on-chain UX.' },
  { icon: Wrench, title: 'Startup Enablement', desc: 'Guidance from idea to MVP and ecosystem partnerships.' },
]

export default function Services() {
  return (
    <div>
      <div className="bg-gradient-to-b from-sky-50 to-white py-16 dark:from-slate-900 dark:to-slate-950">
        <Section title="Services" subtitle="What we offer">
          <p className="max-w-3xl text-lg text-slate-600 dark:text-slate-300">We provide programs that empower developers and communities to build with Sui — from zero to launch.</p>
        </Section>
      </div>

      <Section className="py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-sky-500/20 bg-white/60 p-6 shadow-sm backdrop-blur dark:bg-slate-900/60">
              <Icon className="h-6 w-6 text-sky-600 dark:text-sky-300" />
              <h3 className="mt-3 text-lg font-semibold text-slate-900 dark:text-white">{title}</h3>
              <p className="mt-2 text-slate-600 dark:text-slate-300">{desc}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  )
}
