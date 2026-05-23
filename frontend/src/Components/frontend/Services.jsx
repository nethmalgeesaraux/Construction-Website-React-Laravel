import Footer from "../common/Footer"
import Header from "../common/Header"
import ServiceImg from '../../assets/construction1.jpg';

const Services = () => {
  return (
    <div>

      <Header />

      <section className='section-7'>
        <div className='hero d-flex align-items-center'>
          <div className='container'>
            <div className='text-left'>
              <span>Quality. Integrity. Value.</span>
              <h1>Services</h1>
              <p>We excel at transforming visions into reality <br />through outstanding craftsmanship and precise.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Service Section */}
      <section className="section-3 bg-light py-5">
        <div className="container-fluid py-5">
          <div className="section-header text-center">
            <span>our services</span>
            <h2>Our construction services</h2>
            <p>
              We offer a diverse array of construction services, spanning residential,
              commercial, and industrial projects.
            </p>
          </div>

          <div className='row pt-4'>
            <div className='col-md-3 col-lg-3'>
              <div className='item'>
                <div className='service-image'>
                  <img src={ServiceImg} className='w-100' />
                </div>
                <div className='service-body'>
                  <div className='service-title'>
                    <h3>Residential Construction</h3>
                  </div>
                  <div className='service-content'>
                    <p>
                      We build safe and modern homes with quality materials,
                      smart layouts, and reliable project timelines.
                    </p>
                  </div>
                  <a href='#' className='btn btn-primary'>Read More</a>
                </div>
              </div>
            </div>

            <div className='col-md-3 col-lg-3'>
              <div className='item'>
                <div className='service-image'>
                  <img src={ServiceImg} className='w-100' />
                </div>
                <div className='service-body'>
                  <div className='service-title'>
                    <h3>Commercial Projects</h3>
                  </div>
                  <div className='service-content'>
                    <p>
                      From offices to retail spaces, we deliver durable commercial
                      buildings designed for performance and growth.
                    </p>
                  </div>
                  <a href='#' className='btn btn-primary'>Read More</a>
                </div>
              </div>
            </div>


            <div className='col-md-3 col-lg-3'>
              <div className='item'>
                <div className='service-image'>
                  <img src={ServiceImg} className='w-100' />
                </div>
                <div className='service-body'>
                  <div className='service-title'>
                    <h3>Renovation Services</h3>
                  </div>
                  <div className='service-content'>
                    <p>
                      We upgrade existing spaces with practical redesigns,
                      structural improvements, and clean finishing.
                    </p>
                  </div>
                  <a href='#' className='btn btn-primary'>Read More</a>
                </div>
              </div>
            </div>


            <div className='col-md-3 col-lg-3'>
              <div className='item'>
                <div className='service-image'>
                  <img src={ServiceImg} className='w-100' />
                </div>
                <div className='service-body'>
                  <div className='service-title'>
                    <h3>Specialty Construction</h3>
                  </div>
                  <div className='service-content'>
                    <p>
                      Our team handles specialized builds that require technical
                      expertise, precision, and custom construction methods.
                    </p>
                  </div>
                  <a href='#' className='btn btn-primary'>Read More</a>
                </div>
              </div>
            </div>
          </div>


        </div>
      </section>

      {/* Why Choose Us */}
      <section className='section-4 py-5'>
        <div className='container py-5'>
          <div className='section-header text-center'>
            <span>Why Choose Us</span>
            <h2>Built for quality, speed, and trust.</h2>
            <p>
              We combine skilled craftsmanship, transparent communication, and
              proven workflows to deliver reliable results for every project.
            </p>
          </div>

          <div className='row g-4 pt-4'>
            <div className='col-md-4'>
              <div className='why-card h-100'>
                <div className='why-icon'>
                  <svg width='54' height='54' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M9 18H15' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' />
                    <path d='M10 21H14' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' />
                    <path d='M12 2V3.5M4.93 4.93L6 6M19.07 4.93L18 6M2 12H3.5M20.5 12H22' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' />
                    <path d='M8 10.5C8 8.01 10.01 6 12.5 6C14.99 6 17 8.01 17 10.5C17 12.35 15.87 13.93 14.26 14.61C13.78 14.81 13.5 15.29 13.5 15.81V16.5H11.5V15.78C11.5 15.29 11.22 14.83 10.77 14.63C9.21 13.93 8 12.33 8 10.5Z' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' strokeLinejoin='round' />
                  </svg>
                </div>
                <h3>Smart Planning</h3>
                <p>
                  We plan each phase with clear timelines and practical execution steps
                  to reduce delays and control project costs.
                </p>
              </div>
            </div>

            <div className='col-md-4'>
              <div className='why-card h-100'>
                <div className='why-icon'>
                  <svg width='54' height='54' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M7.5 20C6.67 20 6 19.33 6 18.5C6 17.67 6.67 17 7.5 17H10.2C11.2 17 12.16 16.6 12.87 15.89L14.27 14.49' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' />
                    <path d='M14.5 8.2C14.5 10.08 12.98 11.6 11.1 11.6C9.22 11.6 7.7 10.08 7.7 8.2C7.7 6.32 9.22 4.8 11.1 4.8C12.98 4.8 14.5 6.32 14.5 8.2Z' stroke='currentColor' strokeWidth='1.8' />
                    <path d='M15.5 17.5L17.2 16.2C18.67 15.08 20 13.61 20 11.5C20 9 18.1 7.2 15.9 7.2C15 7.2 14.12 7.51 13.4 8.07' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' />
                    <path d='M3.5 13.6L6 11.7C6.56 11.27 7.34 11.33 7.83 11.83L9 13' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' />
                  </svg>
                </div>
                <h3>Expert Team</h3>
                <p>
                  Our experienced engineers and builders handle every stage with
                  attention to detail and high construction standards.
                </p>
              </div>
            </div>

            <div className='col-md-4'>
              <div className='why-card h-100'>
                <div className='why-icon'>
                  <svg width='54' height='54' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M12 3L14.47 7.81L19.78 8.59L15.89 12.34L16.82 17.65L12 15.08L7.18 17.65L8.11 12.34L4.22 8.59L9.53 7.81L12 3Z' stroke='currentColor' strokeWidth='1.8' strokeLinejoin='round' />
                    <path d='M2.5 13.5V8.5M21.5 13.5V8.5M5.5 10.5L3.5 8.5L1.5 10.5M22.5 10.5L20.5 8.5L18.5 10.5' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' strokeLinejoin='round' />
                    <path d='M7 20H17' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' />
                  </svg>
                </div>
                <h3>Reliable Delivery</h3>
                <p>
                  We focus on long-term durability, safety, and finish quality so your
                  project remains strong and valuable for years.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

    </div>
  )
}

export default Services
