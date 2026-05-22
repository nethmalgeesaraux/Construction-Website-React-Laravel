import Footer from "../pages/Footer"
import Header from "../pages/Header"
import ServiceImg from '../../assets/construction1.jpg';

const Services = () => {
  return (
    <div>
        
       <Header/>

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
                        <section class="section-3 bg-light py-5">
                            <div class="container-fluid py-5">
                                <div class="section-header text-center">
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
        
       <Footer/>
        
    </div>
  )
}

export default Services