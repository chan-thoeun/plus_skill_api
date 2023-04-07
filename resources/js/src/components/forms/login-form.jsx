import React, { useState } from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { loginSchema } from '../../utils/validation-schema';
import { setCurrentUser , getCurrentUser } from '../../utils/auth';
import ErrorMsg from './error-msg';
import { toast } from "react-toastify";
import { userLogin } from '../../services/auth/Auth';

const LoginForm = () => {
    const navigate = useNavigate();
    const [showPass,setShowPass] = useState(false);
    // use formik
    const { handleChange, handleSubmit, handleBlur, errors, values, touched } = useFormik({
        initialValues: { email: '', password: '' },
        validationSchema: loginSchema,
        onSubmit: async(values) => {
            try {
                const res = await userLogin(values);
                if(res.status == 200){
                    toast.success(`Login successfully`, {
                        position: 'top-right'
                    })
                    setCurrentUser(res?.data);
                    window.location.replace('/');
                }
            }catch(error){
                const errorMessage = error?.message;
                toast.error(`${errorMessage}`, {
                    position: 'top-right'
                })
            }
        }
    })

    // handleResetPass
    const handleResetPass = (email) => {
        resetPassword(email);
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="current-log-email">Username or email*</label>
                <input 
                    value={values.email} 
                    onChange={handleChange}
                    onBlur={handleBlur} 
                    type="email" 
                    name="email"
                    placeholder="Email or username" 
                />
                {touched.email && <ErrorMsg error={errors.email} />}
            </div>
            
            <div className="form-group">
                <label htmlFor="current-log-password">Password*</label>
                <input 
                    value={values.password} 
                    onChange={handleChange}
                    onBlur={handleBlur} 
                    type={showPass?"text":"password"} 
                    name="password"
                    placeholder="Password" 
                />
                <span onClick={()=> setShowPass(!showPass)} className="password-show">
                    <i className="icon-76"></i>
                </span>
            </div>
            {touched.password && <ErrorMsg error={errors.password} />}

            <div className="form-group chekbox-area">
                <div className="edu-form-check">
                    <input type="checkbox" id="remember-me" />
                    <label htmlFor="remember-me">Remember Me</label>
                </div>
                <a href="#" onClick={()=> handleResetPass(values.email)} 
                className="password-reset">Lost your password?</a>
            </div>

            <div className="form-group">
                <button type="submit" className="edu-btn btn-medium">Sign in <i className="icon-4"></i></button>
            </div>
        </form>
    )
}

export default LoginForm;