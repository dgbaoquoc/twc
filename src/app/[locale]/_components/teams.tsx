import { useTranslations } from "next-intl";

export default function Teams() {
  const t = useTranslations("Home.Teams");
  return (
    <section className="section aximo-section-padding3">
      <div className="container">
        <div className="aximo-section-title center">
          <h2>
            {t("headline")}
            <span className="aximo-title-animation">
              <span className="aximo-title-icon">
                <img src="assets/images/v1/star2.png" alt="" />
              </span>
            </span>
          </h2>
        </div>
        <div
          className="aximo-team-wrap wow fadeInUpX flex flex-col items-center"
          data-wow-delay="0.1s"
        >
          <div className="aximo-team-thumb w-full h-[240px] md:w-[600px] md:h-[480px]">
            <div className=" flex items-center justify-center">600x480</div>
          </div>
          <div className="aximo-team-data">
            <h3>Mr. Tran Huy Tung</h3>
            <p>CEO</p>
          </div>
        </div>
      </div>
    </section>
  );
}
