import React, { Component , useState} from 'react'
import {productAdd} from '../../redux/actions/productAction'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

const AddProduct = ({productAdd,isAuthenticated}) => {
  const [formData,setFormData] = useState(
    {
      productName:'',
      category:'',
      description:'',
      expiryDate:'',
  
    })

    const {productName,category,description,expiryDate} = formData;
    const onChange=(e) =>{

    setFormData({...formData,[e.target.name]:e.target.value})
    //when state of ur controller is changing then we are holding that changed value in state.
    }

    const onSubmit =(e)=>{
      e.preventDefault();
      const newProduct = {
        productName : productName,
        category:category,
        description:description,
        expiryDate:expiryDate
      };
        // action 
      console.log('hello from register component'+JSON.stringify(formData))
      try{
        productAdd(formData);
        <Redirect to='/products'></Redirect>
      } catch{
        alert("something went wrong")
      }
    
      
    };

    return (
      <div className="addproduct">
              <div className="container">
                <div className="row">
                  <div className="col-md-8 m-auto">
                    <h1 className="display-4 text-center">Add Product</h1>
                    <p className="lead text-center">Create your ProductCat account</p>
                    <form onSubmit={onSubmit}>
                      <div className="form-group">
                        <input type="text" className="form-control form-control-lg" placeholder="Product Name" name="productName" required  value={productName} onChange={onChange} />
                      </div>
                      <div className="form-group">
                        <input type="text" className="form-control form-control-lg" placeholder="Category " name="category" value={category} onChange={onChange}/>
                        {/* <small className="form-text text-muted">This site uses Gravatar so if you want a profile image, use a Gravatar email</small> */}
                      </div>
                      <div className="form-group">
                        <input type="text" className="form-control form-control-lg" placeholder="Product Description" name="description"  value={description} onChange={onChange}/>
                      </div>
                      <div className="form-group">
                        <input type="text" className="form-control form-control-lg" placeholder="Expiry Date" name="expiryDate" value={expiryDate} onChange={onChange} />
                      </div>
                      <input type="submit" className="btn btn-info btn-block mt-4" />
                    </form>
                  </div>
                </div>
              </div>
            </div>
    )
  }

  AddProduct.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    productAdd:PropTypes.func.isRequired
  }
  
  const mapStateToProps = (state) => ({
    isAuthenticated : state.auth.isAuthenticated
    
  })
  
  const mapDispatchToProps = {
    
  }
  
  export default connect(mapStateToProps, {productAdd})(AddProduct)

    