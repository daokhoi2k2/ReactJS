import React from 'react';
import "./HeaderStyle.css";

const Header = () => {
    return (
        <>
            {/*
      
      BootStrap NavBar Example Three - Social Media Icons
       //
      1. Replaced the ugly toggle with angle
      2. Used hover only for large screen and above
      3. You can add resize function if you want in javascript
      4. SlideIn / SlideUp can be replaced with FadeIn /FadeUp
      5. Delay on leaving mouse is applied to ensure the hover actions are not jittery.
      //
      */}
            <nav className="navbar navbar-expand-lg navbar-light shadow-sm bg-light fixed-top">
                <div className="container">
                    {" "}
                    <a className="navbar-brand d-flex align-items-center" href="#">
                        <svg
                            width="40px"
                            version="1.1"
                            id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            viewBox="0 0 512 512"
                            style={{ enableBackground: "new 0 0 512 512" }}
                            xmlSpace="preserve"
                        >
                            <g>
                                <g>
                                    <path
                                        d="M511.981,118.509c-0.135-2.956-1.892-5.726-4.565-7.04l-159.24-79.62c-3.776-1.887-8.363-0.64-10.664,2.898 L229.916,200.282l-55.413-85.891c-0.796-1.235-1.945-2.264-3.259-2.922l-159.24-79.62C6.582,29.138,0,33.218,0,39.268v79.621 c0,4.581,3.712,8.294,8.294,8.294c4.581,0,8.294-3.712,8.294-.294V52.687l142.652,71.326v335.32L16.587,388.008V154.277	c0-4.581-3.712-8.294-8.294-8.294c-4.581,0-8.294,3.712-8.294,8.294v238.857c0,3.142,1.775,6.013,4.585,7.418l159.24,79.62	c5.427,2.714,12.003-1.375,12.003-7.418V318.087l324.17,162.085c5.427,2.714,12.003-1.375,12.003-7.418V118.888	C512,118.76,511.987,118.636,511.981,118.509z M175.827,299.541v-152.5l145.239,225.12L175.827,299.541z M495.413,459.335
      l-139.34-69.671l108.576-186.993c2.299-3.961,0.952-9.037-3.009-11.337c-3.96-2.298-9.036-0.953-11.337,3.009L344.094,377.258
      L239.77,215.555L347.383,49.998l144.717,72.359l-26.387,45.446c-2.299,3.961-0.952,9.037,3.009,11.337	c3.958,2.297,9.035,0.953,11.337-3.009l15.354-26.443V459.335z"
                                        fill="#000"
                                    />
                                </g>
                            </g>
                        </svg>
                        <span className="ml-3 font-weight-bold">BRAND</span>
                    </a>{" "}
                    <button
                        className="navbar-toggler navbar-toggler-right border-0"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbar4"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbar4">
                        <ul className="navbar-nav mr-auto pl-lg-4">
                            <li className="nav-item px-lg-2 active">
                                {" "}
                                <a className="nav-link" href="#">
                                    {" "}
                                    <span className="d-inline-block d-lg-none icon-width">
                                        <i className="fas fa-home" />
                                    </span>
                                    Home
                                </a>{" "}
                            </li>
                            <li className="nav-item px-lg-2">
                                {" "}
                                <a className="nav-link" href="#">
                                    <span className="d-inline-block d-lg-none icon-width">
                                        <i className="fas fa-spa" />
                                    </span>
                                    Services
                                </a>{" "}
                            </li>
                            <li className="nav-item px-lg-2">
                                {" "}
                                <a className="nav-link" href="#">
                                    <span className="d-inline-block d-lg-none icon-width">
                                        <i className="far fa-user" />
                                    </span>
                                    About
                                </a>{" "}
                            </li>
                            <li className="nav-item px-lg-2 dropdown d-menu">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    id="dropdown01"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    <span className="d-inline-block d-lg-none icon-width">
                                        <i className="far fa-caret-square-down" />
                                    </span>
                                    Dropdown
                                    <svg
                                        id="arrow"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={14}
                                        height={14}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <polyline points="6 9 12 15 18 9" />
                                    </svg>
                                </a>
                                <div
                                    className="dropdown-menu shadow-sm sm-menu"
                                    aria-labelledby="dropdown01"
                                >
                                    <a className="dropdown-item" href="#">
                                        Action
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        Another action
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        Something else here
                                    </a>
                                </div>
                            </li>
                            <li className="nav-item px-lg-2">
                                {" "}
                                <a className="nav-link" href="#">
                                    <span className="d-inline-block d-lg-none icon-width">
                                        <i className="far fa-envelope" />
                                    </span>
                                    Contact
                                </a>{" "}
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto mt-3 mt-lg-0">
                            <li className="nav-item">
                                {" "}
                                <a className="nav-link" href="#">
                                    <i className="fab fa-twitter" />
                                    <span className="d-lg-none ml-3">Twitter</span>
                                </a>{" "}
                            </li>
                            <li className="nav-item">
                                {" "}
                                <a className="nav-link" href="#">
                                    <i className="fab fa-facebook" />
                                    <span className="d-lg-none ml-3">Facebook</span>
                                </a>{" "}
                            </li>
                            <li className="nav-item">
                                {" "}
                                <a className="nav-link" href="#">
                                    <i className="fab fa-instagram" />
                                    <span className="d-lg-none ml-3">Instagram</span>
                                </a>{" "}
                            </li>
                            <li className="nav-item">
                                {" "}
                                <a className="nav-link" href="#">
                                    <i className="fab fa-linkedin" />
                                    <span className="d-lg-none ml-3">Linkedin</span>
                                </a>{" "}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/*The html below this line is for display purpose only*/}
            <div className="py-5 text-center text-white bg-primary">
                <div className="container py-5">
                    <div className="row py-5">
                        <div className="mx-auto col-lg-10">
                            <h1 className="display-4 mb-4 ">
                                This is a beautiful Bootstrap 4 Navbar with Social Media Icons{" "}
                            </h1>
                            <p className="lead mb-5">
                                There is nothing more rare, nor more beautiful, than a woman being
                                unapologetically herself; comfortable in her perfect imperfection.
                                To me, that is the true essence of beauty.
                            </p>{" "}
                            <a href="#" className="btn btn-lg btn-outline-light mx-1">
                                Take me there
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>


    );
};

export default Header;