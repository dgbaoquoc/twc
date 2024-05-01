import Image from "next/image";
import Projects from "./_components/projects";
import Teams from "./_components/teams";

import Logo from "@/public/assets/images/logo/twc_svgs/logo.svg";
import Marketing from "@/public/assets/images/logo/twc_svgs/marketing_solution.svg";
import Media from "@/public/assets/images/logo/twc_svgs/media_solution.svg";
import InstagramPosts from "./_components/instagram-posts";

export default function Home({
  params: { locale },
}: Readonly<{
  params: { locale: string };
}>) {
  return (
    <main>
      <section className="flex justify-center">
        <Image src={Logo} alt="TWC Logo" width={250} height={250} />
      </section>

      <section className="aximo-auto-slider-section my-6">
        <div className="swiper aximo-auto-slider">
          <div className="swiper-wrapper">
            {Array(6)
              .fill(0)
              .map((_, i) => (
                <div className="swiper-slide" key={i}>
                  <div className="aximo-auto-slider-item">
                    <h3 className="font-gta font-semibold italic uppercase">
                      A Vietnamese Agency
                    </h3>
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

      <section className="section aximo-section-padding grid grid-cols-3 -space-x-16">
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
          className="aspect-square size-full p-16 flex items-center justify-center border rounded-[80px] bg-transparent"
          style={{
            marginLeft: "-116px",
            borderColor: "black!important",
            // filter: "blur(1px)",
          }}
        >
          <p className="text-black font-epilogue italic font-bold">
            We are designated to export Viet culture across the globe and enter
            internationals to Vietnamese market.
            <br />
            <br />
            <span className="font-normal">Mr. Tran Huy Tung</span>
          </p>
        </div>
      </section>

      <Projects />

      <section className="aximo-auto-slider-section mt-6">
        <div className="swiper aximo-auto-slider">
          <div className="swiper-wrapper">
            {Array(4)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="swiper-slide">
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
              ))}
          </div>
        </div>
      </section>

      <section id="ig-posts" className="section">
        <InstagramPosts />
      </section>

      <section className="aximo-auto-slider-section bg-transparent">
        <div className="swiper aximo-auto-slider">
          <div className="swiper-wrapper">
            {Array(6)
              .fill(0)
              .map((_, i) => (
                <div className="swiper-slide" key={i}>
                  <div className="aximo-auto-slider-item">
                    <h3 className="font-fasterOne text-black">WHO’S NEXT?</h3>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}
