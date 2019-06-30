import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import 'bootstrap/dist/css/bootstrap.css';
import '../App.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class RestaurantDetails extends Component {
    constructor() {
        super()
        this.state = {
            tab1: "col-12 col-lg-4 col-md-4 text-center res-details-tab-active",
            tab2: "col-12 col-lg-4 col-md-4 text-center",
            tab3: "col-12 col-lg-4 col-md-4 text-center",
            tab1Content: true,
            tab2Content: false,
            tab3Content: false,
        }
    }

    async componentDidMount() {
        const { state } = await this.props.location
        // console.log("Did Mount => ", state)
        if (state) {
            this.setState({
                resDetails: state,
            })
        } else {
            this.props.history.push('/restaurants')
        }
    }

    static getDerivedStateFromProps(props) {
        // console.log("getDerivedStateFromProps => ", props.location.state)
        const { state } = props.location;
        return {
            resDetails: state
        }
    }

    handleTabs(e) {
        if (e === "tab1") {
            this.setState({
                tab1: "col-12 col-lg-4 col-md-4 text-center res-details-tab-active",
                tab2: "col-12 col-lg-4 col-md-4 text-center",
                tab3: "col-12 col-lg-4 col-md-4 text-center",
                tab1Content: true,
                tab2Content: false,
                tab3Content: false,
            })
        } else if (e === "tab2") {
            this.setState({
                tab1: "col-12 col-lg-4 col-md-4 text-center",
                tab2: "col-12 col-lg-4 col-md-4 text-center res-details-tab-active",
                tab3: "col-12 col-lg-4 col-md-4 text-center",
                tab1Content: false,
                tab2Content: true,
                tab3Content: false,
            })
        } else if (e === "tab3") {
            this.setState({
                tab1: "col-12 col-lg-4 col-md-4 text-center",
                tab2: "col-12 col-lg-4 col-md-4 text-center",
                tab3: "col-12 col-lg-4 col-md-4 text-center res-details-tab-active",
                tab1Content: false,
                tab2Content: false,
                tab3Content: true,
            })
        }
    }

    render() {
        const { tab1, tab2, tab3, tab1Content, tab2Content, tab3Content, resDetails } = this.state;
        // console.log("RENDER => ", resDetails)
        return (
            <div>
                <div className="container-fluid res-details-cont1">
                    <div className="">
                        <Navbar />
                        <div className="container px-0 res-details-cont1-text mx-0">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-2 col-md-3 col-6 text-lg-center text-md-center pr-0 mb-2">
                                        <img className="p-2 bg-white rounded text-center" alt="Natural Healthy Food" style={{ width: "60%" }} src={resDetails.userProfileImageUrl} />
                                    </div>
                                    <div className="col-lg-10 col-md-9 col-12 pl-lg-0 pl-md-0">
                                        <h1 className="restaurant-title">{resDetails.userName}</h1>
                                        <p className="restaurant-text">{resDetails.typeOfFood.join(', ')}</p>
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
                                <div className="container">
                                    <div className="row">
                                        <div className={tab1} onClick={() => this.handleTabs("tab1")}>
                                            <p className="res-details-tab-text"><FontAwesomeIcon icon="concierge-bell" className="mr-3" />Menu</p>
                                        </div>
                                        <div className={tab2} onClick={() => this.handleTabs("tab2")}>
                                            <p className="res-details-tab-text"><FontAwesomeIcon icon="comment-alt" className="mr-3" />Reviews</p>
                                        </div>
                                        <div className={tab3} onClick={() => this.handleTabs("tab3")}>
                                            <p className="res-details-tab-text"><FontAwesomeIcon icon="info-circle" className="mr-3" />Restaurant Info</p>
                                        </div>
                                    </div>
                                    {tab1Content &&
                                        < div className="row menu-section">
                                            <div className="col-12 bg-white p-4">
                                                <div className="input-group input-group-sm mb-4 mt-2">
                                                    <input type="text" className="form-control search-menu-input" htmlFor="search-menu" placeholder="Search food item" />
                                                    <div className="input-group-append">
                                                        <span className="input-group-text search-menu-text" id="search-menu"><FontAwesomeIcon icon="search" /></span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <h6 className="mb-4 text-warning">Best food items:</h6>
                                                    <div className="container border-bottom pb-2 px-lg-0 px-md-0 mb-4">
                                                        <div className="row">
                                                            <div className="col-lg-2 col-md-3 col-8 offset-2 offset-lg-0 offset-md-0 px-0 mb-3 text-center">
                                                                <img style={{ width: "85%" }} alt="Natural Healthy Food" src={require("../assets/images/listing-logo03.png")} />
                                                            </div>
                                                            <div className="col-lg-7 col-md-6 col-sm-12 px-0">
                                                                <h6 className="">Chicken Tandoori Special 12" Deep Pan</h6>
                                                                <p className=""><small>Cheese, tomatoes and italian herbs.</small></p>
                                                            </div>
                                                            <div className="col-lg-3 col-md-3 col-sm-12 px-0 text-center">
                                                                <span className="mx-3">RS.500</span>
                                                                <span style={{ display: 'inline-block', textAlign: 'center', fontSize: "12px", borderRadius: '80px', border: '1px solid #eb6825', padding: '4px 8px 4px 8px', margin: "0px 16px" }} ><FontAwesomeIcon icon="plus" className="text-warning" /></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                    {tab2Content && <div className="row review-section">
                                        <div className="col-12 bg-white p-4">
                                            <h5>Customer Reviews For {resDetails.userName}</h5>
                                            <div className="row p-5">
                                                <div className="col-6 text-right">
                                                    <img alt="Review Icon" src={require("../assets/images/icon-review.png")} />
                                                </div>
                                                <div className="col-6 pl-0">
                                                    <p className="mb-0"><strong>Write your own reviews</strong></p>
                                                    <small className="text-danger">Only customers can write reviews</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    }
                                    {tab3Content && <div className="row info-section">
                                        <div className="col-12 bg-white p-4">
                                            <h5>Overview {resDetails.userName}</h5>
                                            <p>Base prepared fresh daily. Extra toppings are available in choose extra
                                                Choose you sauce: Go for BBQ sauce or piri piri sauce on your pizza base for no extra cost.
                                                Choose your cut: Triangular, square, fingers or Un cut on any size pizza</p>
                                        </div>
                                    </div>
                                    }
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-12">
                                <div className="container bg-white py-3 order-card">
                                    <h6 className="border-bottom pb-2"><FontAwesomeIcon icon="shopping-basket" className="mr-2" />Your Order</h6>
                                    <div>
                                        <ul>
                                            <li className="food-item border-bottom pb-2 mb-3">
                                                <div className="row">
                                                    <div className="col-8 pr-0">
                                                        <p className="mb-0">Chicken Tandoori Special 12" Deep Pan</p>
                                                    </div>
                                                    <div className="col-4 pl-0 text-right">
                                                        <p className="mb-0"><span className="food-price">RS.500</span><span className="remove-food-item"><FontAwesomeIcon icon="times" /></span></p>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <div className="row ">
                                            <div className="col-12">
                                                <p style={{ backgroundColor: '#f1f3f8', padding: '10px 15px' }}>Total+ <span style={{ float: 'right', color: '#2f313a', fontSize: '14px', fontWeight: 700 }}><em>RS.500</em></span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="row ">
                                            <div className="col-12">
                                                <button type="button" className="btn btn-warning btn-sm btn-block text-uppercase mr-2 mr-1 px-3"><b>Confirm Order</b></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div >
        );
    }
}