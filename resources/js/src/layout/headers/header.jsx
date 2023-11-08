// import React, { useEffect, useState } from 'react';
// import Link from 'next/link';
// import { useSelector } from 'react-redux';
// import MainMenu from '../headers/component/main-menu';
// import HeaderTopRight from '../headers/component/header-top-right';
// import HeaderTopLeft from '../headers/component/header-top-left';
// import SearchPopup from '../../components/common/popup-modal/search-popup';
// import useSticky from '../../hooks/use-sticky';
// import { wishlistItems } from '../../redux/features/wishlist-slice';
// import useCartInfo from '../../hooks/use-cart-info';
// import OffCanvas from '../../components/common/sidebar/off-canvas';
// import Cart from './component/cart';
// import { clearCurrentUser, getCurrentUser } from '../../utils/auth';

// import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
// import { 
//     HiOutlineGift,
//     HiUserCircle 
// } from "react-icons/hi";

// const categories = [
//     { link: '/course-style-1', title: 'Design' },
//     { link: '/course-style-1', title: 'Development' },
//     { link: '/course-style-1', title: 'Architecture' },
//     { link: '/course-style-1', title: 'Life Style' },
//     { link: '/course-style-1', title: 'Data Science' },
//     { link: '/course-style-1', title: 'Marketing' },
//     { link: '/course-style-1', title: 'Music' },
//     { link: '/course-style-1', title: 'Photography' },
//     { link: '/course-style-1', title: 'Finance' },
//     { link: '/course-style-1', title: 'Motivation' }
// ]

// const Header = ({ header_style, no_top_bar, disable_full_width, disable_category }) => {
//     const { sticky } = useSticky();
//     const { quantity } = useCartInfo();
//     const wishlists = useSelector(wishlistItems);
//     const [isSearchOpen, setIsSearchOpen] = useState(false);
//     const [isOpen, setIsOpen] = useState(false);
//     const [isLogin, setIsLogin] = useState(false);
//     const [mounted, setMounted] = useState(false);

//     const getUserLogin = async () =>{
//         let users = await getCurrentUser();
//         if(users?.token !== undefined && users?.token !== null){
//             setIsLogin(true);
//             setMounted(true);
//         }
//     }

//     const logoutAccount = async() => {
//         let status = await clearCurrentUser();
//         if(status === true)
//             window.location.replace("/sign_in");
//     }

//     useEffect(() => {
//         if(mounted === false)
//             getUserLogin();
//     }, [mounted])

//     return (
//         <>
//             <header className={`edu-header header-style-${header_style ? header_style : '1'} ${ disable_full_width ? 'disbale-header-fullwidth' : 'header-fullwidth' } ${no_top_bar ? 'no-topbar' : ''}`}>
//                 { ! no_top_bar && 
//                     <div className="header-top-bar">
//                         <div className="container-fluid">
//                             <div className="header-top">
//                                 <div className="header-top-left">
//                                     <HeaderTopLeft />
//                                 </div>
//                                 <div className="header-top-right">
//                                     <HeaderTopRight />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 }
//                 <div id="edu-sticky-placeholder"></div>
//                 <div className={`header-mainmenu ${sticky ? 'edu-sticky' : ''}`}>
//                     <div className="container-fluid">
//                         <div className="header-navbar">
//                             <div className="header-brand">
//                                 <div className="logo">
//                                     <a href={'/'}>
//                                         <a>
//                                             <img className="logo-light" src='/assets/images/logo/plus-skill.png' alt="logo" />
//                                             <img className="logo-dark" src='/assets/images/logo/plus-skill.png' alt="logo" />
//                                         </a>
//                                     </a>
//                                 </div>

