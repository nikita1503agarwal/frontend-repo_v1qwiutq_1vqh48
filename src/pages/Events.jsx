import { useMemo, useState } from 'react'
import Section from '../components/Section'

// Simple interactive calendar (client-only)
function Calendar({ events, onSelectDate, selected }) {
  const today = new Date()
  const [monthOffset, setMonthOffset] = useState(0)

  const { year, month, days, firstDay } = useMemo(() => {
    const d = new Date(today.getFullYear(), today.getMonth() + monthOffset, 1)
    const y = d.getFullYear()
    const m = d.getMonth()
    const first = new Date(y, m, 1).getDay()
    const count = new Date(y, m + 1, 0).getDate()
    return { year: y, month: m, days: count, firstDay: first }
  }, [monthOffset])

  const monthName = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(new Date(year, month, 1))

  const isSameDay = (a, b) => a && b && a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate()

  const eventDates = new Set(events.map(e => new Date(e.date).toDateString()))

  return (
    <div className="rounded-2xl border border-sky-500/20 bg-white/60 p-4 backdrop-blur dark:bg-slate-900/60">
      <div className="mb-3 flex items-center justify-between">
        <button className="rounded-md px-2 py-1 text-slate-700 hover:text-sky-600 dark:text-slate-200 dark:hover:text-sky-300" onClick={() => setMonthOffset(m => m - 1)}>&larr;</button>
        <div className="text-sm font-semibold text-slate-900 dark:text-white">{monthName} {year}</div>
        <button className="rounded-md px-2 py-1 text-slate-700 hover:text-sky-600 dark:text-slate-200 dark:hover:text-sky-300" onClick={() => setMonthOffset(m => m + 1)}>&rarr;</button>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center text-xs text-slate-500 dark:text-slate-400">
        {['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map(d => <div key={d} className="py-1">{d}</div>)}
      </div>
      <div className="mt-1 grid grid-cols-7 gap-1">
        {Array.from({ length: firstDay }).map((_, i) => <div key={`e-${i}`} />)}
        {Array.from({ length: days }).map((_, i) => {
          const date = new Date(year, month, i + 1)
          const hasEvent = eventDates.has(date.toDateString())
          const isSelected = isSameDay(selected, date)
          return (
            <button
              key={i}
              onClick={() => onSelectDate(date)}
              className={`rounded-md p-2 text-sm transition hover:bg-sky-100 dark:hover:bg-slate-800 ${
                isSelected ? 'bg-sky-500/20 ring-1 ring-sky-500 text-sky-700 dark:text-sky-300' : hasEvent ? 'text-slate-900 dark:text-white' : 'text-slate-600 dark:text-slate-300'
              }`}
            >
              <div>{i + 1}</div>
              {hasEvent && <div className="mx-auto mt-1 h-1 w-1 rounded-full bg-sky-500" />}
            </button>
          )
        })}
      </div>
    </div>
  )
}

const sampleEvents = [
  { id: 1, title: 'Builders Meetup – Accra', date: '2025-01-18', time: '10:00 AM', location: 'Impact Hub Accra', desc: 'Hands-on talks and demos on Sui dev tooling.' },
  { id: 2, title: 'Campus Workshop – KNUST', date: '2025-01-25', time: '1:00 PM', location: 'Kumasi', desc: 'Intro to Move and building on Sui.' },
  { id: 3, title: 'SUI Ghana Hack Night', date: '2025-02-05', time: '6:00 PM', location: 'Accra', desc: 'Rapid prototyping and mentorship for teams.' },
]

export default function Events() {
  const [selectedDate, setSelectedDate] = useState(null)

  const filtered = selectedDate
    ? sampleEvents.filter(e => new Date(e.date).toDateString() === selectedDate.toDateString())
    : sampleEvents

  const past = sampleEvents.filter(e => new Date(e.date) < new Date())
  const upcoming = sampleEvents.filter(e => new Date(e.date) >= new Date())

  return (
    <div>
      <div className="bg-gradient-to-b from-sky-50 to-white py-16 dark:from-slate-900 dark:to-slate-950">
        <Section title="Events" subtitle="Calendar & activities">
          <p className="max-w-3xl text-lg text-slate-600 dark:text-slate-300">Discover our upcoming meetups, hackathons, and workshops. Select a date to highlight events.</p>
        </Section>
      </div>

      <Section className="py-16">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <Calendar events={sampleEvents} onSelectDate={setSelectedDate} selected={selectedDate} />
          </div>
          <div className="lg:col-span-2">
            <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">{selectedDate ? 'Events on ' + selectedDate.toDateString() : 'Upcoming events'}</h3>
            <div className="grid gap-4">
              {filtered.map((e) => (
                <div key={e.id} className="rounded-xl border border-sky-500/20 bg-white/60 p-5 backdrop-blur dark:bg-slate-900/60">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white">{e.title}</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-300">{e.date} • {e.time} • {e.location}</p>
                    </div>
                    <a href="#" className="rounded-md bg-sky-600 px-3 py-2 text-sm font-semibold text-white hover:bg-sky-500">Add to calendar</a>
                  </div>
                  <p className="mt-2 text-slate-600 dark:text-slate-300">{e.desc}</p>
                </div>
              ))}
              {filtered.length === 0 && (
                <p className="text-slate-600 dark:text-slate-300">No events on this date.</p>
              )}
            </div>

            <h3 className="mt-10 mb-4 text-lg font-semibold text-slate-900 dark:text-white">Past events</h3>
            <div className="grid gap-4">
              {past.length ? past.map((e) => (
                <div key={e.id} className="rounded-xl border border-sky-500/20 bg-white/60 p-5 backdrop-blur dark:bg-slate-900/60 opacity-80">
                  <h4 className="font-semibold text-slate-900 dark:text-white">{e.title}</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{e.date} • {e.location}</p>
                </div>
              )) : <p className="text-slate-600 dark:text-slate-300">No past events yet.</p>}
            </div>
          </div>
        </div>
      </Section>
    </div>
  )}
