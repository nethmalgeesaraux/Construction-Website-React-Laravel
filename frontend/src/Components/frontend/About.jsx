import Footer from '../pages/Footer';
import Hearder from '../pages/Header';

const About = () => {
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
      </main>

      <Footer />
    </div>
  )
}

export default About