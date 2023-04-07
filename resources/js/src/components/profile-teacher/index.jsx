import React, { useEffect, useState, createRef, useRef } from 'react';
import Cropper, { ReactCropperElement } from "react-cropper";
import "cropperjs/dist/cropper.css";
import { Footer, Header } from '../../layout';
import BreadcrumbThree from '../breadcrumb/breadcrumb-3';
import { toast } from "react-toastify";
import { getCurrentUser } from '../../utils/auth';
import { useFormik } from 'formik';
import moment from 'moment';
import { dataURLtoFile } from '../../utils/Upload';
import { updateProfile, getProfileById, uploadPhoto} from '../../services/profile/Profile';

const index = () => {
    const user_id = getCurrentUser()?.id;
    const [mounted, setMounted] = useState(false)
    const inputRef = useRef();
    // use formik
    const { handleChange, handleSubmit, handleBlur, errors, values, setFieldValue } = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            date_of_birth: '',
            gender: '',
            twitter: '',
            facebook: '',
            linkedin: '',
            youtube: '',
            address: '',
        },
        onSubmit: async (values, { resetForm }) => {
            try {
                const res = await updateProfile(user_id, values);
                if (res) {
                    toast.success(`Register successfully`, {
                        position: 'top-right'
                    })
                    // navigate('/')
                }
            } catch (error) {
                const errorMessage = error?.message;
                toast.error(`${errorMessage}`, {
                    position: 'top-right'
                })
            }
        }
    })
    const handleGetCurrentUser = async (user_id) => {
        const user_info = await getCurrentUser();
        if (user_info !== undefined) {
            setFieldValue('name', user_info?.name);
            setFieldValue('email', user_info?.email);
        }
        const res = await getProfileById(user_id);
        if (res !== undefined) {
            setFieldValue('phone', res?.data?.phone);
            setFieldValue('date_of_birth', moment(res?.data?.date_of_birth).format('YYYY-MM-DD'));
            setFieldValue('gender', res?.data?.gender);
            setFieldValue('twitter', res?.data?.twitter);
            setFieldValue('facebook', res?.data?.facebook);
            setFieldValue('linkedin', res?.data?.linkedin);
            setFieldValue('youtube', res?.data?.youtube);
            setFieldValue('address', res?.data?.address);
            setFieldValue('photo', res?.data?.photo);
        }
        setMounted(true)
    }
    useEffect(() => {
        if (mounted == false) {
            handleGetCurrentUser(user_id);
        }
    }, [mounted])

    const [image, setImage] = useState(String);
    const [showImage, setShowImage] = useState();
    const cropperRef = createRef();

    const onChange = (e) => {
        e.preventDefault();
        const reader = new FileReader();
        reader.onload = () => {
            setImage(reader.result);
        };
        reader.readAsDataURL(e.target.files[0]);
    };

    const getCropData = () => {
        if (typeof cropperRef.current?.cropper !== "undefined") {
            setShowImage(cropperRef.current?.cropper.getCroppedCanvas().toDataURL());
        }
    };
    const handleUpload = async (files) => {
        try {
            var filename = Math.floor((Math.random() * 100) + 1)+ ".jpg";
            var file = dataURLtoFile(files, filename);
                console.log('file',file);
                const formData = new FormData();
                    formData.append('photo', file);
            const res = await uploadPhoto(user_id, formData)
            if(res){
                toast.success(`Register successfully`, {
                    position: 'top-right'
                })
            }
        } catch (error) {
            const errorMessage = error?.message;
            toast.error(`${errorMessage}`, {
                position: 'top-right'
            })
        }
      };
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
                                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link active" id="infomation-tab" data-bs-toggle="tab" data-bs-target="#infomation"
                                                type="button" role="tab" aria-controls="infomation" aria-selected="true">General Infomation</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="photo-tab" data-bs-toggle="tab" data-bs-target="#photo"
                                                type="button" role="tab" aria-controls="photo" aria-selected="false">Photo</button>
                                        </li>
                                    </ul>
                                    <div className="tab-content" id="myTabContent">
                                        <div className="tab-pane fade show active" id="infomation" role="tabpanel" aria-labelledby="infomation-tab">
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
                                                                                <input type="email" id="email" name='email' onChange={handleChange} value={values.email} />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="row g-lg-5">
                                                                        <div className="col-lg-6">
                                                                            <div className="form-group">
                                                                                <label>Phone *</label>
                                                                                <input type="tel" id="phone" name='phone' onChange={handleChange} value={values.phone} />
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-lg-6">
                                                                            <div className="form-group">
                                                                                <label>Date Of Birth *</label>
                                                                                <input type="date" id="date_of_birth" name='date_of_birth' onChange={handleChange} value={values.date_of_birth} style={{ "padding": " 0 25px" }} />
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
                                                                                <label id="twitter">Twitter</label>
                                                                                <input type="text" id="twitter" name='twitter' onChange={handleChange} value={values.twitter} />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="row g-lg-5">
                                                                        <div className="col-lg-6">
                                                                            <div className="form-group">
                                                                                <label id='facebook'>Facebook *</label>
                                                                                <input type="text" id="facebook" name='facebook' onChange={handleChange} value={values.facebook} />
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-lg-6">
                                                                            <div className="form-group">
                                                                                <label id='linkedin'>Linkedin</label>
                                                                                <input type="text" id="linkedin" name='linkedin' onChange={handleChange} value={values.linkedin} />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="row g-lg-5">
                                                                        <div className="col-lg-6">
                                                                            <div className="form-group">
                                                                                <label id='youtube'>Facebook *</label>
                                                                                <input type="text" id="youtube" name='youtube' onChange={handleChange} value={values.phone} />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="form-group mb-3">
                                                                        <label>Address</label>
                                                                        <textarea name='address' onChange={handleChange} value={values.address} rows="4" placeholder="Notes about your order, e.g. speacial notes for delivery."></textarea>
                                                                    </div>
                                                                    <div class="form-group col-12">
                                                                        <button class="rn-btn edu-btn submit-btn" name="submit" type="submit">Submit Now <i class="icon-4"></i></button></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="photo" role="tabpanel" aria-labelledby="photo-tab">
                                            <div className="course-tab-content">
                                                <div className="course-curriculam">
                                                    <div className="row row--25">
                                                        <div className="col-lg-12">
                                                            <div className="checkout-billing">
                                                                <div class="blog-pagination-list prev-post mb-3">
                                                                    <div className='content p-3'>
                                                                        <div class="thumbnail image-upload">
                                                                        <input type="file" className='d-none' accept="image/*" ref={inputRef} onChange={onChange} />
                                                                        {(() => {
                                                                            if (showImage) {
                                                                                return (
                                                                                    <img src={showImage} alt="Author Images" onClick={() => inputRef.current.click()} />
                                                                                )
                                                                            } else if (image) {
                                                                                return (
                                                                                    <Cropper
                                                                                        ref={cropperRef}
                                                                                        style={{ height: 400, width: "100%" }}
                                                                                        zoomTo={0.5}
                                                                                        initialAspectRatio={1}
                                                                                        preview=".img-preview"
                                                                                        src={image}
                                                                                        viewMode={1}
                                                                                        minCropBoxHeight={10}
                                                                                        minCropBoxWidth={10}
                                                                                        background={false}
                                                                                        responsive={true}
                                                                                        autoCropArea={1}
                                                                                        checkOrientation={false}
                                                                                        guides={true}
                                                                                    />
                                                                                )} else {
                                                                                    return (
                                                                                        <img src={global.config.settings.img_url + `/upload/` + values?.photo} alt="Author Images" onClick={() => inputRef.current.click()} />
                                                                                    )
                                                                                }
                                                                            })()}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <button style={{ float: "right" }} onClick={getCropData}>
                                                                Crop Image
                                                            </button>
                                                                <div class="form-group col-12">
                                                                    <button  class="rn-btn edu-btn submit-btn" type="submit" onClick={() => handleUpload(showImage)}>Save<i class="icon-4"></i></button></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                            </div>
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

export default index;