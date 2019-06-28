import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { update_user, remove_user } from '../store/action';
// import { logOut, } from '../config/firebase';

class Navbar extends Component {
  constructor() {
    super()
    this.state = {

    }
    this.withLogin = this.withLogin.bind(this);
  }

  async componentDidMount() {
    this.props.update_user();
    if (this.props.user) {
      // console.log("this.props.user ==>>", this.props.user)
    }
  }

  static getDerivedStateFromProps(props) {
    if (props.user) {     
      // console.log("getDerivedStateFromProps =>>", props)
      return {
        updated_user: props.user
      }
    } else {
      return {
        updated_user: {
          isLogin: false,
        }
      }
    }
  }

  withOutLogin() {
    return (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <span className="nav-link active text-uppercase mr-2"><Link to="/restaurants">Restaurants</Link></span>
        </li>
        <li className="nav-item">
          <span className="nav-link text-uppercase mr-2"><Link to="/login">Login / Register</Link></span>
        </li>
        <li className="nav-item">
          <Link to="/register-restaurant">
            <button type="button" className="btn btn-warning btn-sm text-uppercase mr-2 mr-1 px-3">Register Restaurant</button>
          </Link>
        </li>
      </ul>
    )
  }
  withLogin() {
    const { updated_user } = this.state
    // this.props.history.push('/')
    return (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <span className="nav-link active text-uppercase mr-2"><Link to="/restaurants">Restaurants</Link></span>
        </li>
        <li className="nav-item">
          <span className="nav-link active text-uppercase mr-2">{updated_user.userName}</span>
        </li>
        <li className="nav-item">
          <button type="button" className="btn btn-warning btn-sm text-uppercase mr-2 mr-1 px-3" onClick={()=>this.props.remove_user()}>Log Out</button>
        </li>
      </ul>
    )
  }


  render() {
    // console.log(this.props.user.email)
    const { updated_user } = this.state
    // console.log("updated_user render ===>>", updated_user && updated_user.isLogin) // or yaha sahi object mil raha hai
    // console.log("updated_user ===>>", updated_user.email) // is py error araha hai sir
    return (
      // Navbar
      <nav className="navbar navbar-expand-lg navbar-dark pt-3">
        {/* Brand image */}
        <Link className="navbar-brand" to="/">
          <img alt="Quick Food Logo" src={require("../assets/images/logo.png")} />
        </Link>

        {/* Collapse button */}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <span className="nav-link text-uppercase mr-2"><Link to="/login">Login / Register</Link></span>
            </li>
            <li className="nav-item">
              <Link to="/register-restaurant">
                <button type="button" className="btn btn-warning btn-sm text-uppercase mr-2 mr-1 px-3">Register Restaurant</button>
              </Link>
            </li>
            <li className="nav-item">
              <span className="nav-link active text-uppercase mr-2"><Link to="/restaurants">Restaurants</Link></span>
            </li>
            <li className="nav-item">
              <span className="nav-link active text-uppercase mr-2">{updated_user.userName}</span>
            </li>
            <li className="nav-item">
              <button type="button" className="btn btn-warning btn-sm text-uppercase mr-2 mr-1 px-3" onClick={logOut}>Log Out</button>
            </li>
          </ul> */}
          {updated_user.isLogin ? this.withLogin() : this.withOutLogin()}
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => {
  // console.log("mapStateToProps states =>> ", state);
  return {
    user: state.user,
    // todos: state.todos
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // store_user: (user) => dispatch(update_user(user)),
    update_user: () => dispatch(update_user()),
    remove_user: () => dispatch(remove_user())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

