import React, { useEffect, useState } from 'react';
import { Footer, Header } from '../../layout';
import BreadcrumbThree from '../breadcrumb/breadcrumb-3';
import { getCurrentUser } from '../../utils/auth';
import { useFormik } from 'formik';

const countries = [
    'Select Option',
    'Australia',
    'England',
    'New Zealand',
    'Switzerland',
    'United Kindom (UK)',
    'United States (USA)'
];
import { getUserById } from '../../services/partner/user';

const index = () => {
    const [mounted, setMounted] = useState(false)
    const [isOpen, setIsOpen] = useState(false);
    const [currentUser, setCurrentUser] = useState({})
    // use formik
    const { handleChange, handleSubmit, handleBlur, errors, values, setFieldValue } = useFormik({
        initialValues: { 
            name: ''
        },
        onSubmit: async(values, { resetForm }) => {
            // try {
            //     const res = await userSignUp(values);
            //     if(res){
            //         toast.success(`Register successfully`, {
            //             position: 'top-right'
            //         })
            //         navigate('/')
            //     }
            // }
            // catch(error){
            //     const errorMessage = error?.message;
            //     toast.error(`${errorMessage}`, {
            //         position: 'top-right'
            //     })
            // }
        }
    })
    const handleGetCurrentUser = async() => {
        const user_info = await getCurrentUser();
        if(user_info !== undefined){
            setFieldValue(name, user_info?.name);
        }
    }

    useEffect(() => {
		if(mounted == false ){
			handleGetCurrentUser();
		}
	}, [mounted])

    return (
        <div className='sticky-header'>
            <div id="main-wrapper" className="main-wrapper">
                <Header no_top_bar={true} />
                <BreadcrumbThree title="Your Account" subtitle="Profile" />
                <section className="checkout-page-area section-gap-equal p-0">
                    <div className="container">
                        <form>
                            <div className="row row--25">
                                <div className="col-lg-12">
                                    <div class="blog-author justify-content-center p-5">
                                        <div class="thumbnail">
                                            <img src="/assets/images/blog/author-01.jpg" alt="Author Images" />
                                        </div>
                                    </div>
                                    <div className="checkout-billing">
                                        <div className="row g-lg-5">
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label>First Name*</label>
                                                    <input type="text" id="name" name='name' onChange={handleChange} value={values.name} />
                                                </div>
                                            </div>

                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label>Last Name*</label>
                                                    <input type="text" id="last-name" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label>Company Name</label>
                                            <input type="text" id="company-name" />
                                        </div>

                                        <div className="form-group">
                                            <label>Email Address*</label>
                                            <input type="email" id="email" />
                                        </div>

                                        <div className="row g-lg-5">
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label>Phone*</label>
                                                    <input type="tel" id="phone" />
                                                </div>
                                            </div>

                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label>Country*</label>
                                                    <select id="country">
                                                        {countries.map((country, i) => <option key={i}>{country}</option>)}
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label>Address*</label>
                                            <input type="text" id="address1" />
                                            <input type="text" id="address2" />
                                        </div>

                                        <div className="form-group">
                                            <label>Town/ City*</label>
                                            <input type="text" id="town" />
                                        </div>

                                        <div className="row g-lg-5">
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label>State*</label>
                                                    <select id="state">
                                                        {countries.map((country, i) => <option key={i}>{country}</option>)}
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label>Zip Code*</label>
                                                    <input type="tel" id="phone" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <div className="edu-form-check">
                                                <input type="checkbox" id="crt-accnt" className="w-25" />
                                                <label htmlFor="crt-accnt">Create an Accoutn?</label>
                                            </div>
                                        </div>

                                        <div className="form-group mt--50 mb-3">
                                            <label>Order Notes</label>
                                            <textarea id="notes" rows="4" placeholder="Notes about your order, e.g. speacial notes for delivery."></textarea>
                                        </div>
                                        <div class="form-group col-12">
                                            <button class="rn-btn edu-btn submit-btn" name="submit" type="submit">Submit Now <i class="icon-4"></i></button></div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
                <Footer style_2={'footer-dark bg-image footer-style-2'} />
            </div>
        </div>
    )
}

export default index;