import Hero from "./_components/hero";
import Processes from "./_components/processes";
import Projects from "./_components/projects";
import Teams from "./_components/teams";
import Testimonials from "./_components/testimonials";
import Values from "./_components/values";
import ValuesWithNumbers from "./_components/values-with-numbers";

export default function Home() {
  return (
    <main>
      <Hero />
      <Values />
      <ValuesWithNumbers />
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
                    <h3>Let&apos;s create new experiences</h3>
                    <img src="assets/images/v1/star3.png" alt="" />
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
