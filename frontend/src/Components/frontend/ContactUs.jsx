import Footer from '../common/Footer';
import Header from '../common/Header';
const ContactUs = () => {
    return (
        <>
            <Header />
            <main>

                <section className='section-7'>
                    <div className='hero d-flex align-items-center'>
                        <div className='container'>
                            <div className='text-left'>
                                <span>Quality. Integrity. Value.</span>
                                <h1>Contact Us</h1>
                                <p>We excel at transforming visions into reality <br />through outstanding craftsmanship and precise.</p>
                            </div>
                        </div>
                    </div>
                </section>





                <section className="section-9 py-5">
                    <div className="section-header contact-header text-center">
                        <h2>Contact Us</h2>
                        <p>
                            Our dedicated experts are here to help you with any of your questions, contact us by
                            filling out the form below and we will be in touch shortly.
                        </p>
                    </div>
                    <div className="container">
                        <div className="row g-4 g-lg-4 align-items-start">
                            <div className="col-lg-3">
                                <div className="contact-info-card">
                                    <h3>Call Us</h3>
                                    <p>(888-000-0000)</p>
                                    <p>(222-123-12345)</p>

                                    <h3>You can write us</h3>
                                    <p>example@example.com</p>
                                    <p>info@example.com</p>

                                    <h3>Address</h3>
                                    <p>(Sgaramawatha)</p>
                                    <p> Pandura, Colombo</p>
                                    <p>0522400XXXX</p>
                                </div>
                            </div>

                            <div className="col-lg-9">
                                <div className="contact-form-card">
                                    <form>
                                        <div className="row g-4">
                                            <div className="col-md-6">
                                                <label htmlFor="name">Name</label>
                                                <input id="name" type="text" className="form-control" placeholder="Enter Name" />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="email">Email</label>
                                                <input id="email" type="email" className="form-control" placeholder="Enter Email" />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="phone">Phone</label>
                                                <input id="phone" type="text" className="form-control" placeholder="Phone No." />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="subject">Subject</label>
                                                <input id="subject" type="text" className="form-control" placeholder="Subject" />
                                            </div>
                                            <div className="col-12">
                                                <label htmlFor="message">Message</label>
                                                <textarea id="message" className="form-control" rows="7" placeholder="Message"></textarea>
                                            </div>
                                            <div className="col-12">
                                                <button type="submit" className="btn contact-submit-btn">Submit</button>
                                            </div>
                                        </div>
                                    </form>
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

export default ContactUs
