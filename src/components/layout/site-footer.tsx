import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { socials } from "@/configs/site";
import Image from "next/image";
import Link from "next/link";

import Anh1 from "@/public/assets/images/logo/footers/1.svg";
import Anh2 from "@/public/assets/images/logo/footers/2.svg";
import Anh3 from "@/public/assets/images/logo/footers/3.svg";
import HipHub from "@/public/assets/images/logo/footers/hiphub.svg";
import { Logo } from "../logo";

export default function SiteFooter() {
  return (
    <footer className="container py-10">
      <section className="grid grid-cols-3">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-y-4 md:flex-row md:gap-x-10">
            <Link
              href="/"
              className="font-gta text-xs md:text-sm font-medium uppercase text-black mr-6"
            >
              About
            </Link>
            <Link
              href="/"
              className="font-gta text-xs md:text-sm font-medium uppercase text-black cursor-not-allowed"
            >
              Magazine 🔒
            </Link>
          </div>
          <Link
            href="/"
            className="font-gta text-xs md:text-sm font-medium uppercase text-black"
          >
            Contact
          </Link>
        </div>
        <div className="flex justify-center">
          <Logo className="-mt-4 size-[140px]" />
        </div>
        <div className="flex items-start justify-end">
          <Drawer>
            <DrawerTrigger className="font-gta text-xs md:text-sm font-medium uppercase text-black">
              Clients
            </DrawerTrigger>
            <DrawerContent
              shouldDisplayOverlay={false}
              className="bg-black text-white"
            >
              <div className="container p-6">
                <div className="flex flex-col gap-4">
                  <p className="w-full md:w-1/3 font-epilogue font-bold text-xs">
                    TWC HAS HAD THE PLEASURE OF WORKING WITH SOME TOP NOTCH
                    BRAND. THE LIKES OF:
                  </p>
                  <div className="grid grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))] gap-4">
                    <Image className="shrink-0" src={Anh1} alt="Anh 1" />
                    <Image className="shrink-0" src={HipHub} alt="Hiphub" />
                    <Image className="shrink-0" src={Anh2} alt="Anh 2" />
                    <Image className="shrink-0" src={Anh3} alt="Anh 3" />
                  </div>
                </div>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </section>

      <section className="flex items-center  flex-col md:flex-row mt-10 justify-between">
        <p className="font-gta text-xs md:text-sm font-light flex-1">
          © TWC your friendly Vietnamese Agency Since 2022 ✷
        </p>
        <ul className="flex gap-8">
          {socials.map((social, idx) => (
            <li key={idx} className="relative size-[16px] md:size-[32px]">
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
