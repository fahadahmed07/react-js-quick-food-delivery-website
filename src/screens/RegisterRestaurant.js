import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import 'bootstrap/dist/css/bootstrap.css';
import '../App.css'


export default class RegisterRestaurant extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid register-cont1">
                    <div className="">
                        <Navbar />
                        <div className="container register-cont1-text">
                            <h1 className="text-uppercase text-white text-center mb-4"><strong>Register User And Add Restaurant</strong></h1>
                        </div>
                    </div>
                </div>
                <div className="container-fluid py-5 bg-light">
                    <div className="col-lg-6 col-md-6 col-sm-12 mx-auto bg-white shadow p-4">
                        <h2 className="text-center mb-4">Register Restaurant</h2>
                        <form action="javascript:void(0)">
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="restaurantName">Restaurant Name</label>
                                    <input type="text" className="form-control" id="restaurantName" placeholder="Natural Healthy Food" />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="restaurantEmail">Email</label>
                                    <input type="email" className="form-control" id="restaurantEmail" placeholder="Email" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="restaurantPassword">Password</label>
                                    <input type="password" className="form-control" id="restaurantPassword" placeholder="Password" />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="restaurantConfirmPassword">Confirm Password</label>
                                    <input type="password" className="form-control" id="restaurantConfirmPassword" placeholder="Password" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="restaurantCity">City</label>
                                    <input type="text" className="form-control" id="restaurantCity" />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="restaurantCountry">Country</label>
                                    <input type="text" className="form-control" id="restaurantCountry" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-4">
                                    <label htmlFor="restaurantGender">Gender</label>
                                    <select id="restaurantGender" className="form-control">
                                        <option defaultValue>Male</option>
                                        <option>Female</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-2">
                                    <label htmlFor="restaurantAge">Age</label>
                                    <input type="number" className="form-control" id="restaurantAge" />
                                </div>
                                <div className="form-group col-md-6">
                                    <p className="mb-2">Choose Logo</p>
                                    <div className="custom-file">
                                        <input type="file" className="custom-file-input" id="restaurantLogo" />
                                        <label className="custom-file-label" htmlFor="restaurantLogo">Choose file...</label>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="restaurantTNC" />
                                    <label className="custom-control-label" htmlFor="restaurantTNC">Accept Terms and Conditions</label>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-warning text-uppercase"><b>Register Restaurant</b></button>
                        </form>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}