//                                 { ! disable_category &&
//                                     <div className="header-category">
//                                         <nav className="mainmenu-nav">
//                                             <ul className="mainmenu">
//                                                 <li className="has-droupdown">
//                                                     <a href="#"><i className="icon-1"></i>Category</a>
//                                                     <ul className="submenu">
//                                                         {
//                                                             categories.map((category, i) => (
//                                                                 <li key={i}>
//                                                                     <a href={`${category.link}`}><a>{category.title}</a></a>
//                                                                 </li>
//                                                             ) )
//                                                         }
//                                                     </ul>
//                                                 </li>
//                                             </ul>
//                                         </nav>
//                                     </div>
//                                 }
//                             </div>
//                             <div className="header-mainnav">
//                                 <nav className="mainmenu-nav">
//                                     {/* main menu start */}
//                                     <MainMenu />
//                                     {/* main menu end */}
//                                 </nav>
//                             </div>
//                             <div className="header-right">
//                                 <ul className="header-action">
//                                     <li className="search-bar">
//                                         <div className="input-group">
//                                             <input type="text" className="form-control" placeholder="Search" />
//                                             <button className="search-btn" type="button">
//                                                 <i className="icon-2"></i>
//                                             </button>
//                                         </div>
//                                     </li>
//                                     <li className="icon search-icon">
//                                         <a style={{cursor:'pointer'}} onClick={() => setIsSearchOpen(true)} className="search-trigger">
//                                             <i className="icon-2"></i>
//                                         </a>
//                                     </li>
//                                     <li className="icon cart-icon">
//                                         <Link href="/cart">
//                                             <a className="cart-icon">
//                                                 <i className="icon-3"></i>
//                                                 <span className="count">{quantity}</span>
//                                             </a>
//                                         </Link>
//                                         <Cart />
//                                     </li>
//                                     {isLogin === true ? (
                                        // <li className="icon cart-icon">
                                        //      <img src="https://edublink.react.devsblink.com/assets/images/blog/comment-01.jpg" alt="Comment Images" style={{width: "50px", borderRadius: "50px"}}/>
                                        //     <div class="edublink-header-mini-cart">
                                        //         <ul class="wrapper empty-cart-wrapper droupdown-profile p-3">
                                        //             <li><a href="/contact-us"><HiOutlineGift className="h-6 w-6 text-blue-500 me-2"/>Dashbaord</a></li>
                                        //             <li><a href="/accoun"><HiUserCircle className="fs-5 text-blue-500 me-2"/>My Account</a></li>
                                        //             <li><a href="/contact-us"><HiOutlineGift className="h-6 w-6 text-blue-500 me-2"/>Video</a></li>
                                        //             <li><a href="/contact-us"><HiOutlineGift className="h-6 w-6 text-blue-500 me-2"/>Wallet</a></li>
                                        //             <li><a href="/contact-us"><HiOutlineGift className="h-6 w-6 text-blue-500 me-2"/>Balanaced</a></li>
                                        //             <li><a href="/contact-us"><HiOutlineGift className="h-6 w-6 text-blue-500 me-2"/>Lesson </a></li>
                                        //         </ul>
                                        //     </div>
                                        // </li>
//                                     ):(null)}
//                                    <ConnectWallet
//                                         theme="dark"
//                                         btnTitle="Connect Wallet"
//                                     />
//                                     <li className="mobile-menu-bar d-block d-xl-none">
//                                         <button className="hamberger-button" onClick={() => setIsOpen(true)}>
//                                             <i className="icon-54"></i>
//                                         </button>
//                                     </li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* <!-- Start Search Popup  --> */}
//                 <SearchPopup isSearchOpen={isSearchOpen} setIsSearchOpen={setIsSearchOpen} />
//                 {/* <!-- End Search Popup  --> */}
//             </header>

//             {/* sidebar start */}
//             <OffCanvas isOpen={isOpen} setIsOpen={setIsOpen} />
//             {/* sidebar end */}
//         </>
//     )
// }

// export default Header;
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import SearchPopup from '../../components/common/popup-modal/search-popup';
import OffCanvas from '../../components/common/sidebar/off-canvas';
import useCartInfo from '../../hooks/use-cart-info';
import useSticky from '../../hooks/use-sticky';
import { wishlistItems } from '../../redux/features/wishlist-slice';
import MainMenu from './component/main-menu';
import Cart from './component/cart';

