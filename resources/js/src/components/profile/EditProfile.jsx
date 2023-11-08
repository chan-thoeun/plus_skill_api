import React, { useEffect, useState, createRef, useRef } from 'react';
import { Footer, Header } from '../../layout';
import BreadcrumbThree from '../breadcrumb/breadcrumb-3';
import { toast } from "react-toastify";
import { useFormik } from 'formik';
import moment from 'moment';
import { useParams , useNavigate} from 'react-router-dom';
import { updateUser, getUserById } from '../../services/user/User';

const EditProfile = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [mounted, setMounted] = useState(false)
    // use formik
    const { handleChange, handleSubmit, handleBlur, errors, values, setFieldValue } = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            dob: '',
            gender: '',
            twitter: '',
            facebook: '',
            linkedin: '',
            youtube: '',
            address: '',
            about: '',
        },
        onSubmit: async (values, { resetForm }) => {
            try {
                const res = await updateUser(id, values);
                if (res) {
                    toast.success(`Login successfully`, {
                        position: 'top-right'
                    })
                    navigate('/profile')
                }
            } catch (error) {
                const errorMessage = error?.message;
                toast.error(`${errorMessage}`, {
                    position: 'top-right'
                })
            }
        }
    })
    const handleGetData = async (id) => {
        const res = await getUserById(id);
        if (res !== undefined) {
            setFieldValue('name', res?.data?.name);
            setFieldValue('email', res?.data?.email);
            setFieldValue('phone', res?.data?.profile?.phone);
            setFieldValue('dob', res?.data?.profile?.dob);
            setFieldValue('gender', res?.data?.profile?.gender);
            setFieldValue('twitter', res?.data?.profile?.twitter);
            setFieldValue('facebook', res?.data?.profile?.facebook);
            setFieldValue('linkedin', res?.data?.profile?.linkedin);
            setFieldValue('youtube', res?.data?.profile?.youtube);
            setFieldValue('address', res?.data?.profile?.address);
            setFieldValue('about', res?.data?.profile?.about);
        }
        setMounted(true)
    }
    useEffect(() => {
        if (mounted == false) {
            handleGetData(id);
        }
    }, [mounted])
    return (
        <div className='sticky-header'>
            <div id="main-wrapper" className="main-wrapper">
                <Header no_top_bar={true} />
                <BreadcrumbThree title="Your Account" subtitle="Profile" />
                <section className="course-details-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="course-details-content">
                                    <div className="course-tab-content">
                                        <div className="course-overview">
                                            <form onSubmit={handleSubmit}>
                                                <div className="row row--25">
                                                    <div className="col-lg-12">
                                                        <div className="checkout-billing">
                                                            <div className="row g-lg-5">
                                                                <div className="col-lg-6">
                                                                    <div className="form-group">
                                                                        <label>Name *</label>
                                                                        <input type="text" name='name' onChange={handleChange} value={values.name} />
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-6">
                                                                    <div className="form-group">
                                                                        <label>Email Address *</label>
                                                                        <input type="email" name='email' onChange={handleChange} value={values.email} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="row g-lg-5">
                                                                <div className="col-lg-6">
                                                                    <div className="form-group">
                                                                        <label>Phone *</label>
                                                                        <input type="tel" name='phone' onChange={handleChange} value={values.phone} />
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-6">
                                                                    <div className="form-group">
                                                                        <label>Date Of Birth *</label>
                                                                        <input type="date" name='dob' onChange={handleChange} value={values.dob} style={{ "padding": " 0 25px" }} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="row g-lg-5">
                                                                <div className="col-lg-6">
                                                                    <div className="form-group">
                                                                        <label>Gender *</label>
                                                                        <select name='gender' onChange={handleChange} value={values.gender}>
                                                                            <option value={1}>Male</option>
                                                                            <option value={2}>Female</option>
                                                                            <option value={3}>Other</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-6">
                                                                    <div className="form-group">
                                                                        <label>Twitter</label>
                                                                        <input type="text" name='twitter' onChange={handleChange} value={values.twitter} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="row g-lg-5">
                                                                <div className="col-lg-6">
                                                                    <div className="form-group">
                                                                        <label>Facebook</label>
                                                                        <input type="text" name='facebook' onChange={handleChange} value={values.facebook} />
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-6">
                                                                    <div className="form-group">
                                                                        <label>Linkedin</label>
                                                                        <input type="text" name='linkedin' onChange={handleChange} value={values.linkedin} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="row g-lg-5">
                                                                <div className="col-lg-6">
                                                                    <div className="form-group">
                                                                        <label>Youtube</label>
                                                                        <input type="text" name='youtube' onChange={handleChange} value={values.youtube} />
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-6">
                                                                    <div className="form-group">
                                                                        <label>Address</label>
                                                                        <input type="text" name='address' onChange={handleChange} value={values.address} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="form-group mb-3">
                                                                <label>About</label>
                                                                <textarea name='about' onChange={handleChange} value={values.about} rows="4" placeholder="Notes about your order, e.g. speacial notes for delivery."></textarea>
                                                            </div>
                                                            <div className="form-group col-12">
                                                                <button className="rn-btn edu-btn submit-btn" name="submit" type="submit">Submit Now <i class="icon-4"></i></button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer style_2={'footer-dark bg-image footer-style-2'} />
            </div>
        </div>
    )
}

export default EditProfile;