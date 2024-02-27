export default function Projects() {
  return (
    <section className="section dark-bg aximo-section-padding">
      <div className="container">
        <div className="aximo-section-title center light">
          <h2>
            Have a wide range of
            <span className="aximo-title-animation">
              creative projects
              <span className="aximo-title-icon">
                <img src="assets/images/v1/star2.png" alt="" />
              </span>
            </span>
          </h2>
        </div>
      </div>
      <div className="swiper aximo-project-slider">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="aximo-project-thumb">
              <img src="assets/images/v1/project1.png" alt="" />
              <div className="aximo-project-wrap">
                <div className="aximo-project-data">
                  <a href="single-portfolio.html">
                    <h3>Product Design</h3>
                  </a>
                  <p>
                    Developing the look and feel of physical products,
                    aesthetics, and functionality.
                  </p>
                </div>
                <a className="aximo-project-icon" href="single-portfolio.html">
                  <svg
                    width="34"
                    height="28"
                    viewBox="0 0 34 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.9795 2C19.9795 2 20.5 8 25.9795 11.2C28.4887 12.6653 31.9795 14 31.9795 14M31.9795 14H2M31.9795 14C31.9795 14 28.5339 15.415 25.9795 16.8C19.9795 20.0533 19.9795 26 19.9795 26"
                      stroke="#FDFDE1"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </section>
  );
}
