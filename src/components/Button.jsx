export default function Button({ as: Component = 'a', href = '#', children, variant = 'primary', className = '', ...props }) {
  const base = 'inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-slate-900';
  const variants = {
    primary: 'bg-sky-600 text-white hover:bg-sky-500 focus:ring-sky-400',
    outline: 'border border-sky-500 text-sky-600 hover:bg-sky-50 dark:border-sky-400 dark:text-sky-300 dark:hover:bg-slate-800',
    ghost: 'text-slate-700 hover:text-sky-600 dark:text-slate-200 dark:hover:text-sky-300'
  }
  const Comp = Component
  return (
    <Comp href={href} className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </Comp>
  )
}
