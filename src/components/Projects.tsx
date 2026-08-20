import { useTranslation } from "react-i18next"
import { useLang } from "../hooks/useLang"
import { useRevealOnScroll } from "../hooks/useRevealOnScroll"
import { projects } from "../data/content"

export default function Projects() {
  const { t } = useTranslation()
  const { pick } = useLang()
  const ref = useRevealOnScroll<HTMLDivElement>()

  if (projects.length === 0) return null

  return (
    <section id="projects" className="max-w-3xl mx-auto px-6 py-28 md:py-36">
      <h2 className="font-display font-bold text-2xl md:text-3xl mb-12">
        <span className="text-gradient">04.</span> {t("projects.title")}
      </h2>

      <div ref={ref} className="grid sm:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="glass rounded-2xl overflow-hidden group hover:border-accent/50 border border-transparent transition-colors"
          >
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="block aspect-video overflow-hidden bg-surface">
              <img
                src={`${import.meta.env.BASE_URL}${project.image}`}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </a>
            <div className="p-5">
              <h3 className="font-display font-semibold mb-1">{project.title}</h3>
              <p className="text-muted text-sm mb-3">{pick(project.description)}</p>

              {project.tags && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2.5 py-1 rounded-full border border-white/10 text-muted">
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <div className="flex gap-4 text-sm">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                  {t("projects.live")} ↗
                </a>
                {project.repo && (
                  <a href={project.repo} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent hover:underline transition-colors">
                    {t("projects.code")} ↗
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
