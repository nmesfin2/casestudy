import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import { Table, Button, Alert } from 'react-bootstrap';
import axios from 'axios'


export default class PriceList extends Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          Prices: [],
          response: {}
        }
      }
    
      
      componentDidMount() {
        const apiUrl = 'http://localhost:9030/api/v1/price';
    
        fetch(apiUrl)
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                Prices: result
              });
            },
            (error) => {
              this.setState({ error });
            }
          )
      }
    
      fetchAgain(){
        const apiUrl = 'http://localhost:9030/api/v1/price';
    
        fetch(apiUrl)
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                Prices: result
              });
            },
            (error) => {
              this.setState({ error });
            }
          )
      }

      deletePrice(PriceId) {
        axios.delete('http://localhost:9030/api/v1/price/'+ PriceId)
         .then(res => this.fetchAgain())
         
         .catch(err =>console.log(JSON.stringify(err)))
      }

      addPrice(){
        <Redirect to="/addPrice"></Redirect>
      }
    
    render() {
        const { error, Prices} = this.state;
        if(localStorage.getItem("data") == null){
          return <Redirect to='/login'></Redirect>
        }

        // if(error) {
        //   return (
        //     <div>Error: {error.message}</div>
        //   )
        // } else {
          return(
            <div>
              <div>
              <a href="addPrice" className="btn btn-lg btn-info mr-2">
                  Add New Price
                </a>
              </div>
              <h2>Price List</h2>
              {this.state.response.message && <Alert variant="info">{this.state.response.message}</Alert>}
              <Table>
                <thead>
                  <tr>
                    <th>Product ID</th>
                    <th>Price Value</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {Prices.map(Price => (
                    <tr key={Price.id}>
                      <td>{Price.productId}</td>
                      <td>{Price.priceValue}</td>
                      <td>
                        <Button variant="info" onClick={() => this.props.editPrice(Price.priceId)} disabled>Edit</Button>
                        &nbsp;<Button variant="danger" onClick={() => this.deletePrice(Price.priceId)}>Delete</Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          )
        }
      }
    

