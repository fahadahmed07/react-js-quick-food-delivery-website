import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Footer extends Component {
    render() {
        return (
            // Complete Footer Section
            <div className="container-fluid pt-5 bg-footer">
                <div className="container mb-4">
                    <div className="row">

                        {/* Popular Cities Section */}
                        <div className="col-lg-3 col-md-3 col-sm-12">
                            <div className="footer-head-div">
                                <h5 className="text-white">Popular Cities</h5>
                            </div>
                            <div className="footer-list-div">
                                <ul>
                                    <li><a href="#">Karachi</a></li>
                                    <li><a href="#">Lahore</a></li>
                                    <li><a href="#">Islamabad</a></li>
                                    <li><a href="#">Rawalpindi</a></li>
                                    <li><a href="#">Multan</a></li>
                                </ul>
                            </div>
                        </div>

                        {/* Popular Cuisnies Section */}                        
                        <div className="col-lg-3 col-md-3 col-sm-12">
                            <div className="footer-head-div">
                                <h5 className="text-white">Popular Cuisnies</h5>
                            </div>
                            <div className="footer-list-div">
                                <ul>
                                    <li><a href="#">Apple Juice</a></li>
                                    <li><a href="#">BB.Q</a></li>
                                    <li><a href="#">Chicken Roast</a></li>
                                    <li><a href="#">Hot Dogs</a></li>
                                    <li><a href="#">Prawns</a></li>
                                    <li><a href="#">Steam Roast</a></li>
                                </ul>
                            </div>
                        </div>

                        {/* Popular Cuisnies Section */}
                        <div className="col-lg-3 col-md-3 col-sm-12">
                            <div className="footer-head-div">
                                <h5 className="text-white">Menu</h5>
                            </div>
                            <div className="footer-list-div">
                                <ul>
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">Contact</a></li>
                                    <li><a href="#">FAQ's</a></li>
                                    <li><a href="#">How it works</a></li>
                                </ul>
                            </div>
                        </div>
                        
                        {/* Contact Section */}                        
                        <div className="col-lg-3 col-md-3 col-sm-12">
                            <div className="footer-head-div">
                                <h5 className="text-white">Connect</h5>
                            </div>
                            <div className="footer-list-div">
                                <ul className="social-media mb-3">
                                    <li className="mr-2">
                                        <a href="#" className="bg-light-gray rounded-circle p-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                                width="16" height="16"
                                                viewBox="0 0 226 226"
                                                style={{ fill: "#000000" }}>
                                                <g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: "normal" }}>
                                                    <path d="M0,226v-226h226v226z" fill="none"></path>
                                                    <g className="svg" fill="#333333">
                                                        <g id="surface1">
                                                            <path d="M224.74369,48.45283c-8.18299,3.63312 -16.97716,6.07783 -26.21274,7.19832c9.40535,-5.67037 16.67158,-14.60036 20.06701,-25.26202c-8.82812,5.22896 -18.60697,9.03185 -28.997,11.06911c-8.31881,-8.86208 -20.16887,-14.39663 -33.30919,-14.39663c-25.19411,0 -45.63462,20.44051 -45.63462,45.63462c0,3.56521 0.40745,7.0625 1.1884,10.39003c-37.92699,-1.90144 -71.54177,-20.10096 -94.05349,-47.70583c-3.9387,6.7569 -6.17968,14.60036 -6.17968,22.98708c0,15.82271 8.04717,29.77794 20.30468,37.96093c-7.5039,-0.23767 -14.53245,-2.27493 -20.67818,-5.70433c0,0.20373 0,0.3735 0,0.57723c0,22.10426 15.72086,40.54146 36.60276,44.7518c-3.83684,1.05259 -7.84344,1.59586 -12.01983,1.59586c-2.95403,0 -5.80619,-0.27163 -8.59044,-0.8149c5.80618,18.09765 22.64753,31.33985 42.61267,31.67938c-15.58503,12.25751 -35.27854,19.52374 -56.66977,19.52374c-3.70102,0 -7.30018,-0.20373 -10.86538,-0.61118c20.16887,12.93661 44.17458,20.47446 69.94591,20.47446c83.9351,0 129.84135,-69.53846 129.84135,-129.80739c0,-2.0033 -0.03395,-3.97265 -0.13582,-5.942c8.92999,-6.38341 16.67158,-14.4306 22.78336,-23.59826"></path>
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg>
                                        </a>
                                    </li>
                                    <li className="mr-2">
                                        <a href="#" className="bg-light-gray rounded-circle p-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                                width="16" height="16"
                                                viewBox="0 0 172 172"
                                                style={{ fill: "#000000" }}>
                                                <g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: "normal" }}>
                                                    <path d="M0,172v-172h172v172z" fill="none"></path>
                                                    <g className="svg" fill="#333333">
                                                        <path d="M125.59583,64.5h-25.2625v-14.33333c0,-7.396 0.602,-12.05433 11.2015,-12.05433h13.38733v-22.79c-6.5145,-0.67367 -13.06483,-1.00333 -19.62233,-0.989c-19.44317,0 -33.63317,11.87517 -33.63317,33.67617v16.4905h-21.5v28.66667l21.5,-0.00717v64.50717h28.66667v-64.5215l21.973,-0.00717z"></path>
                                                    </g>
                                                </g>
                                            </svg>
                                        </a>
                                    </li>
                                    <li className="mr-2">
                                        <a href="#" className="bg-light-gray rounded-circle p-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                                width="16" height="16"
                                                viewBox="0 0 172 172"
                                                style={{ fill: "#000000" }}>
                                                <g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: "normal" }}>
                                                    <path d="M0,172v-172h172v172z" fill="none"></path>
                                                    <g className="svg" fill="#333333">
                                                        <g id="surface1">
                                                            <path d="M49.92548,0c-27.49519,0 -49.92548,22.43029 -49.92548,49.92548v72.14904c0,27.49519 22.43029,49.92548 49.92548,49.92548h72.14904c27.49519,0 49.92548,-22.43029 49.92548,-49.92548v-72.14904c0,-27.49519 -22.43029,-49.92548 -49.92548,-49.92548zM49.92548,13.23077h72.14904c20.33714,0 36.69471,16.33173 36.69471,36.69471v72.14904c0,20.33714 -16.33173,36.69471 -36.69471,36.69471h-72.14904c-20.33714,0 -36.69471,-16.33173 -36.69471,-36.69471v-72.14904c0,-20.33714 16.33173,-36.69471 36.69471,-36.69471zM135.61538,26.46154c-5.47837,0 -9.92308,4.44471 -9.92308,9.92308c0,5.47837 4.44471,9.92308 9.92308,9.92308c5.47837,0 9.92308,-4.44471 9.92308,-9.92308c0,-5.47837 -4.44471,-9.92308 -9.92308,-9.92308zM86,39.69231c-25.50541,0 -46.30769,20.80228 -46.30769,46.30769c0,25.50541 20.80228,46.30769 46.30769,46.30769c25.50541,0 46.30769,-20.80228 46.30769,-46.30769c0,-25.50541 -20.80228,-46.30769 -46.30769,-46.30769zM86,52.92308c18.34736,0 33.07692,14.72957 33.07692,33.07692c0,18.34736 -14.72956,33.07692 -33.07692,33.07692c-18.34735,0 -33.07692,-14.72956 -33.07692,-33.07692c0,-18.34735 14.72957,-33.07692 33.07692,-33.07692z"></path>
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                                <ul>
                                    <li className="pb-3">
                                        <span className="bg-warning p-2 rounded mr-3">
                                            <FontAwesomeIcon icon="phone" className="text-white" />
                                        </span>
                                        <span>+1 321 828 6662</span>
                                    </li>
                                    <li className="pb-3">
                                        <span className="bg-warning p-2 rounded mr-3">
                                            <FontAwesomeIcon icon="envelope" className="text-white" />
                                        </span>
                                        <span>info@quickfood.com</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Copyright Section */}
                <div className="container">
                    <div className="col-12 footer-copyright">
                        <p>© 2019 Quick Food. All Rights Reserved. Powered By <span style={{ color: "#eb6825", fontWeight: 700 }}>Fahad Ahmed</span></p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;