import React from 'react'
import './About.css';
import awesome from './images/about - awesome.svg'
import login from './images/about - awesome.svg'
import { Link } from "react-router-dom";

// import Alertss from "./Alertss";

function About() {
    return (
        <div>
            
            

            <div className="container mt-5 ">
                <div className="row">
                    <div className="col-md-6 d-flex flex-column justify-content-center">
                        <h2 className="mb-3" style={{ fontWeight: "Bold" }}>Generating Awesome <span style={{ color: "#9C27B0" }}>Captions</span> </h2>
                        <p>Your AI assistant dives into your keyword or description, analyzing the meaning, tone, and emotions it conveys. Is it funny? Inspiring? Mysterious? The AI gets the gist.
                        You'll get captions that are witty and humorous, insightful and thought-provoking, even punchy and action-oriented. Some might be short and sweet, while others tell a mini-story. This variety ensures you find the perfect fit for your content and audience.
                        </p>
                        
                    </div>
                    <div className="col-md-6">
                        <img className="img-fluid awesome" src={awesome} alt="about-awesome" />
                    </div>
                </div>

                <div className="row login mt-5 mb-5 p-5">
                    <div className="col-md-6">
                        <img className="img-fluid" src={login} alt="about-awesome" />
                    </div>
                    <div className="col-md-6 d-flex flex-column justify-content-center">
                        <h2 className="mb-3" style={{ fontWeight: "Bold" }}>Don't Just Write,  <span style={{ color: "#9C27B0" }}>Optimize</span> </h2>
                        <p>
                        The AI doesn't stop at words. It suggests relevant hashtags to boost your reach, formats like questions or challenges to spark interaction, and even call-to-actions to drive desired outcomes.
                        Remember, these captions are suggestions, not scripts. You choose the ones that resonate with you and customize them to your unique voice. The AI is your creative fuel injection, empowering you to craft posts that truly connect.
                        </p>
                        
                    </div>
                </div>
            </div>

            <footer>
                <div className="content">
                    <div className="top">
                        <div className="logo-details">
                            <span className="logo_name"><span style={{ color: "#9C27B0" }}>Bear</span>Cap</span>
                        </div>
                        <div className="media-icons">
                            <Link to="https://www.facebook.com/shubhamg007" target="_blank"><i className="fab fa-facebook-f"></i></Link>
                            <Link to="https://github.com/shubhamgaur08" target="_blank"><i className="fab fa-github"></i></Link>
                            <Link to="/"><i className="fab fa-instagram" ></i></Link>
                            <Link to="https://www.linkedin.com/in/shubham-gound-45b75715b/" target="_blank"><i className="fab fa-linkedin-in"></i></Link>
                            <Link to="/"><i className="fab fa-youtube" target="_blank"></i></Link>
                        </div>
                    </div>
                    
                </div>
                <div className="bottom-details">
                    <div className="bottom_text">
                        <span className="copyright_text">Copyright © 2024 <Link to="/">BearCap</Link>All rights reserved</span>
                        <span className="policy_terms">
                            <Link to="/">Privacy policy</Link>
                            <Link to="/">Terms & condition</Link>
                        </span>
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default About