const Header = ({ style_3, no_topBar = false }) => {
    const { sticky } = useSticky();
    const { quantity } = useCartInfo();
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const wishlists = useSelector(wishlistItems);
    return (
        <>
            <header className={`edu-header header-style-${style_3 ? '3' : '2'} ${no_topBar ? 'no-topbar' : ''}`}>
                {!no_topBar && 
                    <div className="header-top-bar">
                        <div className="container">
                            <div className="header-top">
                                <div className="header-top-left">
                                    <ul className="header-info">
                                        <li><a href="tel:+011235641231"><i className="icon-phone"></i>Call: 123 4561 5523</a></li>
                                        <li><a href="mailto:info@edublink.com" rel="noreferrer" target="_blank"><i className="icon-envelope"></i>Email: info@edublink.com</a></li>
                                    </ul>
                                </div>

                                <div className="header-top-right">
                                    <ul className="header-info">
                                        <li><Link to="/sign_in"><a>Login</a></Link></li>
                                        <li><Link to="/sign_up"><a>Register</a></Link></li>
                                        <li className="header-btn"><a href="#" className={`edu-btn ${style_3 ? '' : 'btn-secondary'} btn-medium`}>Apply Now <i className="icon-4"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                }

                <div id="edu-sticky-placeholder"></div>

                <div className={`header-mainmenu ${sticky ? 'edu-sticky' : ''}`}>
                    <div className="container">
                        <div className="header-navbar">
                            <div className="header-brand">
                                <div className="logo">
                                    <Link href="/">
                                        <a>
                                            <img className="logo-light" src={style_3 ? '/assets/images/logo/plus-skill.png' : "/assets/images/logo/plus-skill.png"} alt="Corporate Logo" />
                                            <img className="logo-dark" src={style_3 ? '/assets/images/logo/plus-skill.pngg' : "/assets/images/logo/plus-skill.png"} alt="Corporate Logo" />
                                        </a>
                                    </Link>
                                </div>
                            </div>

                            <div className="header-mainnav">
                                <nav className="mainmenu-nav">
                                    <MainMenu />
                                </nav>
                            </div>

                            <div className="header-right">
                                <ul className="header-action">
                                    <li className="icon search-icon" onClick={() => setIsSearchOpen(true)}>
                                        <a style={{cursor:'pointer'}} className="search-trigger">
                                            <i className="icon-2"></i>
                                        </a>
                                    </li>

                                    <li className="icon">
                                        <Link href="/wishlist">
                                            <a className="wishlist">
                                                <i className="icon-22"></i>
                                                <span className="count">{wishlists?.length}</span>
                                            </a>
                                        </Link>
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
                                    <li className="icon cart-icon">
                                        <Link href="/cart">
                                            <a className="cart-icon">
                                                <i className="icon-3"></i>
                                                <span className="count">{quantity}</span>
                                            </a>
                                        </Link>
                                        <Cart />
                                    </li>
                                    <li className="icon cart-icon">
                                        <img src="https://edublink.react.devsblink.com/assets/images/blog/comment-01.jpg" alt="Comment Images" style={{width: "50px", borderRadius: "50px"}}/>
                                        <div class="edublink-header-mini-cart">
                                            <ul class="wrapper empty-cart-wrapper droupdown-profile p-3">
                                                <li><a href="/account">Dashbaord</a></li>
                                                <li><a href="/accoun">My Account</a></li>
                                                <li><a href="/contact-us">Video</a></li>
                                                <li><a href="/contact-us">Wallet</a></li>
                                                <li><a href="/contact-us">Balanaced</a></li>
                                                <li><a href="/contact-us">Lesson </a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    {no_topBar && 
                                        <li className="header-btn">
                                            <a href="#" className="edu-btn btn-medium">Apply Now <i className="icon-4"></i></a>
                                        </li>
                                    }

                                    <li className="mobile-menu-bar d-block d-xl-none">
                                        <button className="hamberger-button" onClick={()=> setIsOpen(true)}>
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