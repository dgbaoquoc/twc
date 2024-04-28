import pick from "lodash/pick";
import Image from "next/image";
import {
  NextIntlClientProvider,
  useMessages,
  useTranslations,
} from "next-intl";
import Link from "next/link";
import { StarIcon } from "@/components/icons";
import { contacts } from "@/configs/site";
import Logo from "@/public/assets/images/logo/twc_svgs/logo.svg";

export default function SiteFooter() {
  const messages = useMessages();
  const t = useTranslations("Footer");

  return (
    <footer className="container py-10">
      <section className="grid grid-cols-3">
        <div className="flex flex-col gap-4">
          <div className="flex justify-between">
            <Link
              href="/"
              className="font-gta font-medium uppercase text-black"
            >
              About
            </Link>
            <Link
              href="/"
              className="font-gta font-medium uppercase text-black"
            >
              Magazine
            </Link>
          </div>
          <Link href="/" className="font-gta font-medium uppercase text-black">
            Contact
          </Link>
        </div>
        <div className="flex justify-center">
          <Image src={Logo} alt="TWC Logo" width={140} height={140} />
        </div>
        <div className="flex justify-end">
          <Link
            href="#clients"
            className="font-gta font-medium uppercase text-black"
          >
            Clients
          </Link>
        </div>
      </section>

      <section className="flex mt-10 justify-between">
        <p className="font-gta font-light flex-1">
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
    // <NextIntlClientProvider messages={pick(messages, "Footer")}>
    //   <footer className="aximo-footer-section dark-bg" id="contact">
    //     <div className="container">
    //       <div className="aximo-footer-top aximo-section-padding">
    //         <div className="row">
    //           <div className="col-lg-7">
    //             <div className="aximo-default-content light position-relative">
    //               <h2>
    //                 <span className="aximo-title-animation">
    //                   {t("headline")}
    //                   <StarIcon className="size-8 ml-2" />
    //                 </span>
    //               </h2>
    //               <p>{t("description")}</p>
    //               <div className="aximo-info-wrap">
    //                 <div className="aximo-info">
    //                   <ul>
    //                     <li>Give us a call:</li>
    //                     <li>
    //                       <a href="tel:+84866422784">(84) 866 422 784</a>
    //                     </li>
    //                   </ul>
    //                 </div>
    //                 <div className="aximo-info">
    //                   <ul>
    //                     <li>Send us an email:</li>
    //                     <li>
    //                       <a href={`mailto:${contacts.email}`}>
    //                         {contacts.email}
    //                       </a>
    //                     </li>
    //                   </ul>
    //                 </div>
    //               </div>
    //               <div className="aximo-social-icon social-large">
    //                 <ul>
    //                   <li>
    //                     <a href={contacts.facebook} target="_blank">
    //                       <i className="icon-facebook"></i>
    //                     </a>
    //                   </li>
    //                   <li>
    //                     <a href={contacts.instagram} target="_blank">
    //                       <i className="icon-instagram"></i>
    //                     </a>
    //                   </li>
    //                 </ul>
    //               </div>
    //               <div className="aximo-hero-shape aximo-footer-shape">
    //                 <img src="assets/images/icon/arrow-hero.svg" alt="" />
    //               </div>
    //             </div>
    //           </div>
    //           <div className="col-lg-5">
    //             <div className="aximo-form-wrap">
    //               <h4>Send us a message</h4>
    //               <form action="#">
    //                 <div className="aximo-form-field">
    //                   <input type="text" placeholder="Your name" />
    //                 </div>
    //                 <div className="aximo-form-field">
    //                   <input type="email" placeholder="Your email address" />
    //                 </div>
    //                 <div className="aximo-form-field">
    //                   <input type="text" placeholder="+088-234-6849" />
    //                 </div>
    //                 <div className="aximo-form-field">
    //                   <textarea
    //                     name="textarea"
    //                     placeholder="Write your message here..."
    //                   ></textarea>
    //                 </div>
    //                 <button id="aximo-submit-btn" type="submit">
    //                   Send message{" "}
    //                   <span>
    //                     <img src="assets/images/icon/arrow-right3.svg" alt="" />
    //                   </span>
    //                 </button>
    //               </form>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="aximo-footer-bottom">
    //         <div className="row">
    //           <div className="col-lg-6">
    //             <div className="aximo-footer-logo">
    //               <Link href="/">
    //                 <Image
    //                   unoptimized
    //                   src="/assets/images/logo/logo-white.png"
    //                   width={124}
    //                   height={24}
    //                   alt="TWC logo"
    //                   className="light-version-logo"
    //                 />
    //               </Link>
    //             </div>
    //           </div>
    //           <div className="col-lg-6">
    //             <div className="aximo-copywright one">
    //               <p> &copy; Copyright 2024, All Rights Reserved by TWC</p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </footer>
    // </NextIntlClientProvider>
  );
}
