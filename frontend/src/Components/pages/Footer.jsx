

const Footer = () => {
  return (
    <div><footer>
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
            </footer></div>
  )
}

export default Footer