import "./test.css";
import Image from "next/image";
import Teams from "./_components/teams";
import { BikiniCatSVG, EyeSVG, SolutionSVG } from "@/components/icons";
import React from "react";
import InstagramPosts from "./_components/instagram-posts";

export default function Home() {
  return (
    <main>
      <section className="flex justify-center">
        <Image src="/logo.png" alt="TWC Logo" width={170} height={170} />
      </section>

      <section className="py-2 overflow-hidden bg-black">
        <div className="w-full inline-flex flex-nowrap">
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <li key={i}>
                  <h3 className="text-[35px] tracking-tighter whitespace-nowrap px-6 font-gta font-semibold italic uppercase text-white">
                    A WALKING BILLBOARD
                  </h3>
                </li>
              ))}
          </ul>
        </div>
      </section>

      <section className="relative grid lg:grid-cols-2 place-items-center gap-10 py-10 lg:py-[120px]">
        <div className="space-y-2 relative">
          <h1 className="font-gta font-bold text-[50px] lg:text-[100px]">
            MEDIA
          </h1>
          <EyeSVG className="absolute -top-8 right-[2.5rem] lg:right-[6.5rem]" />
          <SolutionSVG className="mx-auto" />
        </div>
        <div className="space-y-2 relative">
          <h1 className="font-gta font-bold text-[50px] lg:text-[100px]">
            MARKETING
          </h1>
          <BikiniCatSVG className="absolute -bottom-4 -right-10" />
          <SolutionSVG className="mx-auto" />
        </div>
      </section>

      {/* <Projects /> */}
      <div
        style={{
          marginLeft: "calc(50% - 50vw) !important",
          marginRight: "calc(50% - 50vw) !important",
          maxWidth: "1000% !important",
          width: "100vw !important",
        }}
      >
        <div
          style={
            {
              // maxWidth: "1320px",
              // paddingLeft: "60px",
              // paddingRight: "60px",
            }
          }
        >
          <div
            className="light-section"
            style={{
              paddingBottom: "8vw",
              marginLeft: "calc(50% - 50vw) !important",
              marginRight: "calc(50% - 50vw) !important",
              maxWidth: "1000% !important",
              width: "100vw !important",
            }}
          >
            <div id="itemsWrapperLinks">
              <div
                id="itemsWrapper"
                className="webgl-fitthumbs fx-three"
                style={{ zIndex: 0 }}
              >
                {/* Portfolio Wrap */}
                <div className="portfolio-wrap flex-grid content-full-width fade-scaleout-effect">
                  {/* Portfolio Columns */}
                  <div className="portfolio">
                    {Array(3)
                      .fill(0)
                      .map((_, i) => (
                        <div
                          className="item wide trigger-item branding design active"
                          key={i}
                        >
                          <div className="item-parallax">
                            <div className="item-appear">
                              <div className="item-content">
                                <a
                                  className="item-wrap ajax-link-project"
                                  data-type="page-transition"
                                  href="project01.html"
                                />
                                <div className="item-wrap-image">
                                  <img
                                    src="/assets/images/projects/twc.webp"
                                    className="item-image grid__item-img trigger-item-link"
                                    alt=""
                                    style={{ opacity: 1 }}
                                  />
                                </div>
                                <img
                                  className="grid__item-img grid__item-img--large"
                                  src="/assets/images/projects/twc.webp"
                                  alt=""
                                />
                              </div>
                            </div>
                            <div className="item-caption-wrapper">
                              <div className="item-caption">
                                <div className="item-title">
                                  <span>London Royal Theatre</span>
                                </div>
                                <div className="item-cat">
                                  <span data-hover="View Case">
                                    Brand Identity
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                  {/*/Portfolio */}
                </div>
                {/*/Portfolio Wrap */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="relative aspect-[3/1] mx-auto w-[90%]">
        <Teams />
        <div className="z-10 absolute top-[25%] left-[60%]">
          <p className="text-balance text-white max-w-[300px] font-semibold">
            We are designated to export Viet culture across the globe and help
            international play a part in.
            <br />
            <br />
            Mr. Tran Huy Tung
          </p>
        </div>
      </section>

      <section className="mt-10 py-2 overflow-hidden bg-black">
        <div className="w-full inline-flex flex-nowrap">
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
            {Array(3)
              .fill(0)
              .map((_, i) => (
                <React.Fragment key={i}>
                  <li>
                    <h3 className="text-[35px] tracking-tighter whitespace-nowrap px-6 font-epilogue font-light italic text-primary">
                      We have the{" "}
                      <span className="font-bold uppercase">
                        MARKET FOR YOUR BRAND
                      </span>{" "}
                    </h3>
                  </li>
                  <li>
                    <h3 className="text-[35px] tracking-tighter whitespace-nowrap px-6 font-epilogue font-light italic text-primary">
                      Let people{" "}
                      <span className="font-bold uppercase">AWARE OF YOU</span>{" "}
                      every single day
                    </h3>
                  </li>
                </React.Fragment>
              ))}
          </ul>
        </div>
      </section>

      <section id="ig-posts" className="section">
        <InstagramPosts />
      </section>
    </main>
  );
}
