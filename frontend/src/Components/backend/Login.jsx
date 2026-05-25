import { toast } from "react-toastify";
import Footer from "../common/Footer"
import Header from "../common/Header"
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const showPassword = watch("showPassword", false);

    const onSubmit = async (data) => {
        //console.log(data)
        const res = await fetch("http://127.0.0.1:8000/api/authenticate", {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const result = await res.json();

        if (result.status == false) {
            toast.error(result.message)
        } else {

            const userInfo = {
                id: result.id,
                token: result.token
            }

            localStorage.setItem('userInfo', JSON.stringify(userInfo))

            navigate("/admin/dashboard")
        }


        // console.log(result);
    }


    return (
        <>
            <Header />
            <main className="admin-login-page">
                <div className='container my-5'>
                    <div className='login-form my-5 w-50 mx-auto'>
                        <div className='card border-0 shadow'>
                            <div className='card-body py-5'>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <h4 className='mb-4 text-center'>Login</h4>
                                    <div className='mb-3'>
                                        <label htmlFor='' className='form-label'>Email</label>
                                        <input
                                            {...register('email', {
                                                required: "This field is required",
                                                pattern: {
                                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                    message: "invalid email address"
                                                }

                                            })}
                                            type="text" placeholder='Email'
                                            className={`form-control ${errors.email && 'is-invalid'}`}
                                        />
                                        {errors.email && <p className='invalid-feedback'>{errors.email?.message}</p>}

                                    </div>

                                    <div className='mb-3'>
                                        <label htmlFor='' className='form-label'>Password</label>
                                        <input
                                            {...register('password', {
                                                required: "This field is required",
                                                pattern: {
                                                    value: /^.{8,}$/,
                                                    message: "Password must be at least 8 characters"
                                                }


                                            })}
                                            type={showPassword ? "text" : "password"} placeholder='Password'
                                            className={`form-control ${errors.password && 'is-invalid'}`}
                                        />
                                        <div className="form-check mt-2">
                                            <input
                                                id="showPassword"
                                                type="checkbox"
                                                className="form-check-input"
                                                {...register("showPassword")}
                                            />
                                            <label htmlFor="showPassword" className="form-check-label">Show password</label>
                                        </div>
                                        {errors.password && <p className='invalid-feedback'>{errors.password?.message}</p>}

                                    </div>

                                    <button type="submit" className='btn btn-primary'>Login</button>

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
