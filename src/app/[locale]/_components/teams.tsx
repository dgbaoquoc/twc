import { useTranslations } from "next-intl";

export default function Teams() {
  const t = useTranslations("Home.Teams");
  return (
    <section className="section aximo-section-padding3">
      <div className="container">
        <div className="aximo-section-title center">
          <h2>
            {t("headline")}
            <span className="aximo-title-animation">
              <span className="aximo-title-icon">
                <img src="assets/images/v1/star2.png" alt="" />
              </span>
            </span>
          </h2>
        </div>
        <div className="row">
          <div className="col-xl-3 col-md-6">
            <div
              className="aximo-team-wrap wow fadeInUpX"
              data-wow-delay="0.1s"
            >
              <div className="aximo-team-thumb">
                <img src="assets/images/team/team1.png" alt="" />
                <div className="aximo-social-icon team-social">
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
              </div>
              <div className="aximo-team-data">
                <a href="single-team.html">
                  <h3>Andrew Mark</h3>
                </a>
                <p>Creative Director</p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div
              className="aximo-team-wrap wow fadeInUpX"
              data-wow-delay="0.2s"
            >
              <div className="aximo-team-thumb">
                <img src="assets/images/team/team2.png" alt="" />
                <div className="aximo-social-icon team-social">
                  <ul>
                    <li>
                      <a href="">
                        <i className="icon-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="icon-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="icon-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="icon-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="aximo-team-data">
                <a href="single-team.html">
                  <h3>Jack Taylor</h3>
                </a>
                <p>Senior Designer</p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div
              className="aximo-team-wrap wow fadeInUpX"
              data-wow-delay="0.3s"
            >
              <div className="aximo-team-thumb">
                <img src="assets/images/team/team3.png" alt="" />
                <div className="aximo-social-icon team-social">
                  <ul>
                    <li>
                      <a href="">
                        <i className="icon-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="icon-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="icon-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="icon-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="aximo-team-data">
                <a href="single-team.html">
                  <h3>Martine Joy</h3>
                </a>
                <p>Project Manager</p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div
              className="aximo-team-wrap wow fadeInUpX"
              data-wow-delay="0.4s"
            >
              <div className="aximo-team-thumb">
                <img src="assets/images/team/team4.png" alt="" />
                <div className="aximo-social-icon team-social">
                  <ul>
                    <li>
                      <a href="">
                        <i className="icon-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="icon-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="icon-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="icon-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="aximo-team-data">
                <a href="single-team.html">
                  <h3>Adam Straw</h3>
                </a>
                <p>Web Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
