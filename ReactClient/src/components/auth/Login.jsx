import React, { Component, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { LOGIN_FAIL } from '../../redux/actions/types'
import { login } from '../../redux/actions/authAction'
import { Redirect } from 'react-router-dom'

export const Login = ({login,isAuthenticated}) => {
  
    //const [data, setterFunction]=useState({initial data})
    const [formData, setFormData] =useState({username:'',password:''})

    const {username, password} = formData;
    //const username=formData.username;
    //const password=formData.password

    const handleChange = (event) => {
        setFormData({...formData,[event.target.name]:event.target.value})
      };

    const onSubmit = (e) => {
        e.preventDefault();
        console.log("Final state: " + username);
        console.log("Final state: " + password);
         const loginUser = {
           username: username,
           password: password,
         };
        //  axios
        //    .post("http://localhost:9005/api/auth/signin", loginUser)
        //    .then((response) => {console.log(response.data)
        // localStorage.setItem("data", JSON.stringify(response.data));
        login(username,password)
          
        
        // .catch((err) => console.log(err));
    };

    if(isAuthenticated){
      return <Redirect to='/dashboard'></Redirect>
    }

    return (
        <div className="login">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Log In</h1>
              <p className="lead text-center">
                Sign in to your ProductCat account
              </p>
              <form onSubmit={onSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Username"
                    name="username"
                    value={username}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                  />
                </div>
                <input
                  type="submit"
                  value="Login"
                  className="btn btn-info btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    )

}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
}

const mapStateToProps = (state) => ({
  isAuthenticated:state.auth.isAuthenticated
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, {login})(Login)
