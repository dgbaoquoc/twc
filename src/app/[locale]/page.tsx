import { StarIcon } from "@/components/icons";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import Image from "next/image";
import Projects from "./_components/projects";
import Teams from "./_components/teams";

import Logo from "@/public/assets/images/logo/twc_svgs/logo.svg";
import Marketing from "@/public/assets/images/logo/twc_svgs/marketing_solution.svg";
import Media from "@/public/assets/images/logo/twc_svgs/media_solution.svg";
import SubHeadline from "@/public/assets/images/logo/twc_svgs/sub_headline.svg";

export default function Home({
  params: { locale },
}: Readonly<{
  params: { locale: string };
}>) {
  unstable_setRequestLocale(locale);

  const t = useTranslations("Home.Banner");
  return (
    <main className="space-y-8">
      <section className="grid grid-cols-1 md:grid-cols-3">
        <div className="col-span-1 flex justify-center items-center">
          <Image src={Logo} alt="TWC Logo" width={372} height={372} />
        </div>
        <div className="col-span-2 flex flex-col gap-y-4 justify-center items-center">
          <h1 className="font-gta font-extrabold text-black text-4xl lg:text-7xl text-center">
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
      </section>

      <section className="aximo-auto-slider-section my-6">
        <div className="swiper aximo-auto-slider">
          <div className="swiper-wrapper">
            {Array(6)
              .fill(0)
              .map((_, i) => (
                <div className="swiper-slide" key={i}>
                  <div className="aximo-auto-slider-item">
                    <h3 className="font-gta font-bold italic">{t("text")}</h3>
                    <StarIcon className="size-6" />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      <section className="section flex flex-col md:flex-row md:items-center w-full gap-4">
        <div className="mx-auto">
          <Image src={Media} alt="Media solution" width={270} height={152} />
        </div>
        <div className="mx-auto mt-6">
          <Image
            src={Marketing}
            alt="Marketing solution"
            width={400}
            height={200}
          />
        </div>
      </section>
      <div className="w-2/3 mx-auto h-12 relative">
        <Image src="/assets/images/logo/twc_svgs/line.svg" alt="Line" fill />
      </div>

      <section className="section aximo-section-padding grid grid-cols-3">
        <div className="flex justify-end items-center -mt-16 mr-16">
          <Image
            src="/assets/images/icon/arrow-teams.svg"
            alt="Arrow"
            width={200}
            height={100}
          />
        </div>
        <div className="size-full aspect-square">
          <Teams />
        </div>
        <div
          className="z-10 -ml-16 aspect-square size-full p-16 flex items-center justify-center border rounded-[80px] backdrop-blur-sm"
          style={{
            borderColor: "black!important",
          }}
        >
          “ We are designated to export Viet culture across the globe and enter
          internationals to Vietnamese market. Mr. Tung
        </div>
      </section>

      <Projects />

      <section className="aximo-auto-slider-section my-6">
        <div className="swiper aximo-auto-slider">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="aximo-auto-slider-item">
                <h3 className="font-gta font-bold italic">
                  WE HAVE THE MARKET FOR YOUR BRAND
                </h3>
              </div>
              <div className="aximo-auto-slider-item">
                <h3 className="font-gta font-bold italic">
                  YES, TWC KNOWS THE WAY
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section aximo-section-padding grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-2.5">
        <div>IG posts</div>
      </section>

      <section className="aximo-auto-slider-section my-6 bg-[#FBD616]">
        <div className="swiper aximo-auto-slider">
          <div className="swiper-wrapper">
            {Array(6)
              .fill(0)
              .map((_, i) => (
                <div className="swiper-slide" key={i}>
                  <div className="aximo-auto-slider-item">
                    <h3 className="font-gta font-bold italic">WHO’S NEXT?</h3>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}
