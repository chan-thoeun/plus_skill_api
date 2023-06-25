import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import MainMenu from '../headers/component/main-menu';
import HeaderTopRight from '../headers/component/header-top-right';
import HeaderTopLeft from '../headers/component/header-top-left';
import SearchPopup from '../../components/common/popup-modal/search-popup';
import useSticky from '../../hooks/use-sticky';
import { wishlistItems } from '../../redux/features/wishlist-slice';
import useCartInfo from '../../hooks/use-cart-info';
import OffCanvas from '../../components/common/sidebar/off-canvas';
import Cart from './component/cart';
import { clearCurrentUser, getCurrentUser } from '../../utils/auth';

// import { ConnectWallet, useAddress } from "@thirdweb-dev/react";

const categories = [
    { link: '/course-style-1', title: 'Design' },
    { link: '/course-style-1', title: 'Development' },
    { link: '/course-style-1', title: 'Architecture' },
    { link: '/course-style-1', title: 'Life Style' },
    { link: '/course-style-1', title: 'Data Science' },
    { link: '/course-style-1', title: 'Marketing' },
    { link: '/course-style-1', title: 'Music' },
    { link: '/course-style-1', title: 'Photography' },
    { link: '/course-style-1', title: 'Finance' },
    { link: '/course-style-1', title: 'Motivation' }
]

const Header = ({ header_style, no_top_bar, disable_full_width, disable_category }) => {
    const { sticky } = useSticky();
    const { quantity } = useCartInfo();
    const wishlists = useSelector(wishlistItems);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    const [mounted, setMounted] = useState(false);

    const getUserLogin = async () =>{
        let users = await getCurrentUser();
        if(users?.token !== undefined && users?.token !== null){
            setIsLogin(true);
            setMounted(true);
        }
    }

    const logoutAccount = async() => {
        let status = await clearCurrentUser();
        if(status === true)
            window.location.replace("/sign_in");
    }

    useEffect(() => {
        if(mounted === false)
            getUserLogin();
    }, [mounted])

    return (
        <>
            <header className={`edu-header header-style-${header_style ? header_style : '1'} ${ disable_full_width ? 'disbale-header-fullwidth' : 'header-fullwidth' } ${no_top_bar ? 'no-topbar' : ''}`}>
                { ! no_top_bar && 
                    <div className="header-top-bar">
                        <div className="container-fluid">
                            <div className="header-top">
                                <div className="header-top-left">
                                    <HeaderTopLeft />
                                </div>
                                <div className="header-top-right">
                                    <HeaderTopRight />
                                </div>
                            </div>
                        </div>
                    </div>
                }
                <div id="edu-sticky-placeholder"></div>
                <div className={`header-mainmenu ${sticky ? 'edu-sticky' : ''}`}>
                    <div className="container-fluid">
                        <div className="header-navbar">
                            <div className="header-brand">
                                <div className="logo">
                                    <a href={'/'}>
                                        <a>
                                            <img className="logo-light" src='/assets/images/logo/plus-skill.png' alt="logo" />
                                            <img className="logo-dark" src='/assets/images/logo/plus-skill.png' alt="logo" />
                                        </a>
                                    </a>
                                </div>

                                { ! disable_category &&
                                    <div className="header-category">
                                        <nav className="mainmenu-nav">
                                            <ul className="mainmenu">
                                                <li className="has-droupdown">
                                                    <a href="#"><i className="icon-1"></i>Category</a>
                                                    <ul className="submenu">
                                                        {
                                                            categories.map((category, i) => (
                                                                <li key={i}>
                                                                    <a href={`${category.link}`}><a>{category.title}</a></a>
                                                                </li>
                                                            ) )
                                                        }
                                                    </ul>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                }
                            </div>
                            <div className="header-mainnav">
                                <nav className="mainmenu-nav">
                                    {/* main menu start */}
                                    <MainMenu />
                                    {/* main menu end */}
                                </nav>
                            </div>
                            <div className="header-right">
                                <ul className="header-action">
                                    <li className="search-bar">
                                        <div className="input-group">
                                            <input type="text" className="form-control" placeholder="Search" />
                                            <button className="search-btn" type="button">
                                                <i className="icon-2"></i>
                                            </button>
                                        </div>
                                    </li>
                                    <li className="icon search-icon">
                                        <a style={{cursor:'pointer'}} onClick={() => setIsSearchOpen(true)} className="search-trigger">
                                            <i className="icon-2"></i>
                                        </a>
                                    </li>
                                    <li className="icon cart-icon">
                                        <Link href="/cart">
                                            <a className="cart-icon">
                                                <i className="icon-3"></i>
                                                <span className="count">{quantity}</span>
                                            </a>
                                        </Link>
                                        <Cart />
                                    </li>
                                    {isLogin === true ?
                                        <li className="icon cart-icon">
                                            <a href='#'>
                                                <a className="cart-icon">
                                                    <img src="https://edublink.react.devsblink.com/assets/images/blog/comment-01.jpg" alt="Comment Images" style={{width: "50px", borderRadius: "50px"}}/>
                                                </a>
                                            </a>
                                            <div className="edublink-header-mini-cart">
                                                <div className="wrapper empty-cart-wrapper-profile">
                                                    <a href={'/dashbaord'} style={{ height: "40px" }}>
                                                        <li>
                                                            <h5 className="empty-cart">Dashbaord</h5>
                                                        </li>
                                                    </a>
                                                    <a href={"/profile-teacher?id="+ getCurrentUser().id} style={{ height: "40px" }}>
                                                        <li>
                                                            <h5 className="empty-cart">My Account</h5>
                                                        </li>
                                                    </a>
                                                    <a href="#" style={{ height: "40px" }}>
                                                        <li>
                                                            <h5 className="empty-cart">Settings</h5>
                                                        </li>
                                                    </a>
                                                    <a href="#" style={{ height: "40px" }} onClick={() => logoutAccount()}>
                                                        <li>
                                                            <h5 className="empty-cart">Log Out</h5>
                                                        </li>
                                                    </a>
                                                </div>
                                            </div>
                                        </li>
                                    :
                                        <li className="icon cart-icon">
                                            <a href='#'>
                                                <a className="cart-icon">
                                                    <img src="https://edublink.react.devsblink.com/assets/images/blog/comment-03.jpg" alt="Comment Images" style={{width: "50px", borderRadius: "50px"}}/>
                                                </a>
                                            </a>
                                        </li>
                                    }
                                    <li className="header-btn">
                                        {/* <ConnectWallet  
                                            btnTitle="Connect Wallet"
                                            className="edu-btn btn-smal"
                                        /> */}
                                    </li>
                                    <li className="mobile-menu-bar d-block d-xl-none">
                                        <button className="hamberger-button" onClick={() => setIsOpen(true)}>
                                            <i className="icon-54"></i>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Start Search Popup  --> */}
                <SearchPopup isSearchOpen={isSearchOpen} setIsSearchOpen={setIsSearchOpen} />
                {/* <!-- End Search Popup  --> */}
            </header>

            {/* sidebar start */}
            <OffCanvas isOpen={isOpen} setIsOpen={setIsOpen} />
            {/* sidebar end */}
        </>
    )
}

export default Header;