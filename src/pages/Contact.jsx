import Section from '../components/Section'

export default function Contact() {
  return (
    <div>
      <div className="bg-gradient-to-b from-sky-50 to-white py-16 dark:from-slate-900 dark:to-slate-950">
        <Section title="Contact" subtitle="Get in touch">
          <p className="max-w-3xl text-lg text-slate-600 dark:text-slate-300">Questions, partnerships, or collaboration? We’d love to hear from you.</p>
        </Section>
      </div>

      <Section className="py-16">
        <div className="grid gap-10 md:grid-cols-2">
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4 rounded-2xl border border-sky-500/20 bg-white/60 p-6 shadow-sm backdrop-blur dark:bg-slate-900/60">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">Name</label>
              <input required className="mt-1 w-full rounded-md border border-slate-300 bg-white/80 px-3 py-2 text-sm outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-200 dark:border-slate-700 dark:bg-slate-800/80" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">Email</label>
              <input type="email" required className="mt-1 w-full rounded-md border border-slate-300 bg-white/80 px-3 py-2 text-sm outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-200 dark:border-slate-700 dark:bg-slate-800/80" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">Message</label>
              <textarea rows="5" required className="mt-1 w-full rounded-md border border-slate-300 bg-white/80 px-3 py-2 text-sm outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-200 dark:border-slate-700 dark:bg-slate-800/80" />
            </div>
            <button className="w-full rounded-md bg-sky-600 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-500">Send</button>
            <p className="text-xs text-slate-500">This is a demo form. Connect to your email service to enable submissions.</p>
          </form>

          <div className="space-y-6">
            <div className="rounded-2xl border border-sky-500/20 bg-white/60 p-6 backdrop-blur dark:bg-slate-900/60">
              <h3 className="font-semibold text-slate-900 dark:text-white">Email</h3>
              <p className="text-slate-600 dark:text-slate-300">info@suighana.org</p>
            </div>
            <div className="rounded-2xl border border-sky-500/20 bg-white/60 p-6 backdrop-blur dark:bg-slate-900/60">
              <h3 className="font-semibold text-slate-900 dark:text-white">Community</h3>
              <div className="mt-2 flex flex-wrap gap-3 text-sm">
                <a className="rounded-md border border-sky-500/30 px-3 py-2 hover:bg-sky-50 dark:hover:bg-slate-800" href="#" target="_blank">Discord</a>
                <a className="rounded-md border border-sky-500/30 px-3 py-2 hover:bg-sky-50 dark:hover:bg-slate-800" href="#" target="_blank">X / Twitter</a>
                <a className="rounded-md border border-sky-500/30 px-3 py-2 hover:bg-sky-50 dark:hover:bg-slate-800" href="#" target="_blank">Telegram</a>
                <a className="rounded-md border border-green-500/30 px-3 py-2 hover:bg-green-50 dark:hover:bg-slate-800" href="#" target="_blank">WhatsApp</a>
              </div>
            </div>
            <div className="rounded-2xl border border-sky-500/20 bg-white/60 p-6 backdrop-blur dark:bg-slate-900/60">
              <h3 className="font-semibold text-slate-900 dark:text-white">Location</h3>
              <p className="text-slate-600 dark:text-slate-300">Accra, Ghana</p>
              <div className="mt-3 aspect-[16/9] w-full rounded-lg bg-slate-200 dark:bg-slate-800" />
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}
