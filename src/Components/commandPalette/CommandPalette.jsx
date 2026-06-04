import React, { useMemo, useState } from 'react'
import { Command, CornerDownLeft, Terminal } from 'lucide-react'
import { usePreferences } from '../../context/PreferencesContext'

const commands = [
  ['open projects', '#services', 'Project modules'],
  ['open case studies', '#case-studies', 'Architecture + impact'],
  ['filter skills', '#experience', 'Filtered capability matrix'],
  ['show github', '#github', 'Code activity dashboard'],
  ['read articles', '#writing', 'Technical writing'],
  ['contact shivankar', '#contact', 'Start a web project']
]

const CommandPalette = () => {
  const { language } = usePreferences()
  const [query, setQuery] = useState('')
  const labels = language === 'ja'
    ? { title: 'Terminal navigation', placeholder: 'type a command...', hint: 'Press a command to jump' }
    : { title: 'Terminal navigation', placeholder: 'type a command...', hint: 'Press a command to jump' }
  const visibleCommands = useMemo(() => {
    const needle = query.trim().toLowerCase()
    return needle ? commands.filter(([command, , note]) => `${command} ${note}`.toLowerCase().includes(needle)) : commands
  }, [query])

  const jumpTo = (target) => {
    document.querySelector(target)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="command-lab" className="command-lab">
      <div className="container command-lab__shell" data-reveal="fade-up">
        <div className="command-lab__head">
          <span><Terminal size={17} aria-hidden="true" /> {labels.title}</span>
          <small>{labels.hint}</small>
        </div>
        <label className="command-lab__input">
          <Command size={16} aria-hidden="true" />
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder={labels.placeholder} />
        </label>
        <div className="command-lab__results">
          {visibleCommands.map(([command, target, note]) => (
            <button type="button" onClick={() => jumpTo(target)} key={command}>
              <code>&gt; {command}</code>
              <span>{note}</span>
              <CornerDownLeft size={14} aria-hidden="true" />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CommandPalette
