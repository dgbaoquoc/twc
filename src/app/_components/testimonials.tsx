import { StarIcon } from "@/components/icons";
import { useTranslations } from "next-intl";

export default function Testimonials() {
  const t = useTranslations("Home.Testimonials");
  return (
    <section className="section aximo-section-padding3">
      <div className="container">
        <div className="aximo-section-title center">
          <h2>
            {t("headline")}
            <span className="aximo-title-animation">
              {t("headline2")}
              <StarIcon className="ml-2 size-8" />
            </span>
          </h2>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div
              className="aximo-testimonial-wrap wow fadeInUpX"
              data-wow-delay="0.1s"
            >
              <div className="aximo-testimonial-rating">
                <ul>
                  <li>
                    <i className="icon-star"></i>
                  </li>
                  <li>
                    <i className="icon-star"></i>
                  </li>
                  <li>
                    <i className="icon-star"></i>
                  </li>
                  <li>
                    <i className="icon-star"></i>
                  </li>
                  <li>
                    <i className="icon-star"></i>
                  </li>
                </ul>
              </div>
              <div className="aximo-testimonial-data">
                <h3>Super customer service!</h3>
                <p>
                  Excellent customer service and I was really impressed and
                  happy with my purchase especially as it was a last minute
                  order which got to me in time, and when it arrived I was very
                  happy with the design and size and so was the recipient.
                </p>
              </div>
              <div className="aximo-testimonial-author">
                <div className="aximo-testimonial-author-thumb">
                  <img src="assets/images/customers/tp_72.webp" alt="" />
                </div>
                <div className="aximo-testimonial-author-data">
                  <p>
                    William Jack <span>Founder@XYZ</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="aximo-testimonial-wrap wow fadeInUpX"
              data-wow-delay="0.2s"
            >
              <div className="aximo-testimonial-rating">
                <ul>
                  <li>
                    <i className="icon-star"></i>
                  </li>
                  <li>
                    <i className="icon-star"></i>
                  </li>
                  <li>
                    <i className="icon-star"></i>
                  </li>
                  <li>
                    <i className="icon-star"></i>
                  </li>
                  <li>
                    <i className="icon-star"></i>
                  </li>
                </ul>
              </div>
              <div className="aximo-testimonial-data">
                <h3>Exceptional creativity and vision</h3>
                <p>
                  Working Mthemeus was a game-changer for our brand. Their
                  exceptional creativity & vision breathed new life into our
                  visual. The logo they perfectly captures our essence & has
                  become instantly recognizable. We couldn&apos;t be happier the
                  results!
                </p>
              </div>
              <div className="aximo-testimonial-author">
                <div className="aximo-testimonial-author-thumb">
                  <img src="assets/images/customers/bvtc_72.webp" alt="" />
                </div>
                <div className="aximo-testimonial-author-data">
                  <p>
                    Smith Align <span>Businessman</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
