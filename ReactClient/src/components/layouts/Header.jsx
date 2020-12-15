import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../redux/actions/authAction';
import Navbarsecond from './Navbarsecond';
import Navbar from './Navbar';

const Header = ({ auth: { isAuthenticated }}) => {
  const authLinks = (
    <section className="header">
      <section className="header-top">
        <section className="header-top_logo">
          <a href="/" className="header-logo"></a>
        </section>
        <section className="header-top_navbar">
          <Navbarsecond/>
        </section>
      </section>
      <section className="header-bottom">
        <section className="header-bottom_phone">
        </section>
        <section className="header-bottom_email">
          
        </section>
      </section>
    </section>
    // <ul>
    //   <li>
    //     <Link to="/profiles">Developers</Link>
    //   </li>
    //   <li>
    //     <Link to="/posts">Posts</Link>
    //   </li>
    //   <li>
    //     <Link to="/dashboard">
    //       <i className="fas fa-user" />{' '}
    //       <span className="hide-sm">Dashboard</span>
    //     </Link>
    //   </li>
    //   <li>
    //     <a onClick={logout} href="#!">
    //       <i className="fas fa-sign-out-alt" />{' '}
    //       <span className="hide-sm">Logout</span>
    //     </a>
    //   </li>
    // </ul>
  );

  const guestLinks = (
    <section className="header">
      <section className="header-top">
        <section className="header-top_logo">
          <a href="/" className="header-logo"></a>
        </section>
        <section className="header-top_navbar">
          <Navbar/>
        </section>
      </section>
      <section className="header-bottom">
        <section className="header-bottom_phone">
        </section>
        <section className="header-bottom_email">
          
        </section>
      </section>
    </section>
    // <ul>
    //   <li>
    //     <Link to="/profiles">Developers</Link>
    //   </li>
    //   <li>
    //     <Link to="/register">Register</Link>
    //   </li>
    //   <li>
    //     <Link to="/login">Login</Link>
    //   </li>
    // </ul>

  );

  return (
    <nav className="navbar bg-white">
      <h1>
        <Link to="/">
          <i className="fas fa-code" /> Product Catalog
        </Link>
      </h1>
      <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
    </nav>
  );
};

Header.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Header);