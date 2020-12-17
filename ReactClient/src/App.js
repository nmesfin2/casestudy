import './App.css';
import Header  from './components/layouts/Header'
import Landing  from './components/layouts/Landing'
import Footer  from './components/layouts/Footer'

import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import sample from './components/layouts/sample';
import PostList from './components/layouts/PostList';
import store from './redux/store/store'

import {Provider} from 'react-redux'
import Product from './components/product/Product';
import ProductList from './components/product/ProductList';
import AddProducts from './components/product/AddProducts';
import PriceList from './components/stock/PriceList';
import AddPrice from './components/stock/AddPrice';
import StockList from './components/productstock/StockList';
import AddStock from './components/productstock/AddStock';
import AddReview from './components/review/AddReview';
import ReviewList from './components/review/ReviewList';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Header></Header>
          <Route exact path="/" component={Landing}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/register" component={Register}></Route>
          <Route exact path="/sample" component={sample}></Route>
          <Route exact path="/products" component={ProductList}></Route>
          <Route exact path="/postlist" component={PostList}></Route>
          <Route exact path="/addproduct" component={AddProducts}></Route>
          <Route exact path="/addprice" component={AddPrice}></Route>
          <Route exact path="/price" component={PriceList}></Route>
          <Route exact path="/stock" component={StockList}></Route>
          <Route exact path="/addstock" component={AddStock}></Route>
          <Route exact path="/addreview" component={AddReview}></Route>
          <Route exact path="/review" component={ReviewList}></Route>
          <Footer></Footer>
        </Router>
      </div>
    </Provider>
  );
}

export default App;


// const postList=[
//   {
//     id:1,
//     content : 'this world will be out of the pandemic soon',
//     user:'natty'
//   },
//   {
//     id:2,
//     content : 'hello from Natty',
//     user:'natty'
//   },
//   {
//     id:3,
//     content : 'How r u',
//     user:'natty'
//   },
//   {
//     id:4,
//     content : 'this world will be out of the pandemic soon',
//     user:'natty'
//   }
// ]