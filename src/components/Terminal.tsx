import { useEffect, useRef, useState } from "react"
import { useTranslation } from "react-i18next"
import { useLang } from "../hooks/useLang"
import { profile, skills } from "../data/content"

type Line = { cmd: string; output: string[] }

export default function Terminal() {
  const { t } = useTranslation()
  const { pick } = useLang()
  const [history, setHistory] = useState<Line[]>([])
  const [input, setInput] = useState("")
  const endRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({ block: "end" })
  }, [history])

  const commands: Record<string, () => string[]> = {
    help: () => [t("terminal.help")],
    whoami: () => [`${profile.name} — ${pick(profile.role)}`],
    skills: () => skills.map((g) => `${pick(g.category)}: ${g.items.join(", ")}`),
    contact: () => [`Email: ${profile.contact.email}`, `LinkedIn: ${profile.contact.linkedin}`],
    "sudo hire julius": () => [t("terminal.easterEgg")],
  }

  const run = (raw: string) => {
    const cmd = raw.trim()
    if (!cmd) return
    if (cmd.toLowerCase() === "clear") {
      setHistory([])
      setInput("")
      return
    }
    const handler = commands[cmd.toLowerCase()]
    const output = handler ? handler() : [t("terminal.notFound", { cmd })]
    setHistory((h) => [...h, { cmd, output }])
    setInput("")
  }

  return (
    <div
      onClick={() => inputRef.current?.focus()}
      className="glass rounded-2xl overflow-hidden font-mono text-xs md:text-sm cursor-text"
    >
      <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-white/10">
        <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
        <span className="ml-3 text-muted text-[11px]">julius@portafolio</span>
      </div>

      <div className="p-4 max-h-56 overflow-y-auto space-y-2">
        <p className="text-muted">{t("terminal.welcome")}</p>
        {history.map((line, i) => (
          <div key={i}>
            <p className="text-accent">
              <span className="text-muted">$</span> {line.cmd}
            </p>
            {line.output.map((o, j) => (
              <p key={j} className="text-text/85 whitespace-pre-wrap">
                {o}
              </p>
            ))}
          </div>
        ))}
        <div ref={endRef} />
      </div>

      <div className="flex items-center gap-2 px-4 py-3 border-t border-white/10">
        <span className="text-accent">$</span>
        <input
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && run(input)}
          placeholder={t("terminal.prompt")}
          spellCheck={false}
          autoComplete="off"
          className="flex-1 bg-transparent outline-none text-text placeholder:text-muted/60"
        />
      </div>
    </div>
  )
}
