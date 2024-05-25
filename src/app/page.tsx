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
        <Logo className="animate-rotate-x size-[170px] lg:size-[240px]" />
      </section>

      <section className="py-2 overflow-hidden bg-black space-x-16">
        <ul
          className="flex items-center justify-center md:justify-start [&_li]:mx-8 gap-x-32  
          animate-infinite-scroll-10"
        >
          {Array(20)
            .fill(0)
            .map((_, i) => (
              <li
                key={i}
                className="text-[35px] tracking-tighter whitespace-nowrap px-6 font-gta font-semibold italic uppercase text-white"
              >
                A WALKING BILLBOARD
              </li>
            ))}
        </ul>
      </section>

      <section className="relative grid lg:grid-cols-2 place-items-center py-10 gap-y-10 lg:py-[120px]">
        <div className="space-y-2 relative hover:scale-125 transition">
          <h1 className="font-gta font-bold text-[50px]">MEDIA</h1>
          <EyeSVG className="absolute -top-4 right-[20%]" />
          <SolutionSVG className="mx-auto" />
        </div>
        <div className="space-y-2 relative hover:scale-125 transition">
          <h1 className="font-gta font-bold text-[50px]">MARKETING</h1>
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
              <div className="portfolio-wrap flex-grid content-full-width fade-scaleout-effect">
                {/* Portfolio Columns */}
                <div className="portfolio">
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
                              <h3 className="font-gta font-bold text-lg">
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

      <section className="relative aspect-[0.6] lg:aspect-[6] flex-grid animate-fade-up">
        <Teams />
        <div className="z-10 absolute bottom-[8%] left-[24%] lg:top-[25%] lg:left-[67%]">
          <p
            className="max-w-[369px] text-[16px] lg:text-[20px] text-balance text-white"
            style={{
              fontFamily: "Epilogue",
              fontWeight: 700,
            }}
          >
            We are designated to export Viet culture across the globe and help
            international play a part in.
            <br />
            <span className="font-normal">Mr. Tran Huy Tung</span>
          </p>
        </div>
      </section>

      <section className="mt-10 py-2 overflow-hidden bg-black">
        <div className="w-full inline-flex flex-nowrap">
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 gap-x-32 animate-infinite-scroll-20">
            {Array(20)
              .fill(0)
              .map((_, i) => (
                <li
                  key={i}
                  className="text-[35px] tracking-tighter whitespace-nowrap px-6 font-light italic text-white"
                  style={{
                    fontFamily: "Epilogue",
                  }}
                >
                  We have the{" "}
                  <span className="font-bold uppercase">
                    MARKET FOR YOUR BRAND
                  </span>{" "}
                  <span className="ml-20">
                    Let people{" "}
                    <span className="font-bold uppercase">AWARE OF YOU</span>{" "}
                    every single day
                  </span>
                </li>
              ))}
          </ul>
        </div>
      </section>

      <section id="ig-posts" className="mb-10">
        <InstagramPosts />
      </section>

      <section id="contact-form">
        <div className="container relative max-w-screen-lg py-10 flex flex-col gap-y-10">
          <Image
            src="/assets/images/vietnam.png"
            alt="Vietnam map"
            fill
            className="object-contain -z-10"
            unoptimized
          />
          <div>
            <h3 className="uppercase text-[24px]">
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
