export default function Hero() {
  return (
    <section className="aximo-hero-section dark-bg">
      <div className="container position-relative">
        <div className="row">
          <div className="col-lg-8">
            <div className="aximo-hero-content">
              <h1>
                <span className="aximo-title-animation">
                  A creative
                  <img src="assets/images/v1/star.png" alt="" />
                </span>
                design studio
              </h1>
              <p>
                We&apos;re a creative design studio specializing in meeting the
                needs of the new generation. We offer innovative and
                cutting-edge design solutions to help our clients stand out in
                today&apos;s fast-paced.
              </p>
              <div className="aximo-hero-user-wrap">
                <div className="aximo-hero-user-thumb">
                  <div
                    className="aximo-hero-user-thumb-item wow fadeInUpX"
                    data-wow-delay="0s"
                  >
                    <img src="assets/images/v1/user1.png" alt="" />
                  </div>
                  <div
                    className="aximo-hero-user-thumb-item wow fadeInUpX"
                    data-wow-delay="0.25s"
                  >
                    <img src="assets/images/v1/user3.png" alt="" />
                  </div>
                  <div
                    className="aximo-hero-user-thumb-item wow fadeInUpX"
                    data-wow-delay="0.4s"
                  >
                    <img src="assets/images/v1/user2.png" alt="" />
                  </div>
                </div>
                <div className="aximo-hero-user-data">
                  <p>Believed by more than a thousand people</p>
                </div>
              </div>
              <a className="aximo-call-btn" href="contact-us.html">
                Book a free consultation <i className="icon-call"></i>
              </a>
              <div className="aximo-hero-shape">
                <img src="assets/images/v1/shape1.png" alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div
              className="aximo-hero-thumb wow fadeInRight"
              data-wow-delay="0s"
            >
              <img src="assets/images/v1/hero-thumb.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
