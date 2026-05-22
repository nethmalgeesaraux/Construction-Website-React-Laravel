import Footer from '../pages/Footer';
import Hearder from '../pages/Header';
import AboutImg from '../../assets/about-us.jpg';
import teamImgTwo from '../../assets/team2.jpg';
import AvatarImg from '../../assets/author-2.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';


const About = () => {
  const teamMembers = [
    { name: 'Mark Doe', role: 'Manager', image: teamImgTwo, linkedin: '#' },
    { name: 'Mark Doe', role: 'Manager', image: teamImgTwo, linkedin: '#' },
    { name: 'Mark Doe', role: 'Manager', image: teamImgTwo, linkedin: '#' },
    { name: 'Mark Doe', role: 'Manager', image: teamImgTwo, linkedin: '#' },
  ];

  return (
    <div>
      <Hearder />

      <main>

        <section className='section-7'>
          <div className='hero d-flex align-items-center'>
            <div className='container'>
              <div className='text-left'>
                <span>Quality. Integrity. Value.</span>
                <h1>About Us</h1>
                <p>We excel at transforming visions into reality <br />through outstanding craftsmanship and precise.</p>
              </div>
            </div>
          </div>
        </section>

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

        {/* Our Team */}
        <section className='section-8 bg-light py-5'>
          <div className='container'>
            <div className='section-header text-center'>
              <span>Team</span>
              <h2>Our Team</h2>
              <p>We specialize in a wide range of construction services, including residential, commercial, and industrial projects.</p>
            </div>

            <div className="row g-4 pt-3">
              {teamMembers.map((member, index) => (
                <div key={index} className="col-sm-6 col-lg-3">
                  <div className="team-card">
                    <div className="team-image-wrap">
                      <img src={member.image} alt={member.name} className="w-100 team-image" />
                    </div>
                    <div className="team-body">
                      <h3>{member.name}</h3>
                      <p>{member.role}</p>
                      <a href={member.linkedin} className="team-linkedin" aria-label={`${member.name} LinkedIn`}>
                        <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
                          <path d="M4.98 3.5a2.48 2.48 0 1 0 0 4.96 2.48 2.48 0 0 0 0-4.96zM2.75 8.95h4.46V21H2.75V8.95zm7.16 0h4.28v1.64h.06c.6-1.13 2.05-2.32 4.22-2.32 4.52 0 5.35 2.98 5.35 6.85V21h-4.46v-5.2c0-1.24-.02-2.83-1.73-2.83-1.73 0-2 1.35-2 2.74V21H9.9V8.95z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
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
              modules={[Pagination]}
              spaceBetween={50}
              slidesPerView={3}
              pagination={{ clickable: true }}

            >
              <SwiperSlide>

                <div className="card shadow border-0">
                  <div className="card-body p-5">
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

              <SwiperSlide>

                <div className="card shadow border-0">
                  <div className="card-body p-5">
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

              <SwiperSlide>

                <div className="card shadow border-0">
                  <div className="card-body p-5">
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

              <SwiperSlide>

                <div className="card shadow border-0">
                  <div className="card-body p-5">
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

            </Swiper>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}

export default About
