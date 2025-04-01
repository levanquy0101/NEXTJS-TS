import { t } from "@/lang";
import { LangChange } from "@/lang/LangChange";

export default function Home() {
  return (
    <main>
      <div>
        <h1>{t("welcomeMessage")}</h1>
        <button>{t("logoutButton")}</button>
        <LangChange />
      </div>
    </main>
  );
}
