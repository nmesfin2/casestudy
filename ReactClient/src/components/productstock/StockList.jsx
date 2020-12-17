import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import { Table, Button, Alert } from 'react-bootstrap';
import axios from 'axios'


export default class StockList extends Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          Stocks: [],
          response: {}
        }
      }
    
      
      componentDidMount() {
        const apiUrl = 'http://localhost:9020/api/v1/stock';
    
        fetch(apiUrl)
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                Stocks: result
              });
            },
            (error) => {
              this.setState({ error });
            }
          )
      }
    
      fetchAgain(){
        const apiUrl = 'http://localhost:9020/api/v1/stock';
    
        fetch(apiUrl)
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                Stocks: result
              });
            },
            (error) => {
              this.setState({ error });
            }
          )
      }

      deleteStock(StockId) {
        axios.delete('http://localhost:9020/api/v1/stock/'+ StockId)
         .then(res => this.fetchAgain())
         
         .catch(err =>console.log(JSON.stringify(err)))
      }

      addStock(){
        <Redirect to="/addStock"></Redirect>
      }
    
    render() {
        const { error, Stocks} = this.state;
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
              <a href="addStock" className="btn btn-lg btn-info mr-2">
                  Add New Stock
                </a>
              </div>
              <h2>Stock List</h2>
              {this.state.response.message && <Alert variant="info">{this.state.response.message}</Alert>}
              <Table>
                <thead>
                  <tr>
                    <th>#ID</th>
                    <th>Location</th>
                    <th>ProductId</th>
                    <th>Quantity</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {Stocks.map(Stock => (
                    <tr key={Stock.id}>
                      <td>{Stock.stockId}</td>
                      <td>{Stock.location}</td>
                      <td>{Stock.productId}</td>
                      <td>{Stock.quantity}</td>
                      <td>
                        <Button variant="info" onClick={() => this.props.editStock(Stock.stockId)} disabled>Edit</Button>
                        &nbsp;<Button variant="danger" onClick={() => this.deleteStock(Stock.stockId)}>Delete</Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          )
        }
      }
    

