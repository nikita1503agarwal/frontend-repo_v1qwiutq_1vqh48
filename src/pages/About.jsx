import Section from '../components/Section'

export default function About() {
  return (
    <div>
      <div className="bg-gradient-to-b from-sky-50 to-white py-16 dark:from-slate-900 dark:to-slate-950">
        <Section title="About SUI Ghana" subtitle="Who we are">
          <p className="max-w-3xl text-lg text-slate-600 dark:text-slate-300">SUI Ghana is a developer-first community advancing blockchain innovation with the Sui network. We host educational programs, support hackathons, and connect talent to real opportunities.</p>
        </Section>
      </div>

      <Section title="Mission & Vision" className="py-16">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-sky-500/20 bg-white/60 p-6 backdrop-blur dark:bg-slate-900/60">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Mission</h3>
            <p className="mt-2 text-slate-600 dark:text-slate-300">Empower builders in Ghana with world-class blockchain education, tools, and community support to create impactful products on Sui.</p>
          </div>
          <div className="rounded-xl border border-sky-500/20 bg-white/60 p-6 backdrop-blur dark:bg-slate-900/60">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Vision</h3>
            <p className="mt-2 text-slate-600 dark:text-slate-300">A thriving, inclusive ecosystem where Ghanaian developers lead in Web3 innovation across Africa and beyond.</p>
          </div>
        </div>
      </Section>

      <Section title="Team" className="py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1,2,3,4,5,6].map((i) => (
            <div key={i} className="rounded-xl border border-sky-500/20 bg-white/60 p-6 text-center backdrop-blur dark:bg-slate-900/60">
              <div className="mx-auto h-20 w-20 rounded-full bg-gradient-to-br from-sky-400 to-sky-600 shadow" />
              <h4 className="mt-4 font-semibold text-slate-900 dark:text-white">Member {i}</h4>
              <p className="text-sm text-slate-600 dark:text-slate-300">Role</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Sui Ecosystem" className="py-16">
        <p className="max-w-4xl text-slate-600 dark:text-slate-300">Sui is a high-performance Layer 1 blockchain designed for instant settlement and rich on-chain assets. With Move-based smart contracts and strong developer tooling, Sui unlocks new UX patterns for games, payments, and digital experiences.</p>
      </Section>
    </div>
  )
}
