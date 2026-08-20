import { useTranslation } from "react-i18next"
import type { Bilingual } from "../data/content"

// Lee campos bilingües de src/data/content.ts según el idioma activo.
export function useLang() {
  const { i18n } = useTranslation()
  const lang = i18n.language === "en" ? "en" : "es"

  const pick = (field: Bilingual) => field[lang]

  return { lang, pick, i18n }
}
