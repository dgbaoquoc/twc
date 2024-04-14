import { useTranslations } from "next-intl";
import Hero from "./_components/hero";
import Processes from "./_components/processes";
import Teams from "./_components/teams";
import Testimonials from "./_components/testimonials";
import Values from "./_components/values";
import { unstable_setRequestLocale } from "next-intl/server";
import Projects from "./_components/projects";
import { StarIcon } from "@/components/icons";

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
      {/* <ValuesWithNumbers /> */}
      <Projects />
      <Processes />
      <Testimonials />
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
