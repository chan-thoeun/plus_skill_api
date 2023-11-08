import React from 'react';
import { Link } from 'react-router-dom';
import { Footer, Header } from '../../layout';
import BreadcrumbThree from '../breadcrumb/breadcrumb-3';
import LoginForm from '../forms/login-form';

const index = () => {
    return (
        <div className='sticky-header'>
            <div id="main-wrapper" className="main-wrapper">
                <Header no_top_bar={true} />
                <section className="account-page-area section-gap-equal">
                    <div className="container position-relative">
                        <div className="row g-5 justify-content-center">
                            <div className="col-lg-5">
                                <div className="login-form-box registration-form">
                                    <h3 className="title">Login</h3>
                                    <p>Don't have an account? <Link to="/sign_up">Sign Up</Link></p>
                                    <LoginForm/>
                                </div>
                            </div>
                        </div>
                
                        <ul className="shape-group">
                            <li className="shape-1 scene">
                                <img src="/assets/images/about/shape-07.png" alt="Shape" />
                            </li>
                            <li className="shape-2 scene">
                                <img src="/assets/images/about/shape-13.png" alt="Shape" />
                            </li>
                            <li className="shape-3 scene">
                                <img src="/assets/images/counterup/shape-02.png" alt="Shape" />
                            </li>
                        </ul>
                    </div>
                </section>
                <Footer style_2={'footer-dark bg-image footer-style-2'} />
            </div>
        </div>
    )
}

export default index;