import React, { useState } from 'react';
import { useFormik } from 'formik';
import { registerSchema } from '../../utils/validation-schema';
import ErrorMsg from './error-msg';
import Link from 'next/link';
import { toast } from "react-toastify";
import { userRegister } from '../../services/auth/Auth';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
    const navigate = useNavigate();
    const [showPass, setShowPass] = useState(false);
    // use formik
    const { handleChange, handleSubmit, handleBlur, errors, values, touched } = useFormik({
        initialValues: { name: '', email: '', password: '', roles: '', terms: false },
        validationSchema: registerSchema,

        onSubmit: async(values, { resetForm }) => {
            try {
                const res = await userRegister(values);
                if(res){
                    toast.success(`Register successfully`, {
                        position: 'top-right'
                    })
                    resetForm()
                    navigate('/')
                }
            }
            catch(error){
                const errorMessage = error?.message;
                toast.error(`${errorMessage}`, {
                    position: 'top-right'
                })
            }
        }
    })
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group d-flex">
                <div className="edu-form-check">
                    <input type="radio" id="teacher" name="roles" value="2" onChange={handleChange} checked /><label for="teacher">Teacher</label>
                </div>
                <div className="edu-form-check mb-3 ms-4">
                    <input type="radio" id="student" name="roles" value="3" onChange={handleChange}/><label for="student">Student</label>
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="reg-name">Name*</label>
                <input value={values.name} onChange={handleChange} onBlur={handleBlur} type="text" name="name" id="reg-name" placeholder="Full name" />
                {touched.name && <ErrorMsg error={errors.name} />}
            </div>

            <div className="form-group">
                <label htmlFor="log-email">Username or email*</label>
                <input value={values.email} onChange={handleChange} onBlur={handleBlur} type="email" name="email" id="log-email" placeholder="Email or username" />
                {touched.email && <ErrorMsg error={errors.email} />}
            </div>

            <div className="form-group">
                <label htmlFor="log-password">Password*</label>
                <input value={values.password} onChange={handleChange} onBlur={handleBlur} type={showPass ? "text" : "password"} name="password" id="log-password" placeholder="Password" />
                <span onClick={() => setShowPass(!showPass)} className="password-show"><i className="icon-76"></i></span>
            </div>
            {touched.password && <ErrorMsg error={errors.password} />}

            <div className="form-group chekbox-area">
                <div className="edu-form-check">
                    <input value={values.terms} onChange={handleChange} onBlur={handleBlur} type="checkbox" name='terms' id="terms-condition" />
                    <label htmlFor="terms-condition">I agree the User Agreement and
                        <Link href="/terms-condition">
                            <a>Terms & Condition.</a>
                        </Link>
                    </label>
                </div>
            </div>
            {touched.terms && <ErrorMsg error={errors.terms?.split('true,')[1]} />}
            
            <div className="form-group">
                <button type="submit" className="edu-btn btn-medium">Create Account <i className="icon-4"></i></button>
            </div>
        </form>
    )
}

export default RegisterForm;