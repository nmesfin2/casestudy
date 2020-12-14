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