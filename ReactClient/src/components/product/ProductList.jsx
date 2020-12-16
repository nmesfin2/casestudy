import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import { Table, Button, Alert } from 'react-bootstrap';
import axios from 'axios'


export default class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          products: [],
          response: {}
        }
      }
    
      
      componentDidMount() {
        const apiUrl = 'http://localhost:9010/api/v1/product';
    
        fetch(apiUrl)
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                products: result
              });
            },
            (error) => {
              this.setState({ error });
            }
          )
      }
    
      fetchAgain(){
        const apiUrl = 'http://localhost:9010/api/v1/product';
    
        fetch(apiUrl)
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                products: result
              });
            },
            (error) => {
              this.setState({ error });
            }
          )
      }

      deleteProduct(productId) {
        axios.delete('http://localhost:9010/api/v1/product/'+ productId)
         .then(res => this.fetchAgain())
         
         .catch(err =>console.log(JSON.stringify(err)))
      }

      addProduct(){
        <Redirect to="/addproduct"></Redirect>
      }
    
      render() {
        const { error, products} = this.state;
    
        if(error) {
          return (
            <div>Error: {error.message}</div>
          )
        } else {
          return(
            <div>
              <div>
              <a href="addproduct" className="btn btn-lg btn-info mr-2">
                  Add New Product
                </a>
              </div>
              <h2>Product List</h2>
              {this.state.response.message && <Alert variant="info">{this.state.response.message}</Alert>}
              <Table>
                <thead>
                  <tr>
                    <th>#ID</th>
                    <th>Product Name</th>
                    <th>Catagory</th>
                    <th>Description</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map(product => (
                    <tr key={product.id}>
                      <td>{product.productId}</td>
                      <td>{product.productName}</td>
                      <td>{product.category}</td>
                      <td>{product.description}</td>
                      <td>
                        <Button variant="info" onClick={() => this.props.editProduct(product.productId)}>Edit</Button>
                        &nbsp;<Button variant="danger" onClick={() => this.deleteProduct(product.productId)}>Delete</Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          )
        }
      }
    
}
