import { StarIcon } from "@/components/icons";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const t = useTranslations("Home.Hero");
  return (
    <section className="aximo-hero-section dark-bg">
      <div className="container position-relative">
        <div className="row">
          <div className="col-lg-8">
            <div className="aximo-hero-content">
              <h1>
                <span className="aximo-title-animation">
                  {t("title")} <StarIcon className="size-10" />
                </span>
                {t("title2")}
              </h1>
              <p>{t("description")}</p>
              <div className="aximo-hero-user-wrap">
                <div className="aximo-hero-user-thumb">
                  <div
                    className="aximo-hero-user-thumb-item wow fadeInUpX"
                    data-wow-delay="0s"
                  >
                    <Image
                      src="/assets/images/customers/tp_60.webp"
                      width={60}
                      height={60}
                      alt="TPBank"
                    />
                  </div>
                  <div
                    className="aximo-hero-user-thumb-item wow fadeInUpX"
                    data-wow-delay="0.25s"
                  >
                    <Image
                      src="/assets/images/customers/yte_60.webp"
                      width={60}
                      height={60}
                      alt="Y tế"
                    />
                  </div>
                  <div
                    className="aximo-hero-user-thumb-item wow fadeInUpX"
                    data-wow-delay="0.4s"
                  >
                    <Image
                      src="/assets/images/customers/bvtc_60.webp"
                      width={60}
                      height={60}
                      alt="Bệnh viện trâm cứu"
                    />
                  </div>
                </div>
                <div className="aximo-hero-user-data">
                  <p>Believed by more than a thousand people</p>
                </div>
              </div>
              <Link href="#contact">
                <button className="aximo-call-btn">
                  Book a call <i className="icon-call"></i>
                </button>
              </Link>
              <div className="aximo-hero-shape">
                <img src="assets/images/icon/arrow-hero.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="wow fadeInRight" data-wow-delay="0s">
              <AspectRatio ratio={1 / 1}>
                <Image
                  priority
                  src="/assets/images/sticker/sticker-1080.png"
                  fill
                  alt="TWC sticker"
                  sizes="(max-width: 576px): 100vw, 50vw"
                />
              </AspectRatio>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
