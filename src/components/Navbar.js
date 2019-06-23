import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { update_user } from '../store/action';

class Navbar extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  async componentDidMount() {
    this.props.update_user();
  }

  static getDerivedStateFromProps(props){
    console.log("getDerivedStateFromProps =>>",props.user)
    return {
      updated_user: props.user
    }
  }

  render() {
    // console.log(this.props.user.email)
    const {updated_user } = this.state
    console.log("updated_user ===>>", updated_user)
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
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => {
  console.log("mapStateToProps states =>> ", state);
  return {
    user: state.user,
    // todos: state.todos
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // store_user: (user) => dispatch(update_user(user)),
    update_user: () => dispatch(update_user())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
