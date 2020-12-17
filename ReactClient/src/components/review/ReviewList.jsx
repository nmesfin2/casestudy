import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import { Table, Button, Alert } from 'react-bootstrap';
import axios from 'axios'


export default class ReviewList extends Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          Reviews: [],
          response: {}
        }
      }
    
      
      componentDidMount() {
        const apiUrl = 'http://localhost:9040/api/v1/review';
    
        fetch(apiUrl)
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                Reviews: result
              });
            },
            (error) => {
              this.setState({ error });
            }
          )
      }
    
      fetchAgain(){
        const apiUrl = 'http://localhost:9040/api/v1/review';
    
        fetch(apiUrl)
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                Reviews: result
              });
            },
            (error) => {
              this.setState({ error });
            }
          )
      }

      deleteReview(ReviewId) {
        axios.delete('http://localhost:9040/api/v1/review/'+ ReviewId)
         .then(res => this.fetchAgain())
         
         .catch(err =>console.log(JSON.stringify(err)))
      }

      addReview(){
        <Redirect to="/addReview"></Redirect>
      }
    
    render() {
         const { error, Reviews} = this.state;
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
              <a href="addReview" className="btn btn-lg btn-info mr-2">
                  Add New Review
                </a>
              </div>
              <h2>Review List</h2>
              {this.state.response.message && <Alert variant="info">{this.state.response.message}</Alert>}
              <Table>
                <thead>
                  <tr>
               
                    <th>ProductId</th>
                    <th>UserName</th>
                    <th>Rating</th>
                    <th>Comment</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {Reviews.map(Review => (
                    <tr key={Review.id}>
                      <td>{Review.productId}</td>
                      <td>{Review.username}</td>
                      <td>{Review.rating}</td>
                      <td>{Review.comment}</td>
                      <td>
                        <Button variant="info" onClick={() => this.props.editReview(Review.reviewId)} disabled>Edit</Button>
                        &nbsp;<Button variant="danger" onClick={() => this.deleteReview(Review.reviewId)}>Delete</Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          )
        }
      }
    

