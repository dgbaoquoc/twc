import "./test.css";
import Image from "next/image";
import Teams from "./_components/teams";
import { BikiniCatSVG, EyeSVG, SolutionSVG } from "@/components/icons";
import React from "react";
import InstagramPosts from "./_components/instagram-posts";
import { Logo } from "@/components/logo";
import ContactForm from "@/components/contact-form";

const projects = [
  {
    title: "M8 Stimulator",
    image: "/assets/images/projects/project-1.webp",
  },
  {
    title: "Visa Flash 2in1",
    image: "/assets/images/projects/project-2.webp",
  },
  {
    title: "Nature Therapy",
    image: "/assets/images/projects/project-3.webp",
  },
];

export default function Home() {
  return (
    <main>
      <section className="flex justify-center">
        <Logo className="size-[170px] animate-rotate-x lg:size-[240px]" />
      </section>

      <section className="space-x-16 overflow-hidden bg-black py-2">
        <ul
          className="flex animate-infinite-scroll-10 items-center justify-center gap-x-32 md:justify-start  
          [&_li]:mx-8"
        >
          {Array(20)
            .fill(0)
            .map((_, i) => (
              <li
                key={i}
                className="whitespace-nowrap px-6 font-gta text-[35px] font-semibold uppercase italic tracking-tighter text-white"
              >
                A WALKING BILLBOARD
              </li>
            ))}
        </ul>
      </section>

      <section className="relative grid place-items-center gap-y-10 py-10 lg:grid-cols-2 lg:py-[120px]">
        <div className="relative space-y-2 transition hover:scale-110 lg:hover:scale-125">
          <h1 className="font-gta text-[35px]  font-bold lg:text-[50px]">
            MEDIA
          </h1>
          <EyeSVG className="absolute -top-4 right-[20%]" />
          <SolutionSVG className="mx-auto" />
        </div>
        <div className="relative space-y-2 transition hover:scale-110 lg:hover:scale-125">
          <h1 className="font-gta text-[35px]  font-bold lg:text-[50px]">
            MARKETING
          </h1>
          <BikiniCatSVG className="absolute -bottom-4 -right-10" />
          <SolutionSVG className="mx-auto" />
        </div>
      </section>

      <section
        style={{
          marginLeft: "calc(50% - 50vw) !important",
          marginRight: "calc(50% - 50vw) !important",
          maxWidth: "1000% !important",
          width: "100vw !important",
        }}
      >
        <div
          className="light-section relative"
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
              <div className="portfolio-wrap flex-grid content-full-width fade-scaleout-effect px-10 pr-0">
                {/* Portfolio Columns */}
                <div className="portfolio justify-around">
                  {projects.map((project, i) => (
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
                                src={project.image}
                                className="item-image grid__item-img trigger-item-link"
                                alt={project.title}
                                style={{ opacity: 1 }}
                              />
                            </div>
                            <img
                              className="grid__item-img grid__item-img--large"
                              src={project.image}
                              alt={project.title}
                            />
                          </div>
                        </div>
                        <div className="item-caption-wrapper">
                          <div className="item-caption">
                            <div className="item-title">
                              <h3 className="font-gta text-lg font-bold">
                                {project.title}
                              </h3>
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
      </section>

      <section className="flex-grid relative aspect-[0.8] max-h-[80vh] animate-fade-up px-10 lg:aspect-[4]">
        <Teams />
        <div className="absolute bottom-[2rem] left-[1/2] translate-x-1/4 transform lg:right-1/4 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-1/4">
          <p
            className="max-w-[369px] text-balance text-white lg:text-[24px]"
            style={{
              fontFamily: "Epilogue",
              fontWeight: 700,
            }}
          >
            We are designated to export Viet culture across the globe and help
            international play a part in.
            <span
              style={{
                marginTop: "1rem",
                display: "block",
                fontFamily: "Epilogue",
                fontWeight: 300,
              }}
            >
              Mr. Tran Huy Tung
            </span>
          </p>
        </div>
      </section>

      <section className="mt-10 overflow-hidden bg-black py-2">
        <div className="inline-flex w-full flex-nowrap">
          <ul className="flex animate-infinite-scroll-20 items-center justify-center gap-x-32 md:justify-start [&_li]:mx-8">
            {Array(10)
              .fill(0)
              .map((_, i) => (
                <React.Fragment key={i}>
                  <li
                    className="whitespace-nowrap px-6 text-[35px] font-light italic tracking-tighter text-white"
                    style={{
                      fontFamily: "Epilogue",
                    }}
                  >
                    We have the{" "}
                    <span className="font-bold uppercase">
                      MARKET FOR YOUR BRAND
                    </span>{" "}
                  </li>
                  <li
                    className="whitespace-nowrap px-6 text-[35px] font-light italic tracking-tighter text-white"
                    style={{
                      fontFamily: "Epilogue",
                    }}
                  >
                    <span className="">
                      Let people{" "}
                      <span className="font-bold uppercase">AWARE OF YOU</span>{" "}
                      every single day
                    </span>
                  </li>
                </React.Fragment>
              ))}
          </ul>
        </div>
      </section>

      <section id="ig-posts" className="mb-10">
        <InstagramPosts />
      </section>

      <section id="contact-form">
        <div className="relative mx-auto flex max-w-screen-xl flex-col gap-y-10 py-10">
          <Image
            src="/assets/images/vietnam.png"
            alt="Vietnam map"
            fill
            className="-z-10 m-auto !h-[90%] object-contain opacity-80"
            unoptimized
          />
          <div>
            <h3 className="text-[24px] uppercase">
              Let&apos;s conquer
              <br />
              <span
                style={{
                  fontFamily: "Epilogue",
                  fontWeight: 800,
                }}
              >
                Vietnam market <br /> together
              </span>
            </h3>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
