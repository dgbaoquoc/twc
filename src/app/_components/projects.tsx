import Image from "next/image";
import Link from "next/link";

type Project = {
  headline: string;
  subHead: string;
  subText: string;
  image: string;
};

export default function Projects() {
  const projects: Project[] = [
    {
      headline: "A WALKING BILLBOARD",
      subHead: "TWC Magazine",
      subText:
        "In the work of building a diversed community to bridge Brands with the up-to-date knowledge in the industry.",
      image: "/assets/images/projects/twc.webp",
    },
    {
      headline: "M8 Stimulator",
      subHead: "National Hospital of Accupunture",
      subText: "We were asked to help them to promote their stimulator device.",
      image: "/assets/images/projects/M8.webp",
    },
    {
      headline: "Visa Flash 2in1",
      subHead: "TP Bank",
      subText:
        "We were asked to help develop and launch a new banking’s card for TP Bank.",
      image: "/assets/images/projects/TP.webp",
    },
    {
      headline: "Nature Therapy",
      subHead: "DT Clinic",
      subText:
        "We helped design and developed a platform that would provide visitors with greater clarity, and educating audience about nature therapy.",
      image: "/assets/images/projects/phong_kham.webp",
    },
  ];

  return (
    <section id="clients" className="section aximo-section-padding">
      <div className="swiper aximo-project-slider">
        <div className="swiper-wrapper">
          {projects.map((project, index) => (
            <div className="swiper-slide" key={index}>
              <div
                className="aximo-project-thumb"
                style={{
                  border: "none!important",
                }}
              >
                <Image
                  src={project.image}
                  width={1032}
                  height={780}
                  alt={project.headline}
                />
                <div className="aximo-project-wrap">
                  <div className="aximo-project-data">
                    <Link href="#">
                      <h3 className="mb-0">{project.headline}</h3>
                    </Link>
                    <p className="p-0">{project.subHead}</p>
                  </div>
                  <Link className="aximo-project-icon" href="#">
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
                  </Link>
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
