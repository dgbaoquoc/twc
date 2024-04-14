import { StarIcon } from "@/components/icons";
import { useTranslations } from "next-intl";

export default function Processes() {
  const t = useTranslations("Home.Processes");
  return (
    <section className="section">
      <div className="container">
        <div className="aximo-faq-wrap">
          <div className="row">
            <div className="col-lg-7 d-flex align-items-center">
              <div className="aximo-default-content">
                <h2>
                  <span className="aximo-title-animation">
                    {t("headline")}
                    <StarIcon className="ml-2 size-8" />
                  </span>
                  {t("headline2")}
                </h2>
                <p>{t("description")}</p>
                <p>{t("description2")}</p>
              </div>
            </div>
            <div className="col-lg-5">
              <div
                className="aximo-accordion-wrap wow fadeInUpX"
                data-wow-delay="0s"
                id="aximo-accordion"
              >
                <div className="aximo-accordion-item open">
                  <div className="aximo-accordion-header">
                    <h3>01/ {t("tab1.title")}</h3>
                  </div>
                  <div className="aximo-accordion-body">
                    <p>{t("tab1.description")}</p>
                  </div>
                </div>
                <div className="aximo-accordion-item">
                  <div className="aximo-accordion-header">
                    <h3>02/ {t("tab2.title")}</h3>
                  </div>
                  <div className="aximo-accordion-body">
                    <p>{t("tab2.description")}</p>
                  </div>
                </div>
                <div className="aximo-accordion-item">
                  <div className="aximo-accordion-header">
                    <h3>03/ {t("tab3.title")}</h3>
                  </div>
                  <div className="aximo-accordion-body">
                    <p>{t("tab3.description")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
