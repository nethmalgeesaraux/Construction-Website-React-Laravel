import Footer from "../common/Footer"
import Header from "../common/Header"

const Login = () => {
    return (
        <>
            <Header />
            <main className="admin-login-page">
                <div className='container my-5'>
                    <div className='login-form my-5 w-50 mx-auto'>
                        <div className='card border-0 shadow'>
                            <div className='card-body py-5'>
                                <form>
                                    <h4 className='mb-4 text-center'>Login</h4>
                                    <div className='mb-3'>
                                        <label htmlFor='' className='form-label'>Email</label>
                                        <input type='text' placeholder='Email' className='form-control' />
                                    </div>

                                     <div className='mb-3'>
                                        <label htmlFor='' className='form-label'>Password</label>
                                        <input type='password' placeholder='Password' className='form-control' />
                                    </div>

                                    <button className='btn btn-primary'>Login</button>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
            <Footer />
        </>
    )
}

export default Login
