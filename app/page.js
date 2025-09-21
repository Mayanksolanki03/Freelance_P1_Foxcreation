import Image from "next/image";

export default function Home() {
  return (
    <main>
  {/* Section Banner */}
  <div className="section-banner">
    <div
      className="banner-video-container keep-dark animate-box animated animate__animated"
      data-animate="animate__fadeInUp"
    >
      <div id="banner-video-background" />
      <div className="hero-container position-relative">
        <div className="d-flex flex-column gspace-2">
          <h1
            className="title-heading-banner animate-box animated animate__animated"
            data-animate="animate__fadeInLeft"
          >
            Amplify Your Brand with Cutting-Edge Digital Marketing
          </h1>
          <div className="banner-heading">
            <div
              className="banner-video-content order-xl-1 order-2 animate-box animated animate__animated"
              data-animate="animate__fadeInUp"
            >
              <div className="d-flex flex-column flex-xl-row text-xl-start text-center align-items-center gspace-5">
                <button
                  className="request-loader"
                  data-video="https://www.youtube.com/embed/VhBl3dHT5SY?autoplay=1"
                >
                  <i className="fa-solid fa-play" />
                </button>
                <p>
                  Watch our video reviews and see how businesses achieve success
                  with Marko's digital marketing solutions.
                </p>
              </div>
            </div>
            <div
              className="banner-content order-xl-2 order-1  animate-box animated animate__animated"
              data-animate="animate__fadeInRight"
            >
              <p>
                Marko empowers businesses to grow online with data driven
                digital marketing, innovative branding, and performance focused
                strategies trusted by top brands lorem ipsum dolor sit amet
                consectetur.
              </p>
              <div className="d-flex flex-md-row flex-column justify-content-center justify-content-xl-start align-self-center align-self-xl-start gspace-3">
                <a href="./about.html" className="btn btn-accent">
                  <div className="btn-title">
                    <span>Get Started</span>
                  </div>
                  <div className="icon-circle">
                    <i className="fa-solid fa-arrow-right" />
                  </div>
                </a>
                <div className="banner-reviewer">
                  <div className="d-flex flex-row align-items-center">
                    <img
                      src="/images/Photo-14.jpg"
                      alt="Reviewer"
                      className="avatar"
                    />
                    <img
                      src="/images/Photo-1.jpg"
                      alt="Reviewer"
                      className="avatar"
                    />
                    <img
                      src="/images/Photo-2.jpg"
                      alt="Reviewer"
                      className="avatar"
                    />
                  </div>
                  <div className="detail">
                    <span>2.7k Positive</span>
                    <span>Reviews</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Section Expertise */}
  <div className="section">
    <div className="hero-container">
      <div className="d-flex flex-column flex-xl-row gspace-5">
        <div className="expertise-img-layout">
          <div className="image-container expertise-img">
            <img
              src="/images/working-job-career-casual-showing-SJZWF3N-1024x737.jpg"
              alt="Expertise Image"
              className="img-fluid  animate-box animated animate__animated"
              data-animate="animate__fadeInUp"
            />
            <div className="expertise-layout">
              <div className="d-flex flex-column">
                <div className="card-expertise-wrapper">
                  <div
                    className="card card-expertise  animate-box animated animate__animated"
                    data-animate="animate__fadeInDown"
                  >
                    <h4>Ready to Elevate Your Digital Presence?</h4>
                    <p>
                      Let's create a custom strategy that fits your business
                      goals.
                    </p>
                    <div className="d-flex align-items-center flex-row gspace-2 expertise-link">
                      <a href="./contact.html">Get Free Consultation</a>
                      <i className="fa-solid fa-circle-arrow-right" />
                    </div>
                  </div>
                </div>
                <div className="expertise-spacer" />
              </div>
              <div className="expertise-spacer" />
            </div>
          </div>
        </div>
        <div className="expertise-title">
          <div
            className="sub-heading animate-box animated animate__animated"
            data-animate="animate__fadeInRight"
          >
            <i className="fa-regular fa-circle-dot" />
            <span>Our Expertise</span>
          </div>
          <h2
            className="title-heading animate-box animated animate__animated"
            data-animate="animate__fadeInRight"
          >
            Data Driven Strategies, Measurable Results
          </h2>
          <p>
            At Marko, we specialize in crafting innovative digital marketing
            strategies that drive real business growth. Our expertise ensures
            your brand stays ahead in the competitive digital landscape.
          </p>
          <div className="d-flex flex-column flex-md-row gspace-2">
            <div className="expertise-list">
              <h5>What We Do Best</h5>
              <ul className="check-list">
                <li>
                  <a href="./single_services.html">Performance Marketing</a>
                </li>
                <li>
                  <a href="./single_services.html">Social Media Growth</a>
                </li>
                <li>
                  <a href="./single_services.html">Content Marketing</a>
                </li>
                <li>
                  <a href="./single_services.html">PPC &amp; Paid Ads</a>
                </li>
                <li>
                  <a href="./single_services.html">Brand Strategy</a>
                </li>
                <li>
                  <a href="./single_services.html">Conversion Optimization</a>
                </li>
              </ul>
            </div>
            <div
              className="card card-expertise card-expertise-counter animate-box animated animate__animated"
              data-animate="animate__fadeInUp"
            >
              <div className="d-flex flex-row gspace-2 align-items-center">
                <div className="d-flex flex-row align-items-center">
                  <span className="counter" data-target={21} />
                  <span className="counter-detail">+</span>
                </div>
                <h6>Years of Experience on Digital Marketing Services</h6>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit in ex
                ligula varius at rutrum et finibus sed felis qisque.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Section Modal Video */}
  <div className="section p-0">
    <div id="modal-overlay" className="modal-overlay">
      <span className="my-close">
        <i className="fa-solid fa-xmark" />
      </span>
      <div className="my-modal">
        <iframe id="my-video-frame" allowFullScreen="" />
      </div>
    </div>
  </div>
  {/* Section Partner */}
  <div className="section-partner">
    <div className="hero-container">
      <div
        className="card card-partner  animate-box animated animate__animated"
        data-animate="animate__fadeInRight"
      >
        <div className="partner-spacer" />
        <div className="row row-cols-xl-2 row-cols-1 align-items-center px-5 position-relative z-2">
          <div className="col">
            <div className="d-flex flex-column justify-content-start pe-xl-3 pe-0">
              <h3 className="title-heading">Powering Success for Top Brands</h3>
            </div>
          </div>
          <div className="col">
            <div className="d-flex flex-column ps-xl-3 ps-0">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ex
                ligula, varius at rutrum et, finibus sed felis. Quisque eget
                tincidunt lectus. Sed quis diam sed neque mattis feugiat.
              </p>
            </div>
          </div>
        </div>
        <div className="swiperPartner-layout">
          <div className="swiperPartner-overlay">
            <div className="spacer" />
          </div>
          <div className="swiperPartner-container">
            <div className="swiper swiperPartner">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <a href="#">
                    <div className="partner-slide">
                      <img
                        src="/images/client-7.png"
                        alt="Client"
                        className="partner-logo img-fluid"
                      />
                    </div>
                  </a>
                </div>
                <div className="swiper-slide">
                  <a href="#">
                    <div className="partner-slide">
                      <img
                        src="/images/client-6.png"
                        alt="Client"
                        className="partner-logo img-fluid"
                      />
                    </div>
                  </a>
                </div>
                <div className="swiper-slide">
                  <a href="#">
                    <div className="partner-slide">
                      <img
                        src="/images/client-8.png"
                        alt="Client"
                        className="partner-logo img-fluid"
                      />
                    </div>
                  </a>
                </div>
                <div className="swiper-slide">
                  <a href="#">
                    <div className="partner-slide">
                      <img
                        src="/images/client-2.png"
                        alt="Client"
                        className="partner-logo img-fluid"
                      />
                    </div>
                  </a>
                </div>
                <div className="swiper-slide">
                  <a href="#">
                    <div className="partner-slide">
                      <img
                        src="/images/client-1.png"
                        alt="Client"
                        className="partner-logo img-fluid"
                      />
                    </div>
                  </a>
                </div>
                <div className="swiper-slide">
                  <a href="#">
                    <div className="partner-slide">
                      <img
                        src="/images/client-3.png"
                        alt="Client"
                        className="partner-logo img-fluid"
                      />
                    </div>
                  </a>
                </div>
                <div className="swiper-slide">
                  <a href="#">
                    <div className="partner-slide">
                      <img
                        src="/images/client-5.png"
                        alt="Client"
                        className="partner-logo img-fluid"
                      />
                    </div>
                  </a>
                </div>
                <div className="swiper-slide">
                  <a href="#">
                    <div className="partner-slide">
                      <img
                        src="/images/client-4.png"
                        alt="Client"
                        className="partner-logo img-fluid"
                      />
                    </div>
                  </a>
                </div>
                <div className="swiper-slide">
                  <a href="#">
                    <div className="partner-slide">
                      <img
                        src="/images/client-7.png"
                        alt="Client"
                        className="partner-logo img-fluid"
                      />
                    </div>
                  </a>
                </div>
                <div className="swiper-slide">
                  <div className="partner-slide">
                    <img
                      src="/images/client-6.png"
                      alt="Client"
                      className="partner-logo img-fluid"
                    />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="partner-slide">
                    <img
                      src="/images/client-8.png"
                      alt="Client"
                      className="partner-logo img-fluid"
                    />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="partner-slide">
                    <img
                      src="/images/client-2.png"
                      alt="Client"
                      className="partner-logo img-fluid"
                    />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="partner-slide">
                    <img
                      src="/images/client-1.png"
                      alt="Client"
                      className="partner-logo img-fluid"
                    />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="partner-slide">
                    <img
                      src="/images/client-3.png"
                      alt="Client"
                      className="partner-logo img-fluid"
                    />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="partner-slide">
                    <img
                      src="/images/client-5.png"
                      alt="Client"
                      className="partner-logo img-fluid"
                    />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="partner-slide">
                    <img
                      src="/images/client-4.png"
                      alt="Client"
                      className="partner-logo img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Section Why Choose Us */}
  <div className="section">
    <div className="hero-container">
      <div className="d-flex flex-column flex-xl-row gspace-5">
        <div className="chooseus-card-container">
          <div className="d-flex flex-column gspace-2">
            <div
              className="card card-chooseus animate-box animated fast animate__animated"
              data-animate="animate__fadeInLeft"
            >
              <div className="chooseus-icon-wrapper">
                <div className="chooseus-spacer above" />
                <div className="chooseus-icon-layout">
                  <div className="chooseus-icon">
                    <img
                      src="/images/Icon-2.png"
                      alt="Why Choose Us Icon"
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="chooseus-spacer below" />
              </div>
              <div className="chooseus-content">
                <h4 className="chooseus-title">Data-Driven Approach</h4>
                <p>
                  Every decision is backed by real-time analytics for maximum
                  impact lorem ipsum dolor sit consectetur adipiscing elit ut
                  elit tellus luctus nec.
                </p>
                <div className="link-wrapper">
                  <a href="#">Read More</a>
                  <i className="fa-solid fa-arrow-circle-right accent-color" />
                </div>
              </div>
            </div>
            <div
              className="card card-chooseus  animate-box animated animate__animated"
              data-animate="animate__fadeInLeft"
            >
              <div className="chooseus-icon-wrapper">
                <div className="chooseus-spacer above" />
                <div className="chooseus-icon-layout">
                  <div className="chooseus-icon">
                    <img
                      src="/images/icon-1.png"
                      alt="Why Choose Us Icon"
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="chooseus-spacer below" />
              </div>
              <div className="chooseus-content">
                <h4 className="chooseus-title">Creative &amp; Innovative</h4>
                <p>
                  Cutting-edge marketing techniques to keep you ahead of the
                  competition lorem ipsum dolor sit awsa consectetur adipiscing
                  elit ut elit.
                </p>
                <div className="link-wrapper">
                  <a href="#">Read More</a>
                  <i className="fa-solid fa-arrow-circle-right accent-color" />
                </div>
              </div>
            </div>
            <div
              className="card card-chooseus  animate-box animated slow animate__animated"
              data-animate="animate__fadeInLeft"
            >
              <div className="chooseus-icon-wrapper">
                <div className="chooseus-spacer above" />
                <div className="chooseus-icon-layout">
                  <div className="chooseus-icon">
                    <img
                      src="/images/Icon-3.png"
                      alt="Why Choose Us Icon"
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="chooseus-spacer below" />
              </div>
              <div className="chooseus-content">
                <h4 className="chooseus-title">Transparent Reporting</h4>
                <p>
                  Clear insights and performance tracking, so you always know
                  your ROI lorem ipsum dolo consectetur adipiscing elit ut elit
                  tellus luctus nec.
                </p>
                <div className="link-wrapper">
                  <a href="#">Read More</a>
                  <i className="fa-solid fa-arrow-circle-right accent-color" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="chooseus-content-container">
          <div className="d-flex flex-column gspace-5">
            <div className="d-flex flex-column gspace-2">
              <div
                className="sub-heading  animate-box animated animate__animated"
                data-animate="animate__fadeInDown"
              >
                <i className="fa-regular fa-circle-dot" />
                <span>Why Choose Marko</span>
              </div>
              <h2
                className="title-heading  animate-box animated animate__animated"
                data-animate="animate__fadeInDown"
              >
                Your Success is Our Mission
              </h2>
              <p
                className="mb-0 animate-box animated animate__animated"
                data-animate="animate__fadeInDown"
              >
                In the fast-paced digital world, choosing the right marketing
                partner makes all the difference. At Marko, we don’t just create
                campaigns—we craft strategies that deliver measurable success.
              </p>
            </div>
            <div className="image-container">
              <img
                src="/images/collaborative-process-of-multicultural-skilled-peo-5EHBQRG-1024x683.jpg"
                alt="Why Choose Us Image"
                className="chooseus-img"
              />
              <div className="card-chooseus-cta-layout">
                <div className="chooseus-cta-spacer" />
                <div className="d-flex flex-column align-items-end">
                  <div className="chooseus-cta-spacer" />
                  <div className="card-chooseus-cta-wrapper">
                    <div
                      className="card card-chooseus-cta animate-box animated animate__animated"
                      data-animate="animate__fadeInUp"
                    >
                      <h5>
                        Partner with Marko &amp; take your brand to the next
                        level.
                      </h5>
                      <div className="link-wrapper">
                        <a href="./contact.html">Let's Talk Strategy</a>
                        <i className="fa-solid fa-circle-arrow-right" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Section Guide */}
  <div className="section-guide">
    <div className="guide-banner">
      <div className="hero-container">
        <div
          className="guide-content  animate-box animated animate__animated"
          data-animate="animate__fadeInUp"
        >
          <div className="guide-video-container">
            <button
              className="request-loader"
              data-video="https://www.youtube.com/embed/VhBl3dHT5SY?autoplay=1"
            >
              <i className="fa-solid fa-play" />
            </button>
            <p>See How We Help Brands Grow</p>
          </div>
          <div className="d-flex flex-column gspace-2">
            <h3 className="title-heading">
              Transform Your Business with Marko!
            </h3>
            <p>
              Take your digital marketing to the next level with data-driven
              strategies and innovative solutions. Let's create something
              amazing together!
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Section Service */}
  <div className="section">
    <div className="hero-container">
      <div className="d-flex flex-column justify-content-center text-center gspace-5">
        <div className="d-flex flex-column justify-content-center text-center gspace-2">
          <div
            className="sub-heading align-self-center animate-box animated animate__animated"
            data-animate="animate__fadeInDown"
          >
            <i className="fa-regular fa-circle-dot" />
            <span>Our Core Services</span>
          </div>
          <h2
            className="title-heading heading-container heading-container-medium animate-box animated animate__animated"
            data-animate="animate__fadeInDown"
          >
            Digital Solutions That Drive Real Results
          </h2>
        </div>
        <div className="card-service-wrapper">
          <div className="row row-cols-xl-3 row-cols-md-2 row-cols-1 grid-spacer-2">
            <div className="col">
              <div
                className="card card-service animate-box animated slow animate__animated"
                data-animate="animate__fadeInLeft"
              >
                <div className="d-flex flex-row justify-content-between gspace-2 gspace-md-3 align-items-center">
                  <div>
                    <div className="service-icon-wrapper">
                      <div className="service-icon">
                        <img
                          src="/images/Icon-7.png"
                          alt="Service Icon"
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="service-title">
                    <h4>Social Media Marketing</h4>
                  </div>
                </div>
                <p>
                  Build brand awareness &amp; engage your audience effectively
                  lorem ipsum dolor sit amet consectetur adip.
                </p>
                <a href="./single_services.html" className="btn btn-accent">
                  <div className="btn-title">
                    <span>View Details</span>
                  </div>
                  <div className="icon-circle">
                    <i className="fa-solid fa-arrow-right" />
                  </div>
                </a>
              </div>
            </div>
            <div className="col">
              <div
                className="card card-service animate-box animated animate__animated"
                data-animate="animate__fadeInLeft"
              >
                <div className="d-flex flex-row justify-content-between gspace-2 gspace-md-3 align-items-center">
                  <div>
                    <div className="service-icon-wrapper">
                      <div className="service-icon">
                        <img
                          src="/images/digital-marketing-icons-F4LJ4W8.png"
                          alt="Service Icon"
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="service-title">
                    <h4>Content Marketing</h4>
                  </div>
                </div>
                <p>
                  Build brand awareness &amp; engage your audience effectively
                  lorem ipsum dolor sit amet consectetur adip.
                </p>
                <a href="./single_services.html" className="btn btn-accent">
                  <div className="btn-title">
                    <span>View Details</span>
                  </div>
                  <div className="icon-circle">
                    <i className="fa-solid fa-arrow-right" />
                  </div>
                </a>
              </div>
            </div>
            <div className="col">
              <div
                className="card card-service animate-box animated fast animate__animated"
                data-animate="animate__fadeInLeft"
              >
                <div className="d-flex flex-row justify-content-between gspace-2 gspace-md-3 align-items-center">
                  <div>
                    <div className="service-icon-wrapper">
                      <div className="service-icon">
                        <img
                          src="/images/Icon-8.png"
                          alt="Service Icon"
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="service-title">
                    <h4>PPC Advertising</h4>
                  </div>
                </div>
                <p>
                  Build brand awareness &amp; engage your audience effectively
                  lorem ipsum dolor sit amet consectetur adip.
                </p>
                <a href="./single_services.html" className="btn btn-accent">
                  <div className="btn-title">
                    <span>View Details</span>
                  </div>
                  <div className="icon-circle">
                    <i className="fa-solid fa-arrow-right" />
                  </div>
                </a>
              </div>
            </div>
            <div className="col">
              <div
                className="card card-service animate-box animated slow animate__animated"
                data-animate="animate__fadeInLeft"
              >
                <div className="d-flex flex-row justify-content-between gspace-2 gspace-md-3 align-items-center">
                  <div>
                    <div className="service-icon-wrapper">
                      <div className="service-icon">
                        <img
                          src="/images/Icon-5.png"
                          alt="Service Icon"
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="service-title">
                    <h4>Email Marketing</h4>
                  </div>
                </div>
                <p>
                  Build brand awareness &amp; engage your audience effectively
                  lorem ipsum dolor sit amet consectetur adip.
                </p>
                <a href="./single_services.html" className="btn btn-accent">
                  <div className="btn-title">
                    <span>View Details</span>
                  </div>
                  <div className="icon-circle">
                    <i className="fa-solid fa-arrow-right" />
                  </div>
                </a>
              </div>
            </div>
            <div className="col">
              <div
                className="card card-service animate-box animated animate__animated"
                data-animate="animate__fadeInLeft"
              >
                <div className="d-flex flex-row justify-content-between gspace-2 gspace-md-3 align-items-center">
                  <div>
                    <div className="service-icon-wrapper">
                      <div className="service-icon">
                        <img
                          src="/images/Icon-6.png"
                          alt="Service Icon"
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="service-title">
                    <h4>Brading &amp; Design</h4>
                  </div>
                </div>
                <p>
                  Build brand awareness &amp; engage your audience effectively
                  lorem ipsum dolor sit amet consectetur adip.
                </p>
                <a href="./single_services.html" className="btn btn-accent">
                  <div className="btn-title">
                    <span>View Details</span>
                  </div>
                  <div className="icon-circle">
                    <i className="fa-solid fa-arrow-right" />
                  </div>
                </a>
              </div>
            </div>
            <div className="col">
              <div
                className="card card-service animate-box animated fast animate__animated"
                data-animate="animate__fadeInLeft"
              >
                <div className="d-flex flex-row justify-content-between gspace-2 gspace-md-3 align-items-center">
                  <div>
                    <div className="service-icon-wrapper">
                      <div className="service-icon">
                        <img
                          src="/images/Icon-4.png"
                          alt="Service Icon"
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="service-title">
                    <h4>Web Development</h4>
                  </div>
                </div>
                <p>
                  Build brand awareness &amp; engage your audience effectively
                  lorem ipsum dolor sit amet consectetur adip.
                </p>
                <a href="./single_services.html" className="btn btn-accent">
                  <div className="btn-title">
                    <span>View Details</span>
                  </div>
                  <div className="icon-circle">
                    <i className="fa-solid fa-arrow-right" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="service-link-footer">
          <p>
            Need a custom solution? Let's create a strategy tailored for your
            business. <a href="./contact.html">Get a Free Strategy Call</a>
          </p>
        </div>
      </div>
    </div>
  </div>
  {/* Section Case Studies */}
  <div className="section p-0">
    <div className="hero-container">
      <div className="case-studies-layout">
        <div className="card card-case-studies">
          <div className="row row-cols-xl-2 row-cols-1 grid-spacer-5">
            <div className="col">
              <div
                className="d-flex flex-column gspace-2 animate-box animated animate__animated"
                data-animate="animate__fadeInLeft"
              >
                <div className="sub-heading">
                  <i className="fa-regular fa-circle-dot" />
                  <span>Case Studies</span>
                </div>
                <h2 className="title-heading">
                  See How We Help Businesses Thrive
                </h2>
              </div>
            </div>
            <div className="col">
              <div
                className="d-flex flex-column h-100 justify-content-end gspace-2 animate-box animated animate__animated"
                data-animate="animate__fadeInRight"
              >
                <p>
                  We don't just talk about results—we deliver them. Here are
                  some of our most impactful case studies showcasing how our
                  digital marketing strategies drive success.
                </p>
                <div className="link-wrapper">
                  <a href="./case_studies.html">More Case Studies</a>
                  <i className="fa-solid fa-circle-arrow-right" />
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column gspace-2">
            <div className="d-flex flex-column flex-xl-row gspace-2">
              <div
                className="card case-studies-content local-business animate-box animated fast animate__animated"
                data-animate="animate__fadeInUp"
              >
                <div className="case-studies-component large align-self-end justify-content-end align-items-end">
                  <div className="cs-component">
                    <a href="#">Social</a>
                  </div>
                  <div className="cs-component">
                    <a href="#">Influencer</a>
                  </div>
                  <div className="cs-component">
                    <a href="#">Retargeting</a>
                  </div>
                  <div className="cs-component">
                    <a href="#">Google</a>
                  </div>
                  <div className="cs-component">
                    <a href="#">Video</a>
                  </div>
                  <div className="cs-component">
                    <a href="#">Local</a>
                  </div>
                  <div className="cs-component">
                    <a href="#">Community</a>
                  </div>
                </div>
                <div className="d-flex flex-column gspace-2">
                  <a href="#" className="case-studies-title">
                    <h4>Local Business Digital Transformation</h4>
                  </a>
                  <p>
                    5x ROI on social media campaigns &amp; 80% increase in
                    engagement lorem ipsum dolor sit amet consectetur.
                  </p>
                </div>
              </div>
              <div
                className="card case-studies-content saas-leads animate-box animated animate__animated"
                data-animate="animate__fadeInUp"
              >
                <div className="d-flex flex-column gspace-2">
                  <a href="#" className="case-studies-title">
                    <h4>SaaS Lead Generation Success</h4>
                  </a>
                  <p>
                    150% increase in qualified leads &amp; 70% lower customer
                    acquisition cost.
                  </p>
                </div>
                <div className="case-studies-component small align-self-end justify-content-end align-items-end">
                  <div className="cs-component">
                    <a href="#">Content</a>
                  </div>
                  <div className="cs-component">
                    <a href="#">Linkeind Ads</a>
                  </div>
                  <div className="cs-component">
                    <a href="#">Email</a>
                  </div>
                  <div className="cs-component">
                    <a href="#">Webinar</a>
                  </div>
                  <div className="cs-component">
                    <a href="#">Landing</a>
                  </div>
                  <div className="cs-component">
                    <a href="#">CRM</a>
                  </div>
                  <div className="cs-component">
                    <a href="#">Retargeting</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex flex-column flex-xl-row gspace-2">
              <div
                className="card case-studies-content ecommerce animate-box animated fast animate__animated"
                data-animate="animate__fadeInUp"
              >
                <div className="case-studies-component small align-self-start justify-content-start align-items-start">
                  <div className="cs-component">
                    <a href="#">SEO</a>
                  </div>
                  <div className="cs-component">
                    <a href="#">PPC Ads</a>
                  </div>
                  <div className="cs-component">
                    <a href="#">CRO</a>
                  </div>
                  <div className="cs-component">
                    <a href="#">Analytics</a>
                  </div>
                  <div className="cs-component">
                    <a href="#">Influencer</a>
                  </div>
                  <div className="cs-component">
                    <a href="#">A/B Testing</a>
                  </div>
                  <div className="cs-component">
                    <a href="#">Email</a>
                  </div>
                </div>
                <div className="d-flex flex-column gspace-2">
                  <a href="#" className="case-studies-title">
                    <h4>E-Commerce Growth Boost</h4>
                  </a>
                  <p>
                    3x increase in organic traffic &amp; 2x revenue growth in 6
                    months lorem ipsum dolor.
                  </p>
                </div>
              </div>
              <div
                className="card case-studies-content startup-branding animate-box animated animate__animated"
                data-animate="animate__fadeInUp"
              >
                <div className="d-flex flex-column gspace-2">
                  <a href="#" className="case-studies-title">
                    <h4>Startup Brand Awareness Expansion</h4>
                  </a>
                  <p>
                    200% increase in brand mentions &amp; 60% higher engagement
                    rates lorem ipsum dolor sit amet consectetur.
                  </p>
                </div>
                <div className="case-studies-component large align-self-start justify-content-start align-items-start">
                  <div className="cs-component">
                    <a href="#">Viral</a>
                  </div>
                  <div className="cs-component">
                    <a href="#">Partnership</a>
                  </div>
                  <div className="cs-component">
                    <a href="#">PR</a>
                  </div>
                  <div className="cs-component">
                    <a href="#">Growth</a>
                  </div>
                  <div className="cs-component">
                    <a href="#">UGC</a>
                  </div>
                  <div className="cs-component">
                    <a href="#">Media</a>
                  </div>
                  <div className="cs-component">
                    <a href="#">Brading</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="spacer" />
      </div>
    </div>
  </div>
  {/* Section Testimonial */}
  <div className="section">
    <div className="hero-container">
      <div className="d-flex flex-column gspace-5">
        <div className="d-flex flex-column flex-xl-row gspace-5">
          <div className="testimonial-reviewer-container">
            <div
              className="testimonial-header-wrapper animate-box animated fast animate__animated"
              data-animate="animate__fadeInDown"
            >
              <div className="card card-testimonial-reviewer">
                <div className="d-flex flex-column flex-md-row flex-xl-column justify-content-between gspace-3">
                  <div className="testimonial-reviewer">
                    <div className="avatar-container">
                      <img
                        src="/images/Photo-14.jpg"
                        alt="Testimonial Reviewer"
                        className="avatar"
                      />
                      <img
                        src="/images/Photo-1.jpg"
                        alt="Testimonial Reviewer"
                        className="avatar"
                      />
                      <img
                        src="/images/Photo-2.jpg"
                        alt="Testimonial Reviewer"
                        className="avatar"
                      />
                      <img
                        src="/images/Photo-6.jpg"
                        alt="Testimonial Reviewer"
                        className="avatar"
                      />
                    </div>
                    <div className="detail">
                      <h6>2.7k Positive</h6>
                      <h6>Reviews</h6>
                    </div>
                  </div>
                  <div className="testimonial-rating-container">
                    <div className="d-flex flex-column justify-content-center align-items-center gspace-1">
                      <div className="d-flex flex-row align-items-center">
                        <span className="counter" data-target={90} />
                        <span className="counter-detail">%</span>
                      </div>
                      <p>Improved Project</p>
                    </div>
                    <div className="underline-vertical" />
                    <div className="d-flex flex-column justify-content-center align-items-center gspace-1">
                      <div className="d-flex flex-row align-items-center">
                        <span className="counter" data-target={49} />
                        <span className="counter-detail">%</span>
                      </div>
                      <p>New Project</p>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-column flex-md-row flex-xl-column justify-content-center gspace-2">
                  <div className="testimonial-header-link-wrapper">
                    <i className="fa-regular fa-circle-check accent-color" />
                    <a href="#">Social Media Growth</a>
                  </div>
                  <div className="testimonial-header-link-wrapper">
                    <i className="fa-regular fa-circle-check accent-color" />
                    <a href="#">Performance Marketing</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="testimonial-title-container">
            <div
              className="testimonial-header-wrapper-title animate-box animated animate__animated"
              data-animate="animate__fadeInRight"
            >
              <div className="card-testimonial-header-title">
                <div className="sub-heading">
                  <i className="fa-regular fa-circle-dot" />
                  <span>What Our Client Says</span>
                </div>
                <h2 className="title-heading">
                  Hear from Our Satisfied Clients, Real Success Stories
                </h2>
                <p>
                  Discover how businesses like yours achieved outstanding growth
                  with Marko's expert digital marketing solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column">
          <div className="overflow-hidden">
            <div className="swiper swiperTestimonial">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="card card-testimonial">
                    <div className="stars">
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                    </div>
                    <div className="d-flex flex-row align-items-center justify-content-between">
                      <div className="d-flex flex-row gspace-2">
                        <div className="testimonial-image">
                          <img
                            src="/images/Photo-13.jpg"
                            alt="Testimonial Image"
                            className="img-fluid"
                          />
                        </div>
                        <div className="d-flex flex-column">
                          <span className="profile-name">Emma Richard</span>
                          <p className="profile-info">CEO Nexatech</p>
                        </div>
                      </div>
                      <i className="fa-solid fa-3x fa-quote-right accent-color" />
                    </div>
                    <p className="testimonial-description">
                      “Marko completely transformed our online presence! Their
                      digital marketing strategies helped us double our revenue
                      in just six months.”
                    </p>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="card card-testimonial">
                    <div className="stars">
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                    </div>
                    <div className="d-flex flex-row align-items-center justify-content-between">
                      <div className="d-flex flex-row gspace-2">
                        <div className="testimonial-image">
                          <img
                            src="/images/Photo-8.jpg"
                            alt="Testimonial Image"
                            className="img-fluid"
                          />
                        </div>
                        <div className="d-flex flex-column">
                          <span className="profile-name">David Mont</span>
                          <p className="profile-info">Marketing Director</p>
                        </div>
                      </div>
                      <i className="fa-solid fa-3x fa-quote-right accent-color" />
                    </div>
                    <p className="testimonial-description">
                      “We've worked with many agencies before, but Marko stands
                      out. Their data-driven approach and creative solutions
                      gave us an edge over competitors.”
                    </p>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="card card-testimonial">
                    <div className="stars">
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                    </div>
                    <div className="d-flex flex-row align-items-center justify-content-between">
                      <div className="d-flex flex-row gspace-2">
                        <div className="testimonial-image">
                          <img
                            src="/images/Photo-11.jpg"
                            alt="Testimonial Image"
                            className="img-fluid"
                          />
                        </div>
                        <div className="d-flex flex-column">
                          <span className="profile-name">Sophia Lewis</span>
                          <p className="profile-info">Founder</p>
                        </div>
                      </div>
                      <i className="fa-solid fa-3x fa-quote-right accent-color" />
                    </div>
                    <p className="testimonial-description">
                      “From SEO to paid ads, Marko nailed every aspect of our
                      campaign. Our website traffic skyrocketed, and lead
                      generation has never been better!”
                    </p>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="card card-testimonial">
                    <div className="stars">
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                    </div>
                    <div className="d-flex flex-row align-items-center justify-content-between">
                      <div className="d-flex flex-row gspace-2">
                        <div className="testimonial-image">
                          <img
                            src="/images/Photo-12.jpg"
                            alt="Testimonial Image"
                            className="img-fluid"
                          />
                        </div>
                        <div className="d-flex flex-column">
                          <span className="profile-name">James Peterson</span>
                          <p className="profile-info">COO, BrightWave</p>
                        </div>
                      </div>
                      <i className="fa-solid fa-3x fa-quote-right accent-color" />
                    </div>
                    <p className="testimonial-description">
                      “Highly professional and results-oriented. Marko's
                      expertise in branding and content marketing helped us
                      build a strong online identity.”
                    </p>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="card card-testimonial">
                    <div className="stars">
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                    </div>
                    <div className="d-flex flex-row align-items-center justify-content-between">
                      <div className="d-flex flex-row gspace-2">
                        <div className="testimonial-image">
                          <img
                            src="/images/Photo-13.jpg"
                            alt="Testimonial Image"
                            className="img-fluid"
                          />
                        </div>
                        <div className="d-flex flex-column">
                          <span className="profile-name">Emma Richard</span>
                          <p className="profile-info">CEO Nexatech</p>
                        </div>
                      </div>
                      <i className="fa-solid fa-3x fa-quote-right accent-color" />
                    </div>
                    <p className="testimonial-description">
                      “Marko completely transformed our online presence! Their
                      digital marketing strategies helped us double our revenue
                      in just six months.”
                    </p>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="card card-testimonial">
                    <div className="stars">
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                    </div>
                    <div className="d-flex flex-row align-items-center justify-content-between">
                      <div className="d-flex flex-row gspace-2">
                        <div className="testimonial-image">
                          <img
                            src="/images/Photo-8.jpg"
                            alt="Testimonial Image"
                            className="img-fluid"
                          />
                        </div>
                        <div className="d-flex flex-column">
                          <span className="profile-name">David Mont</span>
                          <p className="profile-info">Marketing Director</p>
                        </div>
                      </div>
                      <i className="fa-solid fa-3x fa-quote-right accent-color" />
                    </div>
                    <p className="testimonial-description">
                      “We've worked with many agencies before, but Marko stands
                      out. Their data-driven approach and creative solutions
                      gave us an edge over competitors.”
                    </p>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="card card-testimonial">
                    <div className="stars">
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                    </div>
                    <div className="d-flex flex-row align-items-center justify-content-between">
                      <div className="d-flex flex-row gspace-2">
                        <div className="testimonial-image">
                          <img
                            src="/images/Photo-11.jpg"
                            alt="Testimonial Image"
                            className="img-fluid"
                          />
                        </div>
                        <div className="d-flex flex-column">
                          <span className="profile-name">Sophia Lewis</span>
                          <p className="profile-info">Founder</p>
                        </div>
                      </div>
                      <i className="fa-solid fa-3x fa-quote-right accent-color" />
                    </div>
                    <p className="testimonial-description">
                      “From SEO to paid ads, Marko nailed every aspect of our
                      campaign. Our website traffic skyrocketed, and lead
                      generation has never been better!”
                    </p>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="card card-testimonial">
                    <div className="stars">
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                    </div>
                    <div className="d-flex flex-row align-items-center justify-content-between">
                      <div className="d-flex flex-row gspace-2">
                        <div className="testimonial-image">
                          <img
                            src="/images/Photo-12.jpg"
                            alt="Testimonial Image"
                            className="img-fluid"
                          />
                        </div>
                        <div className="d-flex flex-column">
                          <span className="profile-name">James Peterson</span>
                          <p className="profile-info">COO, BrightWave</p>
                        </div>
                      </div>
                      <i className="fa-solid fa-3x fa-quote-right accent-color" />
                    </div>
                    <p className="testimonial-description">
                      “Highly professional and results-oriented. Marko's
                      expertise in branding and content marketing helped us
                      build a strong online identity.”
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Section Digital Process */}
  <div className="section-wrapper-digital-process">
    <div className="section digital-process-banner">
      <div className="hero-container">
        <div className="digital-process-content">
          <div className="row row-cols-xl-2 row-cols-1 grid-spacer-5">
            <div className="col">
              <div
                className="d-flex flex-column gspace-2 animate-box animated animate__animated"
                data-animate="animate__fadeInDown"
              >
                <div className="sub-heading">
                  <i className="fa-regular fa-circle-dot" />
                  <span>How it Work</span>
                </div>
                <h2 className="title-heading">
                  Simple Steps to Digital Success
                </h2>
              </div>
            </div>
            <div className="col">
              <div
                className="d-flex flex-column gspace-2 justify-content-end h-100  animate-box animated fast animate__animated"
                data-animate="animate__fadeInDown"
              >
                <p>
                  Our streamlined process ensures your digital growth is
                  seamless and effective. ipsum dolor sit amet, consectetur
                  adipiscing elit. In ex ligula, varius at rutrum et, finibus
                  sed felis.
                </p>
                <div className="link-wrapper">
                  <a href="./contact.html">Get Started Now</a>
                  <i className="fa-solid fa-arrow-circle-right" />
                </div>
              </div>
            </div>
          </div>
          <div className="digital-process-steps-wrapper">
            <div className="digital-process-steps">
              <div className="row row-cols-xl-4 row-cols-md-2 row-cols-1">
                <div className="col">
                  <div
                    className="digital-process-step animate-box animated animate__animated"
                    data-animate="animate__fadeInUp"
                  >
                    <div className="d-flex justify-content-between">
                      <div>
                        <img
                          src="/images/digital-marketing-icons-N952ZWA.png"
                          alt="Digital Proccess Icon"
                          className="process-icon"
                        />
                      </div>
                      <span>01</span>
                    </div>
                    <div className="d-flex flex-column gspace-2">
                      <h5>Discovery &amp; Consult</h5>
                      <p>
                        Lorem ipsum dol consectetur adipiscing elit ut elit tell
                        luctus nec ullamcorper mattis
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div
                    className="d-flex flex-md-row flex-column gspace-2 animate-box animated animate__animated"
                    data-animate="animate__fadeInDown"
                  >
                    <div className="step-spacer" />
                    <div className="digital-process-step">
                      <div className="d-flex justify-content-between">
                        <div>
                          <img
                            src="/images/Icon-11.png"
                            alt="Digital Process Icon"
                            className="process-icon"
                          />
                        </div>
                        <span>02</span>
                      </div>
                      <div className="d-flex flex-column gspace-2">
                        <h5>Strategy &amp; Planning</h5>
                        <p>
                          Lorem ipsum dol consectetur adipiscing elit ut elit
                          tell luctus nec ullamcorper mattis
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div
                    className="d-flex flex-md-row flex-column gspace-2 animate-box animated animate__animated"
                    data-animate="animate__fadeInUp"
                  >
                    <div className="step-spacer" />
                    <div className="digital-process-step">
                      <div className="d-flex justify-content-between">
                        <div>
                          <img
                            src="/images/Icon-10.png"
                            alt="Digital Process Icon"
                            className="process-icon"
                          />
                        </div>
                        <span>03</span>
                      </div>
                      <div className="d-flex flex-column gspace-2">
                        <h5>Execution &amp; Optimize</h5>
                        <p>
                          Lorem ipsum dol consectetur adipiscing elit ut elit
                          tell luctus nec ullamcorper mattis
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div
                    className="d-flex flex-md-row flex-column gspace-2 animate-box animated animate__animated"
                    data-animate="animate__fadeInDown"
                  >
                    <div className="step-spacer" />
                    <div className="digital-process-step">
                      <div className="d-flex justify-content-between">
                        <div>
                          <img
                            src="/images/Icon-12.png"
                            alt="Digital Process Icon"
                            className="process-icon"
                          />
                        </div>
                        <span>04</span>
                      </div>
                      <div className="d-flex flex-column gspace-2">
                        <h5>Result &amp; Growth</h5>
                        <p>
                          Lorem ipsum dol consectetur adipiscing elit ut elit
                          tell luctus nec ullamcorper mattis
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="spacer" />
  </div>
  {/* Section Pricing */}
  <div className="section">
    <div className="hero-container">
      <div className="d-flex flex-column justify-content-center text-center gspace-5">
        <div
          className="d-flex flex-column gspace-2 animate-box animated animate__animated"
          data-animate="animate__fadeInUp"
        >
          <div className="sub-heading align-self-center">
            <i className="fa-regular fa-circle-dot" />
            <span>Our Core Services</span>
          </div>
          <h2 className="title-heading heading-container heading-container-short">
            Flexible Pricing Plans for Every Business
          </h2>
        </div>
        <div className="row row-cols-xl-3 row-cols-1 grid-spacer-2">
          <div className="col">
            <div className="pricing-container">
              <div
                className="card card-pricing-title animate-box animated animate__animated"
                data-animate="animate__fadeInLeft"
              >
                <div className="spacer" />
                <div className="content">
                  <h3 className="title-heading">
                    Let's Find the Right Strategy for You!
                  </h3>
                  <div className="link-wrapper">
                    <a href=".contact.html">Book a Free Consultation</a>
                    <i className="fa-solid fa-arrow-circle-right" />
                  </div>
                </div>
              </div>
              <div
                className="card card-pricing animate-box animated animate__animated"
                data-animate="animate__fadeInUp"
              >
                <h4>Starter</h4>
                <p>Perfect for startups &amp; small businesses</p>
                <div className="d-flex flex-row gspace-1 align-items-center h-100">
                  <h3>$99</h3>
                  <p>/Month</p>
                </div>
                <a href="#" className="btn btn-accent">
                  <div className="btn-title">
                    <span>View Details</span>
                  </div>
                  <div className="icon-circle">
                    <i className="fa-solid fa-arrow-right" />
                  </div>
                </a>
                <ul className="check-list">
                  <li>
                    <a href="./single_services.html">
                      Basic SEO &amp; Marketing
                    </a>
                  </li>
                  <li>
                    <a href="./single_services.html">
                      Social Media Management (1 Platform)
                    </a>
                  </li>
                  <li>
                    <a href="./single_services.html">
                      Monthly Performance Report
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="card card-pricing pricing-highlight animate-box animated slow animate__animated"
              data-animate="animate__fadeInUp"
            >
              <div className="spacer" />
              <h4>Enterprise</h4>
              <p>Full scale marketing for maximum impact</p>
              <div className="d-flex flex-row gspace-1 align-items-center">
                <h3>$399</h3>
                <p>/Month</p>
              </div>
              <a href="#" className="btn btn-accent">
                <div className="btn-title">
                  <span>View Details</span>
                </div>
                <div className="icon-circle">
                  <i className="fa-solid fa-arrow-right" />
                </div>
              </a>
              <div className="core-benefits">
                <div className="benefit">
                  <i className="fa-solid fa-brain" />
                  <a href="#">Dedicated Account Manager</a>
                </div>
                <div className="benefit">
                  <i className="fa-brands fa-accessible-icon" />
                  <a href="#">Priority Support 24/7</a>
                </div>
                <div className="benefit">
                  <i className="fa-solid fa-bug" />
                  <a href="#">Customized Growth Strength</a>
                </div>
              </div>
              <ul className="check-list">
                <li>
                  <a href="#">Complate Digital Marketing Suite</a>
                </li>
                <li>
                  <a href="#">Paid Ads Management</a>
                </li>
                <li>
                  <a href="#">Dedicated Account Manager</a>
                </li>
                <li>
                  <a href="#">Email Marketing &amp; Automation</a>
                </li>
                <li>
                  <a href="#">Dedicated Account Manager</a>
                </li>
                <li>
                  <a href="#">Weekly Performance insights</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col">
            <div className="pricing-container">
              <div
                className="card pricing-highlight-box animate-box animated animate__animated"
                data-animate="animate__fadeInRight"
              >
                <div className="d-flex flex-column gspace-2 w-100">
                  <h5>Your Growth, Our Priority!</h5>
                  <div className="d-flex flex-column gspace-2">
                    <div className="pricing-highlights">
                      <a href="#">Data-Driven Digital Marketing</a>
                      <i className="fa-solid fa-arrow-circle-right" />
                    </div>
                    <div className="pricing-highlights">
                      <a href="#">Proven Strategies for Higher</a>
                      <i className="fa-solid fa-arrow-circle-right" />
                    </div>
                    <div className="pricing-highlights">
                      <a href="#">Scalable Solution for Every Business</a>
                      <i className="fa-solid fa-arrow-circle-right" />
                    </div>
                  </div>
                </div>
                <div className="spacer" />
              </div>
              <div
                className="card card-pricing animate-box animated animate__animated"
                data-animate="animate__fadeInUp"
              >
                <h4>Growth</h4>
                <p>Best for growing businesses ready</p>
                <div className="d-flex flex-row gspace-1 align-items-center h-100">
                  <h3>$299</h3>
                  <p>/Month</p>
                </div>
                <a href="#" className="btn btn-accent">
                  <div className="btn-title">
                    <span>View Details</span>
                  </div>
                  <div className="icon-circle">
                    <i className="fa-solid fa-arrow-right" />
                  </div>
                </a>
                <ul className="check-list">
                  <li>
                    <a href="./single_services.html">
                      Basic SEO &amp; Marketing
                    </a>
                  </li>
                  <li>
                    <a href="./single_services.html">
                      Social Media Management (1 Platform)
                    </a>
                  </li>
                  <li>
                    <a href="./single_services.html">
                      Monthly Performance Report
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Section Newsletter */}
  <div className="section">
    <div className="hero-container">
      <div className="newsletter-wrapper">
        <div className="newsletter-layout">
          <div className="spacer" />
          <div className="d-flex flex-column gspace-5 position-relative z-2">
            <div
              className="d-flex flex-column gspace-2 animate-box animated animate__animated"
              data-animate="animate__fadeInLeft"
            >
              <h3 className="title-heading">Stay Ahead in Digital Marketing</h3>
              <p>
                Get exclusive insights, trends, and strategies delivered
                straight to your inbox. Subscribe now!
              </p>
            </div>
            <div id="newsletter-success" className="alert success hidden">
              <span className="check-icon">
                <i className="fa-solid fa-2xl fa-check" />
              </span>
              <p className="text-center">
                Thank you! Form submitted successfully.
              </p>
            </div>
            <div id="newsletter-error" className="alert error hidden">
              <span className="cross-icon">
                <i className="fa-solid fa-2xl fa-xmark" />
              </span>
              <p className="text-center">
                Oops! Form submission failed. Please try again.
              </p>
            </div>
            <form
              action="./php/newsletter_process.php"
              method="POST"
              id="newsletterForm"
              className="needs-validation animate-box animated animate__animated"
              data-animate="animate__fadeInRight"
            >
              <div className="input-container">
                <input
                  type="email"
                  name="newsletter-email"
                  id="newsletter-email"
                  placeholder="Give your best email"
                  required=""
                />
                <p className="error-text hidden" />
              </div>
              <button className="btn btn-accent" type="submit">
                <span className="btn-title">
                  <span>Subscribe</span>
                </span>
                <span className="icon-circle">
                  <i className="fa-solid fa-arrow-right" />
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Section Blog */}
  <div className="section">
    <div className="hero-container">
      <div className="d-flex flex-column gspace-5">
        <div className="row row-cols-xl-2 row-cols-1 grid-spacer-5 m-0">
          <div className="col col-xl-8 ps-0 pe-0">
            <div
              className="d-flex flex-column gspace-2 animate-box animated fast animate__animated"
              data-animate="animate__fadeInLeft"
            >
              <div className="sub-heading">
                <i className="fa-regular fa-circle-dot" />
                <span>Insights &amp; Trends</span>
              </div>
              <h2 className="title-heading">
                Latest Digital Marketing Strategies &amp; Tips
              </h2>
            </div>
          </div>
          <div className="col col-xl-4 ps-0 pe-0">
            <div
              className="d-flex flex-column gspace-2 justify-content-end h-100 animate-box animated animate__animated"
              data-animate="animate__fadeInRight"
            >
              <p>
                Explore our latest blog articles covering industry trends,
                expert insights, and actionable strategies to elevate your
                digital marketing game.
              </p>
              <div className="link-wrapper">
                <a href="./blog.html">View All Articles</a>
                <i className="fa-solid fa-circle-arrow-right" />
              </div>
            </div>
          </div>
        </div>
        <div className="row row-cols-md-2 row-cols-1 grid-spacer-3">
          <div className="col">
            <div
              className="card card-blog animate-box animated animate__animated"
              data-animate="animate__fadeInUp"
              onclick="window.location.href='single_post.html'"
            >
              <div className="blog-image">
                <img
                  src="/images/collaborative-process-of-multicultural-skilled-peo-AN9FZBQ-1024x683.jpg"
                  alt="Blog Image"
                />
              </div>
              <div className="card-body">
                <div className="d-flex flex-row gspace-2">
                  <div className="d-flex flex-row gspace-1 align-items-center">
                    <i className="fa-solid fa-calendar accent-color" />
                    <span className="meta-data">April 14, 2025</span>
                  </div>
                  <div className="d-flex flex-row gspace-1 align-items-center">
                    <i className="fa-solid fa-folder accent-color" />
                    <span className="meta-data">Social Media</span>
                  </div>
                </div>
                <a href="./single_post.html" className="blog-link">
                  Mastering Instagram and Facebook Ads
                </a>
                <p>
                  Lorem ipsum dolor si consectetur adipiscing elit ut elit
                  tellus luctus nec ullamcorper mattis pulvinar dapibus leo.
                </p>
                <a href="./single_post.html" className="read-more">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="card card-blog animate-box animated animate__animated"
              data-animate="animate__fadeInUp"
              onclick="window.location.href='single_post.html'"
            >
              <div className="blog-image">
                <img
                  src="/images/collaborative-process-of-multicultural-skilled-peo-LY58K9U-1024x683.jpg"
                  alt="Blog Image"
                />
              </div>
              <div className="card-body">
                <div className="d-flex flex-row gspace-2">
                  <div className="d-flex flex-row gspace-1 align-items-center">
                    <i className="fa-solid fa-calendar accent-color" />
                    <span className="meta-data">April 14, 2025</span>
                  </div>
                  <div className="d-flex flex-row gspace-1 align-items-center">
                    <i className="fa-solid fa-folder accent-color" />
                    <span className="meta-data">SEO</span>
                  </div>
                </div>
                <a href="./single_post.html" className="blog-link">
                  Growth Strategies for Digital Business
                </a>
                <p>
                  Lorem ipsum dolor si consectetur adipiscing elit ut elit
                  tellus luctus nec ullamcorper mattis pulvinar dapibus leo.
                </p>
                <a href="./single_post.html" className="read-more">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>

  );
}
