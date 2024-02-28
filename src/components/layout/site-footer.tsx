import pick from "lodash/pick";
import {
  NextIntlClientProvider,
  useMessages,
  useTranslations,
} from "next-intl";

export default function SiteFooter() {
  const messages = useMessages();
  const t = useTranslations("Footer");

  return (
    <NextIntlClientProvider messages={pick(messages, "Footer")}>
      <footer className="aximo-footer-section dark-bg">
        <div className="container">
          <div className="aximo-footer-top aximo-section-padding">
            <div className="row">
              <div className="col-lg-7">
                <div className="aximo-default-content light position-relative">
                  <h2>
                    <span className="aximo-title-animation">
                      {t("headline")}
                      <span className="aximo-title-icon">
                        <img src="assets/images/v1/star2.png" alt="" />
                      </span>
                    </span>
                  </h2>
                  <p>{t("description")}</p>
                  <div className="aximo-info-wrap">
                    <div className="aximo-info">
                      <ul>
                        <li>Give us a call:</li>
                        <li>
                          <a href="tel:+84866422784">(84) 866 422 784</a>
                        </li>
                      </ul>
                    </div>
                    <div className="aximo-info">
                      <ul>
                        <li>Send us an email:</li>
                        <li>
                          <a href="mailto:twc.pleasebookme@gmail.com">
                            twc.pleasebookme@gmail.com
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="aximo-social-icon social-large">
                    <ul>
                      <li>
                        <a href="https://twitter.com/" target="_blank">
                          <i className="icon-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://facebook.com/" target="_blank">
                          <i className="icon-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/" target="_blank">
                          <i className="icon-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/" target="_blank">
                          <i className="icon-linkedin"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="aximo-hero-shape aximo-footer-shape">
                    <img src="assets/images/v1/shape1.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="aximo-form-wrap">
                  <h4>Send us a message</h4>
                  <form action="#">
                    <div className="aximo-form-field">
                      <input type="text" placeholder="Your name" />
                    </div>
                    <div className="aximo-form-field">
                      <input type="email" placeholder="Your email address" />
                    </div>
                    <div className="aximo-form-field">
                      <input type="text" placeholder="+088-234-6849" />
                    </div>
                    <div className="aximo-form-field">
                      <textarea
                        name="textarea"
                        placeholder="Write your message here..."
                      ></textarea>
                    </div>
                    <button id="aximo-submit-btn" type="submit">
                      Send message{" "}
                      <span>
                        <img src="assets/images/icon/arrow-right3.svg" alt="" />
                      </span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="aximo-footer-bottom">
            <div className="row">
              <div className="col-lg-6">
                <div className="aximo-footer-logo">
                  <a href="">
                    <img src="assets/images/logo/logo-white.svg" alt="" />
                  </a>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="aximo-copywright one">
                  <p> &copy; Copyright 2023, All Rights Reserved by Mthemeus</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </NextIntlClientProvider>
  );
}
