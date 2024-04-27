import { StarIcon } from "@/components/icons";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import Image from "next/image";
import Projects from "./_components/projects";
import Teams from "./_components/teams";

import Logo from "@/public/assets/images/logo/twc_svgs/logo.svg";
import Marketing from "@/public/assets/images/logo/twc_svgs/marketing.svg";
import Media from "@/public/assets/images/logo/twc_svgs/media.svg";
import SubHeadline from "@/public/assets/images/logo/twc_svgs/sub_headline.svg";

export default function Home({
  params: { locale },
}: Readonly<{
  params: { locale: string };
}>) {
  unstable_setRequestLocale(locale);

  const t = useTranslations("Home.Banner");
  return (
    <main className="bg-[#FBD616] space-y-4">
      <section className="grid grid-cols-1 md:grid-cols-3">
        <div className="col-span-1 flex justify-center items-center">
          <Image src={Logo} alt="TWC Logo" width={372} height={372} />
        </div>
        <div className="col-span-2">
          <div className="flex flex-col gap-y-4 justify-center items-center">
            <h1
              className="text-black text-4xl lg:text-7xl font-extrabold text-center"
              // font-family GT America LCG
            >
              TWC COMMUNICATION
            </h1>
            <div className="flex justify-center">
              <Image
                src={SubHeadline}
                alt="A Vietnamese marketing agency"
                width={334}
                height={32}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="aximo-auto-slider-section my-4">
        <div className="swiper aximo-auto-slider">
          <div className="swiper-wrapper">
            {Array(6)
              .fill(0)
              .map((_, i) => (
                <div className="swiper-slide" key={i}>
                  <div className="aximo-auto-slider-item">
                    <h3 className="font-bold italic">{t("text")}</h3>
                    <StarIcon className="size-6" />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      <section className="flex flex-col md:flex-row md:items-center w-full gap-4">
        <div className="mx-auto">
          <Image src={Media} alt="Media solution" width={270} height={152} />
        </div>
        <div className="mx-auto">
          <Image
            src={Marketing}
            alt="Marketing solution"
            width={270}
            height={152}
          />
        </div>
      </section>

      <section className="w-[480px] h-[480px] mx-auto">
        <Teams />
      </section>

      <Projects />

      <section className="aximo-auto-slider-section my-4">
        <div className="swiper aximo-auto-slider">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="aximo-auto-slider-item">
                <h3 className="font-bold italic">
                  WE HAVE THE MARKET FOR YOUR BRAND
                </h3>
              </div>
              <div className="aximo-auto-slider-item">
                <h3 className="font-bold italic">YES, TWC KNOWS THE WAY</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-2.5">
        <div></div>
      </section>

      <section className="aximo-auto-slider-section my-4 bg-[#FBD616]">
        <div className="swiper aximo-auto-slider">
          <div className="swiper-wrapper">
            {Array(6)
              .fill(0)
              .map((_, i) => (
                <div className="swiper-slide" key={i}>
                  <div className="aximo-auto-slider-item">
                    <h3 className="font-bold italic text-black">WHO’S NEXT?</h3>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}
