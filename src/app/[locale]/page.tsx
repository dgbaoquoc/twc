import { StarIcon } from "@/components/icons";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import Hero from "./_components/hero";
import Projects from "./_components/projects";
import Teams from "./_components/teams";
import Values from "./_components/values";

export default function Home({
  params: { locale },
}: Readonly<{
  params: { locale: string };
}>) {
  unstable_setRequestLocale(locale);

  const t = useTranslations("Home.Banner");
  return (
    <main>
      <Hero />
      <Values />
      <Projects />
      <section className="aximo-auto-slider-section">
        <div className="swiper aximo-auto-slider">
          <div className="swiper-wrapper">
            {Array(6)
              .fill(0)
              .map((_, i) => (
                <div className="swiper-slide" key={i}>
                  <div className="aximo-auto-slider-item">
                    <h3>{t("text")}</h3>
                    <StarIcon className="size-6" />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
      <Teams />
    </main>
  );
}
