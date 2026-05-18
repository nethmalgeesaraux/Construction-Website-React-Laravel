import AboutImg from '../../assets/about-us.jpg';
import Footer from '../pages/Footer';
import Hearder from '../pages/Header';
import ServiceImg from '../../assets/construction1.jpg';
import ServiceImg2 from '../../assets/construction2.jpg';
import ServiceImg3 from '../../assets/construction3.jpg';
import ServiceImg4 from '../../assets/construction6.jpg';
import ProjectImg from '../../assets/construction4.jpg';
import ProjectImg2 from '../../assets/construction7.jpg';
import ProjectImg3 from '../../assets/construction8.jpg';
import ProjectImg4 from '../../assets/construction9.jpg';


const Home = () => {
    return (
        <>

            <Hearder />

            <main>

                {/* Hero Section */}
                <section className='section-1'>
                    <div className='hero d-flex align-items-center'>
                        <div className='container-fluid text-center'>
                            <div className='text-center'>
                                <span>Welcome Amazing Constructions</span>
                                <h1>Crafting dreams with <br />precision and excellence.</h1>
                                <p>We excel at transforming visions into reality through outstanding craftsmanship and precise
                                    <br />attention to detail. With years of experience and a dedication to quality.</p>
                                <a className='btn btn-primary'>Contact Now</a>
                                <a className='btn btn-secondary'>View Projects</a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* About Us Section */}
                <section className='section-2 py-5'>
                    <div className='container py-5'>
                        <div className='row'>
                            <div className='col-md-6'>
                                <img src={AboutImg} className='w-100' />
                            </div>
                            <div className='col-md-6'>
                                <span>about us</span>
                                <h2>Crafting structures that last a lifetime</h2>
                                <p>Building enduring structures requires a comprehensive approach that combines advanced materials,
                                    resilient design, routine maintenance, and sustainable practices.
                                    By drawing on historical insights and utilizing modern technology.</p>
                                <p>Designing structures that stand the test of time involves a seamless blend of cutting-edge materials,
                                    durable design, ongoing upkeep, and eco-friendly practices.
                                    By combining lessons from the past with the power of modern technology.</p>
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
                                        <img src={ServiceImg2} className='w-100' />
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
                                        <img src={ServiceImg3} className='w-100' />
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
                                        <img src={ServiceImg4} className='w-100' />
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
                            <h2>Discover our wide variety of projects.</h2>
                            <p>
                                Created in close partnership with our clients and collaborators, this
                                approach merges industry expertise,<br />
                                decades of experience, innovation, and flexibility to consistently
                                deliver excellence.
                            </p>
                        </div>
                    </div>
                </section>


                {/* Our Project Section */}
                <section class="section-3 bg-light py-5">
                    <div class="container-fluid py-5">
                        <div class="section-header text-center">
                            <span>our Projects</span>
                            <h2>Our featured projects</h2>
                            <p>
                                Explore selected projects completed by our team across residential,
                                commercial, renovation, and custom construction categories.
                            </p>
                        </div>

                        <div className='row pt-4'>
                            <div className='col-md-3 col-lg-3'>
                                <div className='item'>
                                    <div className='service-image'>
                                        <img src={ProjectImg} className='w-100' />
                                    </div>
                                    <div className='service-body'>
                                        <div className='service-title'>
                                            <h3>Modern Villa Build</h3>
                                        </div>
                                        <div className='service-content'>
                                            <p>
                                                A complete residential build focused on open-space living,
                                                premium finishes, and long-term structural quality.
                                            </p>
                                        </div>
                                        <a href='#' className='btn btn-primary'>Read More</a>
                                    </div>
                                </div>
                            </div>

                            <div className='col-md-3 col-lg-3'>
                                <div className='item'>
                                    <div className='service-image'>
                                        <img src={ProjectImg2} className='w-100' />
                                    </div>
                                    <div className='service-body'>
                                        <div className='service-title'>
                                            <h3>Retail Complex Project</h3>
                                        </div>
                                        <div className='service-content'>
                                            <p>
                                                A commercial development delivered with efficient scheduling,
                                                durable materials, and functional storefront planning.
                                            </p>
                                        </div>
                                        <a href='#' className='btn btn-primary'>Read More</a>
                                    </div>
                                </div>
                            </div>


                            <div className='col-md-3 col-lg-3'>
                                <div className='item'>
                                    <div className='service-image'>
                                        <img src={ProjectImg3} className='w-100' />
                                    </div>
                                    <div className='service-body'>
                                        <div className='service-title'>
                                            <h3>Office Renovation</h3>
                                        </div>
                                        <div className='service-content'>
                                            <p>
                                                This renovation transformed an outdated office into a modern,
                                                productive workspace with improved interior flow.
                                            </p>
                                        </div>
                                        <a href='#' className='btn btn-primary'>Read More</a>
                                    </div>
                                </div>
                            </div>


                            <div className='col-md-3 col-lg-3'>
                                <div className='item'>
                                    <div className='service-image'>
                                        <img src={ProjectImg4} className='w-100' />
                                    </div>
                                    <div className='service-body'>
                                        <div className='service-title'>
                                            <h3>Custom Industrial Unit</h3>
                                        </div>
                                        <div className='service-content'>
                                            <p>
                                                A specialized industrial project completed with custom engineering
                                                solutions for operational safety and performance.
                                            </p>
                                        </div>
                                        <a href='#' className='btn btn-primary'>Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </section>

            </main>

            <Footer />




        </>


    )
}

export default Home
