import Footer from '../pages/Footer';
import Hearder from '../pages/Header';
import AboutImg from '../../assets/about-us.jpg';
import teamImgTwo from '../../assets/team2.jpg';


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


      </main>

      <Footer />
    </div>
  )
}

export default About
