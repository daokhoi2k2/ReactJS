import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link to="#" className="navbar-brand" href="#">
                    PS18239
                </Link>
 
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" className="nav-link active" aria-current="page">
                                Trang chủ
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/loaiSach">
                                Quản lý loại sách
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/sach">
                                Quản lý sách
                            </Link>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <button className="btn btn-outline-success" type="submit">
                            Search
                        </button>
                    </form>
                </div>
            </div>
        </nav>

    );
};

export default Navbar;