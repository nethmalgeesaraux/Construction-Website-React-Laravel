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
import AvatarImg from '../../assets/author-2.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';



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

                        <div className='row g-4 pt-4 why-choose-grid'>
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
                                    <h3>Cutting-Edge Solutions</h3>
                                    <p>
                                        Small actions create big impacts. It all begins and ends with each
                                        employee committing to safer work practices daily, ensuring they return
                                        home safely.
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
                                    <h3>Trusted Team Expertise</h3>
                                    <p>
                                        Our experienced professionals manage every phase with attention to
                                        detail, transparent communication, and dependable delivery standards.
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
                                    <h3>Quality You Can Rely On</h3>
                                    <p>
                                        We use proven materials and strict quality checks to ensure every
                                        completed project delivers lasting value and performance.
                                    </p>
                                </div>
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


                {/* Testimonials Section */}
                <section className='section-5 py-5'>
                    <div className='container'>
                        <div className='section-header text-center'>
                            <span>Testimonials</span>
                            <h2>What people are saying about us</h2>
                            <p>
                                We offer a diverse array of construction services, spanning residential,
                                commercial, and industrial projects.
                            </p>
                        </div>

                        <Swiper
                            spaceBetween={50}
                            slidesPerView={3}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                        >
                            <SwiperSlide>

                                <div className="card shadow border-0">
                                    <div className="card-body p-4">
                                        <div className="rating">
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="20"
                                                fill="currentColor"
                                                class="bi bi-star-fill"
                                                viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.951l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 
                                                        4.898.696c.441.062.612.633.282.951l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 
                                                        13.187l-4.389 2.256z"/>
                                            </svg>

                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="20"
                                                fill="currentColor"
                                                class="bi bi-star-fill"
                                                viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.951l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 
                                                        4.898.696c.441.062.612.633.282.951l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 
                                                        13.187l-4.389 2.256z"/>
                                            </svg>

                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="20"
                                                fill="currentColor"
                                                class="bi bi-star-fill"
                                                viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.951l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 
                                                        4.898.696c.441.062.612.633.282.951l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 
                                                        13.187l-4.389 2.256z"/>
                                            </svg>

                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="20"
                                                fill="currentColor"
                                                class="bi bi-star-fill"
                                                viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.951l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 
                                                        4.898.696c.441.062.612.633.282.951l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 
                                                        13.187l-4.389 2.256z"/>
                                            </svg>

                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="20"
                                                fill="currentColor"
                                                class="bi bi-star-fill"
                                                viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.951l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 
                                                        4.898.696c.441.062.612.633.282.951l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 
                                                        13.187l-4.389 2.256z"/>
                                            </svg>
                                        </div>

                                        <div className='content pt-3 pb-2'>
                                            <p>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio odit
                                                itaque, molestias quam quibusdam voluptatem aliquid rem blanditiis earum
                                                dolorem. Repellendus ad ipsam, asperiores veniam voluptates dignissimos?
                                                Provident, eum doloribus?
                                            </p>
                                        </div>
                                        <hr />

                                        <div className='d-flex'>
                                            <div>
                                                <img src={AvatarImg} alt="" width={50} />
                                            </div>
                                            <div className='ps-3'>
                                                <div className='name'>John Doe</div>
                                                <div>CEO</div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </SwiperSlide>
                            <SwiperSlide>Slide 2</SwiperSlide>
                            <SwiperSlide>Slide 3</SwiperSlide>
                            <SwiperSlide>Slide 4</SwiperSlide>

                        </Swiper>

                    </div>
                </section>


            </main>

            <Footer />




        </>


    )
}

export default Home
