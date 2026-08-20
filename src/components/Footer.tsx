import { useTranslation } from "react-i18next"
import { profile } from "../data/content"

export default function Footer() {
  const { t } = useTranslation()
  return (
    <footer className="text-center text-xs text-muted py-8 border-t border-white/5">
      © {new Date().getFullYear()} {profile.name} — {t("footer.rights")}
    </footer>
  )
}
