import React, { useState, useRef, useEffect } from 'react';
import { Footer, Header } from '../../layout';
import { getCurrentUser } from '../../utils/auth';
import BreadcrumbThree from '../breadcrumb/breadcrumb-3';
import CourseArea from './Course-Area';
import UploadImageModal from '../upload-image/UploadImageModal';
import { getUserById } from '../../services/user/User';

const Profile = () => {
    const user_id = getCurrentUser()?.id;
    const [mounted, setMounted] = useState(false)
    const inputRef = useRef();
    const [showModalUpload, setShowModalUpload] = useState(false);
    const [previewImage, setPreviewImage] = useState();
    const [userInfo, setUserInfo] = useState({});

    const handleChange = (e) => {
        e.preventDefault();
        const reader = new FileReader();
        reader.onloadend = () => {
            setPreviewImage(reader.result);
            setShowModalUpload(true)
        };
        reader.readAsDataURL(e.target.files[0]);
    }
    const handleGetCurrentUser = async(user_id) => {
        const res = await getUserById(user_id);
        if(res){
            setUserInfo(res?.data);
            setMounted(true);
        }
    }
    useEffect(() => {
        if (mounted == false) {
            handleGetCurrentUser(user_id);
        }
    }, [user_id, mounted])

    return (
        <>
            <div className='sticky-header'>
                <div id="main-wrapper" className="main-wrapper">
                    <Header no_top_bar={true} />
                    <BreadcrumbThree title="My Account" subtitle="My Account" />
                    <div className="edu-team-details-area section-gap-equal">
                        <div className="container">
                            <div className="row row--40">
                                <div className="col-lg-4">
                                    <div className="team-details-thumb">
                                        <div className="thumbnail text-center">
                                           <input type="file" name="file" className='d-none' ref={inputRef} onChange={handleChange} />
                                            {userInfo?.profile?.image ? (
                                                <img src={global.config.settings.img_url +`storage/${userInfo?.profile?.image}`} alt="team images" />
                                            ): (
                                                <img src={`/assets/images/team/team-02/team-01.webp`} alt="team images" />
                                            )}
                                            <a onClick={() => inputRef.current.click()} class="edu-btn btn-primary btn-small mt-4">{userInfo?.profile?.image ? "Change Profile" : "Upload Profile"}</a>
                                        </div>
                                        <ul className="social-share">
                                            <li><a href="#"><i className="icon-share-alt"></i></a></li>
                                            {userInfo?.profile?.facebook ? (
                                                <li><a href={`${userInfo?.profile?.facebook}`} target="_blank"><i className="icon-facebook"></i></a></li>
                                            ):(null)}
                                           {userInfo?.profile?.twitter ? (
                                                <li><a href={`${userInfo?.profile?.twitter}`} target="_blank"><i className="icon-twitter"></i></a></li>
                                            ):(null)}
                                           {userInfo?.profile?.linkedin ? (
                                                <li><a href={`${userInfo?.profile?.linkedin}`} target="_blank"><i className="icon-linkedin2"></i></a></li>
                                            ):(null)}
                                            {userInfo?.profile?.youtube ? (
                                                <li><a href={`${userInfo?.profile?.youtube}`} target="_blank"><i className="icon-youtube"></i></a></li>
                                            ):(null)}
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-lg-8">
                                    <div className="team-details-content">
                                        <div className="main-info">
                                            <h3 className="title">{userInfo?.name} <a href={`/edit-account/${userInfo?.id}`} class="edu-btn btn-small float-end" type="button"><i class="icon-4"></i> Edit Account</a></h3>
                                            <span className="designation">Teacher</span>
                                            <ul className="team-meta">
                                                <li><i className="icon-25"></i>20 Students</li>
                                                <li>
                                                    <div className="rating">
                                                        <i className="icon-23"></i>
                                                        <i className="icon-23"></i>
                                                        <i className="icon-23"></i>
                                                        <i className="icon-23"></i>
                                                        <i className="icon-23"></i>
                                                    </div>
                                                    <span className="rating-count">(720 Rating)</span>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="bio-describe">
                                            <h4 className="title">About Me</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur elit sed do eius mod tempor incidid labore dolore magna aliqua. enim ad minim eniam quis nostrud exercitation ullamco laboris nisi aliquip ex commodo consequat. duis aute irure dolor in repreed ut perspiciatis unde omnis iste natus error sit voluptat em acus antium.</p>
                                            <p>doloremque laudantium totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi arch itecto beatae vitae dicta sunt explicabo.</p>
                                        </div>

                                        <div className="contact-info">
                                            <h4 className="title">Contact Me</h4>
                                            <ul>
                                                <li><span>Address:</span>{userInfo?.profile?.address}</li>
                                                <li><span>Email:</span><a href={`mailto:${userInfo?.email}`} target="_blank" rel="noreferrer">{userInfo?.email}</a></li>
                                                <li><span>Phone:</span><a href="tel:+37(417)683-4409">{userInfo?.profile?.phone}</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <CourseArea />
                    <Footer style_2={'footer-dark bg-image footer-style-2'} />
                </div>
            </div>
            {showModalUpload && <UploadImageModal showModal={showModalUpload} setShowModal={setShowModalUpload} previewImage={previewImage} setMounted={setMounted}/>}
        </>
    )
}

export default Profile;