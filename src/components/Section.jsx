export default function Section({ id, title, subtitle, children, className = '' }) {
  return (
    <section id={id} className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>
      {(title || subtitle) && (
        <div className="mb-8">
          {subtitle && <p className="text-sm uppercase tracking-wider text-sky-600 dark:text-sky-300">{subtitle}</p>}
          {title && <h2 className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white sm:text-3xl">{title}</h2>}
        </div>
      )}
      {children}
    </section>
  )
}
