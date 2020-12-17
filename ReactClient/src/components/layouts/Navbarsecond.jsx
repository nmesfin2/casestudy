import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { logout } from '../../redux/actions/authAction';
import { connect } from 'react-redux';
import '../../css/Navbar.css'

function Navbarsecond ({logout}) {

  return (
    <section className="navbar">
      {/* <Link to="/" className="navbar-item">Home</Link> */}
      <Link to="/products" className="navbar-item">Manage Products</Link>
      <Link to="/stock" className="navbar-item">Stock Service</Link>
      <Link to="/price" className="navbar-item">Pricing</Link>
      <Link to="/review" className="navbar-item">Review Service</Link>
        <Link className="navbar-item" onClick={logout} to="/login">
          <i className="fas fa-sign-out-alt" />{' '}
          <span className="hide-sm">Logout</span>
        </Link>

  </section>
  )

}

Navbarsecond.propTypes = {
  logout: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbarsecond);