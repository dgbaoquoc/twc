import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { socials } from "@/configs/site";
import Image from "next/image";
import Link from "next/link";

import Anh1 from "@/public/assets/images/logo/footers/tp.png";
import Anh2 from "@/public/assets/images/logo/footers/hiphub.png";
import Anh3 from "@/public/assets/images/logo/footers/cham-cuu.png";
import Anh4 from "@/public/assets/images/logo/footers/cham-cuu-2.png";
import Anh5 from "@/public/assets/images/logo/footers/twc-white.png";

export default function SiteFooter() {
  return (
    <footer className="container py-10">
      <section className="grid grid-cols-3">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-y-4 md:flex-row md:gap-x-10">
            <Link
              href="/"
              className="mr-6 font-gta text-xs font-medium uppercase text-black md:text-sm"
            >
              About
            </Link>
            <Link
              href="/"
              className="cursor-not-allowed font-gta text-xs font-medium uppercase text-black md:text-sm"
            >
              Magazine 🔒
            </Link>
          </div>
          <Link
            href="/"
            className="font-gta text-xs font-medium uppercase text-black md:text-sm"
          >
            Contact
          </Link>
        </div>
        <div className="flex justify-center">
          <Image
            unoptimized
            src="/logo.png"
            alt="TWC Logo"
            width={140}
            height={140}
          />
        </div>
        <div className="flex items-start justify-end">
          <Drawer>
            <DrawerTrigger className="font-gta text-xs font-medium uppercase text-black md:text-sm">
              Clients
            </DrawerTrigger>
            <DrawerContent
              shouldDisplayOverlay={false}
              className="bg-black text-white"
            >
              <div className="container p-6">
                <div className="flex flex-col gap-4">
                  <p className="w-full font-epilogue text-xs font-bold md:w-1/3">
                    TWC HAS HAD THE PLEASURE OF WORKING WITH SOME TOP NOTCH
                    BRAND. THE LIKES OF:
                  </p>
                  <div className="grid grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))] place-items-center gap-4">
                    <Image className="shrink-0" src={Anh1} alt="TPBank" />
                    <Image className="shrink-0" src={Anh2} alt="Hiphub" />
                    <Image
                      className="shrink-0"
                      src={Anh3}
                      alt="Benh vien tram cuu"
                    />
                    <Image
                      className="shrink-0"
                      src={Anh4}
                      alt="Benh vien tram cuu 2"
                    />
                    <Image className="shrink-0" src={Anh5} alt="TWC" />
                  </div>
                </div>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </section>

      <section className="mt-10 flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="flex-1 font-gta text-xs font-light md:text-sm">
          © TWC your friendly Vietnamese Agency Since 2022 ✷
        </p>
        <ul className="flex gap-8">
          {socials.map((social, idx) => (
            <li key={idx} className="relative size-[16px] md:size-[24px]">
              <Link href={social.href} target="_blank">
                <Image
                  unoptimized
                  alt={social.alt}
                  fill
                  src={social.src}
                  className="object-cover"
                />
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </footer>
  );
}
