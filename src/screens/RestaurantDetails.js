import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import 'bootstrap/dist/css/bootstrap.css';
import '../App.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class RestaurantDetails extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid res-details-cont1">
                    <div className="">
                        <Navbar />
                        <div className="container px-0 res-details-cont1-text">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ background: "#EBEDF3" }} className="container-fluid py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-2 col-md-2 col-sm-12">
                                <div className="listing-category">
                                    <div className="category-heading py-0 mb-1">
                                        <h6 className="m-0"><FontAwesomeIcon icon="utensils" className="mr-2" />Categories</h6>
                                    </div>
                                    <div>
                                        <ul className="category-list">
                                            <li>
                                                <p>Kebabs</p>
                                            </li>
                                            <li>
                                                <p>Chicken</p>
                                            </li>
                                            <li>
                                                <p>Burgers</p>
                                            </li>
                                            <li>
                                                <p>Biryani</p>
                                            </li>
                                            <li>
                                                <p>Sauces</p>
                                            </li>
                                            <li>
                                                <p>Vegatable Dishes</p>
                                            </li>
                                            <li>
                                                <p>Garlic Bread</p>
                                            </li>
                                            <li>
                                                <p>Specials</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-7 col-sm-12">
                                <h4 className="mb-3">18 Restaurant's Found</h4>
                                <div className="container bg-white p-3 px-0 mb-4">
                                    <div className="row">
                                        <div className="col-lg-3 col-md-3 col-sm-12 px-0 text-center">
                                            <img style={{ width: "70%" }} alt="Natural Healthy Food" src={require("../assets/images/fb_masonary_9.jpg")} />
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 px-0">
                                            <h5 className="">Chicken Tandoori Special 12" Deep Pan</h5>
                                            <p className=""><small>Cheese, tomatoes and italian herbs.</small></p>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-12 py-4 px-0">
                                            <span className="mx-3">£4.50</span>
                                            <span style={{ display: 'inline-block', textAlign: 'center', borderRadius: '80px', border: '2px solid #eb6825', padding: '4px 9px 4px 9px', }} ><FontAwesomeIcon icon="plus" className="text-warning" /></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-12">
                                <div className="container bg-white py-3 sort-by">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}