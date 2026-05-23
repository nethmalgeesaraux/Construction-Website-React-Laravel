import Footer from '../common/Footer';
import Header from '../common/Header';
import BlogImg from '../../assets/construction3.jpg';

const Blogs = () => {
    return (
        <div>
            <Header />

            <section className='section-7'>
                <div className='hero d-flex align-items-center'>
                    <div className='container'>
                        <div className='text-left'>
                            <span>Quality. Integrity. Value.</span>
                            <h1>Blogs</h1>
                            <p>We excel at transforming visions into reality <br />through outstanding craftsmanship and precise.</p>
                        </div>
                    </div>
                </div>
            </section>

               {/* Blog & News Section */}
                <section className='section-6 bg-light py-5'>
                    <div className='container'>
                        <div className='section-header text-center'>
                            <span>Blog & News</span>
                            <h2>Articles & blog posts</h2>
                            <p>Our expertise ensures quality results, innovative solutions, and long‑lasting value for every client we serve.</p>
                        </div>

                        <div className="row g-4 pt-3">
                            <div className="col-md-6 col-lg-4">
                                <div className="card border-0 blog-card">
                                    <div className="card-img-top">
                                        <img src={BlogImg} alt="" className="w-100" />
                                    </div>
                                    <div className="card-body">
                                        <h4>Bangalore Flower Show</h4>
                                        <a href="#" className="btn blog-read-more">READ MORE</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="card border-0 blog-card">
                                    <div className="card-img-top">
                                        <img src={BlogImg} alt="" className="w-100" />
                                    </div>
                                    <div className="card-body">
                                        <h4>Bangalore Flower Show</h4>
                                        <a href="#" className="btn blog-read-more">READ MORE</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="card border-0 blog-card">
                                    <div className="card-img-top">
                                        <img src={BlogImg} alt="" className="w-100" />
                                    </div>
                                    <div className="card-body">
                                        <h4>Bangalore Flower Show</h4>
                                        <a href="#" className="btn blog-read-more">READ MORE</a>
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

export default Blogs