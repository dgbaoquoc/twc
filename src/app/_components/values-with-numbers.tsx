export default function ValuesWithNumber() {
  return (
    <section className="section aximo-section-padding">
      <div id="aximo-counter"></div>
      <div className="container">
        <div className="aximo-section-title">
          <div className="row">
            <div className="col-lg-7">
              <h2>
                <span className="aximo-title-animation">
                  We make your
                  <span className="aximo-title-icon">
                    <img src="assets/images/v1/star2.png" alt="" />
                  </span>
                </span>
                business stand out
              </h2>
            </div>
            <div className="col-lg-4 offset-lg-1 d-flex align-items-center">
              <p>
                We work closely with our clients to know their objectives,
                target audience, unique needs, and practical design solutions.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8">
            <div className="aximo-video-wrap wow fadeInUpX" data-wow-delay="0s">
              <img src="assets/images/v1/video-bg.png" alt="" />
              <a
                className="aximo-video-popup play-btn1 video-init"
                href="https://www.youtube.com/watch?v=Vx2aLNgGoAE"
              >
                <img src="assets/images/v1/play-btn.svg" alt="" />
              </a>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="aximo-counter-wrap">
              <div className="aximo-counter-data">
                <h2 className="aximo-counter-number">
                  <span data-percentage="15" className="aximo-counter"></span>+
                </h2>
                <p>Years of experience</p>
              </div>
              <div className="aximo-counter-data">
                <h2 className="aximo-counter-number">
                  <span data-percentage="120" className="aximo-counter"></span>k
                </h2>
                <p>Successful projects</p>
              </div>
              <div className="aximo-counter-data">
                <h2 className="aximo-counter-number">
                  <span data-percentage="100" className="aximo-counter"></span>%
                </h2>
                <p>Client satisfaction rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
