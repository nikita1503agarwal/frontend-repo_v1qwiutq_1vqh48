export default function Footer() {
  return (
    <footer className="mt-24 border-t border-sky-900/10 bg-white/60 py-10 text-sm text-slate-600 backdrop-blur dark:border-sky-300/10 dark:bg-slate-900/60 dark:text-slate-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-base font-semibold text-slate-900 dark:text-white">SUI Ghana</h3>
            <p className="mt-2 max-w-sm text-slate-600 dark:text-slate-300">A Ghana-based community empowering developers and innovators on the Sui blockchain through education, events, and collaboration.</p>
          </div>
          <div>
            <h4 className="font-medium text-slate-900 dark:text-white">Follow</h4>
            <ul className="mt-2 space-y-1">
              <li><a className="hover:text-sky-600" href="#" target="_blank">Discord</a></li>
              <li><a className="hover:text-sky-600" href="#" target="_blank">X / Twitter</a></li>
              <li><a className="hover:text-sky-600" href="#" target="_blank">Telegram</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-slate-900 dark:text-white">Contact</h4>
            <p className="mt-2">info@suighana.org</p>
            <p className="">Accra, Ghana</p>
          </div>
        </div>
        <div className="mt-8 flex items-center justify-between">
          <p className="text-xs">© {new Date().getFullYear()} SUI Ghana. All rights reserved.</p>
          <a href="#" className="text-xs hover:text-sky-600">Privacy</a>
        </div>
      </div>
    </footer>
  )
}
