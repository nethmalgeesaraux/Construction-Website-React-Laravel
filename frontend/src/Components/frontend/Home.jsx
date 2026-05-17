import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import AboutImg from '../../assets/about-us.jpg';

const Home = () => {
    return (
        <>
            <header>
                <div className='container py-3'>
                    <Navbar expand='lg'>
                        <Navbar.Brand href='#home' className='logo'><span>Build</span> Ease</Navbar.Brand>
                        <Navbar.Toggle aria-controls='basic-navbar-nav' />
                        <Navbar.Collapse id='basic-navbar-nav'>
                            <Nav className='ms-auto'>
                                <Nav.Link href='#home' className='nav-link'>Home</Nav.Link>
                                <Nav.Link href='/about' className='nav-link'>About Us</Nav.Link>
                                <Nav.Link href='#link' className='nav-link'>Services</Nav.Link>
                                <Nav.Link href='#link' className='nav-link'>Projects</Nav.Link>
                                <Nav.Link href='#link' className='nav-link'>Blogs</Nav.Link>
                                <Nav.Link href='#link' className='nav-link'>Contact Us</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </header>


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

            </main>


            <footer>
                <div className="container footer-wrap">
                    <div className="row footer-top">
                        {/* Column 1 - Company Info */}
                        <div className="col-12 col-sm-6 col-lg-3 footer-col">
                            <h3 className="text-orange mb-3">UrbanEdge Constructions</h3>
                            <div className="pe-4">
                                <p>
                                    Our post-construction services gives you peace of mind knowing that
                                    we are still here for you even after.
                                </p>
                            </div>
                        </div>

                        {/* Column 2 - Services */}
                        <div className="col-12 col-sm-6 col-lg-3 footer-col">
                            <h3 className="mb-3 text-orange">Our Service</h3>
                            <ul className="footer-list">
                                <li><a href="">Specialty Construction</a></li>
                                <li><a href="">Civil Construction</a></li>
                                <li><a href="">Residential Construction</a></li>
                                <li><a href="">Corporate Construction</a></li>
                                <li><a href="">Building Constructions</a></li>
                                <li><a href="">Industrial Construction</a></li>
                            </ul>
                        </div>

                        {/* Column 3 - Quick Links */}
                        <div className="col-12 col-sm-6 col-lg-3 footer-col">
                            <h3 className="mb-3 text-orange">Quick Links</h3>
                            <ul className="footer-list">
                                <li><a href="">About Us</a></li>
                                <li><a href="">Services</a></li>
                                <li><a href="">Projects</a></li>
                                <li><a href="">Blog</a></li>
                                <li><a href="">Contact Us</a></li>
                            </ul>
                        </div>

                        {/* Column 4 - Contact */}
                        <div className="col-12 col-sm-6 col-lg-3 footer-col">
                            <h3 className="mb-3 text-orange">Contact Us</h3>
                            <ul className="footer-list">
                                <li><a href="tel:8880000000">(888-000-0000)</a></li>
                                <li><a href="mailto:info@example.com">info@example.com</a></li>
                                <li>
                                    <a href="">
                                        (Sgaramawatha) Pandura, Colombo<br />
                                        0522400XXXX
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="text-center footer-bottom">
                        <small>
                            Copyright &copy; 2026 Build Ease
                            Constructions. All Rights Reserved.
                        </small>
                    </div>
                </div>
            </footer>

        </>


    )
}

export default Home
