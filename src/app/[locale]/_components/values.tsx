import { StarIcon } from "@/components/icons";
import { useTranslations } from "next-intl";

export default function Values() {
  const t = useTranslations("Home.Values");
  return (
    <section className="section aximo-section-padding4">
      <div className="container">
        <div className="aximo-section-title center">
          <h2>
            {t("headline")}{" "}
            <span className="aximo-title-animation">
              {t("headline2")}
              <StarIcon className="ml-2 size-8" />
            </span>
          </h2>
        </div>
        <div className="aximo-service-wrap">
          <div className="row">
            <div className="col-lg-6">
              <div
                className="aximo-iconbox-wrap wow fadeInUpX"
                data-wow-delay="0.1s"
              >
                <div className="aximo-iconbox-icon">
                  <i className="icon-design-tools"></i>
                </div>
                <div className="aximo-iconbox-data">
                  <h3>{t("value1.title")}</h3>
                  <p className="min-h-[90px] line-clamp-3">
                    {t("value1.description")}
                  </p>
                  <a className="aximo-icon" href="">
                    <img src="assets/images/icon/arrow-right.svg" alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="aximo-iconbox-wrap wow fadeInUpX"
                data-wow-delay="0.2s"
              >
                <div className="aximo-iconbox-icon">
                  <i className="icon-branding"></i>
                </div>
                <div className="aximo-iconbox-data">
                  <h3>{t("value2.title")}</h3>
                  <p className="min-h-[90px] line-clamp-3">
                    {t("value2.description")}
                  </p>
                  <a className="aximo-icon" href="">
                    <img src="assets/images/icon/arrow-right.svg" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
