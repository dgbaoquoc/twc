import Image from "next/image";
import { StarIcon } from "@/components/icons";
import { useTranslations } from "next-intl";

type Project = {
  headline: string;
  subHead: string;
  subText: string;
  image: string;
};

export default function Projects() {
  const t = useTranslations("Home.Projects");
  const projects: Project[] = [
    {
      headline: t("p1.headline"),
      subHead: t("p1.subHead"),
      subText: t("p1.subText"),
      image: "/assets/images/projects/twc.webp",
    },
    {
      headline: t("p2.headline"),
      subHead: t("p2.subHead"),
      subText: t("p2.subText"),
      image: "/assets/images/projects/M8.webp",
    },
    {
      headline: t("p3.headline"),
      subHead: t("p3.subHead"),
      subText: t("p3.subText"),
      image: "/assets/images/projects/TP.webp",
    },
    {
      headline: t("p4.headline"),
      subHead: t("p4.subHead"),
      subText: t("p4.subText"),
      image: "/assets/images/projects/phong_kham.webp",
    },
  ];

  return (
    <section className="section dark-bg aximo-section-padding">
      <div className="container">
        <div className="aximo-section-title center light">
          <h2>
            {t("headline")}
            <span className="aximo-title-animation">
              {t("headline2")}
              <StarIcon className="ml-2 size-8" />
            </span>
          </h2>
        </div>
      </div>
      <div className="swiper aximo-project-slider">
        <div className="swiper-wrapper">
          {projects.map((project, index) => (
            <div className="swiper-slide" key={index}>
              <div className="aximo-project-thumb">
                <Image
                  src={project.image}
                  width={1032}
                  height={780}
                  alt={project.headline}
                />
                <div className="aximo-project-wrap">
                  <div className="aximo-project-data">
                    <a href="single-portfolio.html">
                      <h3 className="mb-0">{project.headline}</h3>
                    </a>
                    <p className="p-0">{project.subHead}</p>
                    <p className="line-clamp-2">{project.subText}</p>
                  </div>
                  <a
                    className="aximo-project-icon"
                    href="single-portfolio.html"
                  >
                    <svg
                      width="34"
                      height="28"
                      viewBox="0 0 34 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.9795 2C19.9795 2 20.5 8 25.9795 11.2C28.4887 12.6653 31.9795 14 31.9795 14M31.9795 14H2M31.9795 14C31.9795 14 28.5339 15.415 25.9795 16.8C19.9795 20.0533 19.9795 26 19.9795 26"
                        stroke="#FDFDE1"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </section>
  );
}
