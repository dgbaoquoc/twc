import { contacts } from "@/configs/site";
import Logo from "@/public/assets/images/logo/twc_svgs/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";

import TWC from "@/public/assets/images/logo/footers/twc.svg";
import HipHub from "@/public/assets/images/logo/footers/hiphub.svg";
import Anh1 from "@/public/assets/images/logo/footers/1.svg";
import Anh2 from "@/public/assets/images/logo/footers/2.svg";
import Anh3 from "@/public/assets/images/logo/footers/3.svg";

export default function SiteFooter() {
  return (
    <footer className="container py-10">
      <section className="grid grid-cols-3">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-y-4 md:flex-row justify-between">
            <Link
              href="/"
              className="font-gta text-xs md:text-sm font-medium uppercase text-black"
            >
              About
            </Link>
            <Link
              href="/"
              className="font-gta text-xs md:text-sm font-medium uppercase text-black"
            >
              Magazine
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
          <Image src={Logo} alt="TWC Logo" width={140} height={140} />
        </div>
        <div className="flex items-start justify-end">
          <Drawer>
            <DrawerTrigger className="font-gta text-xs md:text-sm font-medium uppercase text-black">
              Clients
            </DrawerTrigger>
            <DrawerContent className="bg-black text-white">
              <div className="container p-6">
                <div className="flex flex-col gap-4">
                  <p className="w-1/3 font-epilogue font-bold text-xs">
                    TWC HAS HAD THE PLEASURE OF WORKING WITH SOME TOP NOTCH
                    BRAND. THE LIKES OF:
                  </p>
                  <div className="flex flex-wrap md:justify-between gap-4">
                    <Image priority src={Anh1} alt="Anh 1" />

                    <Image priority src={HipHub} alt="Hiphub" />
                    <Image priority src={Anh2} alt="Anh 2" />
                    <Image priority src={Anh3} alt="Anh 3" />
                    <Image priority src={TWC} alt="TWC" />
                  </div>
                </div>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </section>

      <section className="flex mt-10 justify-between">
        <p className="font-gta text-xs md:text-sm font-light flex-1">
          © TWC your friendly Vietnamese Agency Since 2022 ✷
        </p>
        <div className="aximo-social-icon social-large">
          <ul>
            <li>
              <Link href={contacts.facebook} target="_blank">
                <i className="icon-facebook"></i>
              </Link>
            </li>
            <li>
              <Link href={contacts.instagram} target="_blank">
                <i className="icon-instagram"></i>
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
}
