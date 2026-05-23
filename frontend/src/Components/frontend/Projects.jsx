import Footer from "../common/Footer"
import Header from "../common/Header"
import ProjectImg from '../../assets/construction4.jpg';

const Projects = () => {
    return (
        <div>

            <Header />

            <section className='section-7'>
                <div className='hero d-flex align-items-center'>
                    <div className='container'>
                        <div className='text-left'>
                            <span>Quality. Integrity. Value.</span>
                            <h1>Our Projects</h1>
                            <p>We excel at transforming visions into reality <br />through outstanding craftsmanship and precise.</p>
                        </div>
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
                                        <img src={ProjectImg} className='w-100' />
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
                                        <img src={ProjectImg} className='w-100' />
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
                                        <img src={ProjectImg} className='w-100' />
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

            <Footer />
        </div>
    )
}

export default Projects