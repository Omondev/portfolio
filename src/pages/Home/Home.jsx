import React from "react";
import { FaInstagram, FaTelegram, FaGithub, FaCode, FaYoutube, FaPhone, FaEnvelope, FaCog, FaDownload } from "react-icons/fa";
import "../Home/Home.css";
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
    return (
        <>
            <div className="container">
                <section className="banner">
                    <div className="banner-content">
                        <p className="intro">Hello I'M</p>
                        <h1 className="name">Ilhom Omonov</h1>
                        <h2 className="role">Frontend Developer</h2>
                        <p className="description">
                            After completing the frontend course, I realized that not only creating beautiful designs but also writing well-structured, scalable, and easily understandable code is crucial. In every project, I strive to develop solutions that are convenient not only for users but also for future developers.
                        </p>
                        <div className="buttons">
                            <a href="/Resume.pdf" download className="cv-btn">Download CV</a>
                            <a href="/Resume.pdf" download className="download-icon">
                                <FaDownload />
                            </a>
                        </div>
                        <p className="follow-me">Follow Me</p>
                        <div className="social-icons">
                            <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                            <a href="https://t.me/@Ilhom_Omonv" target="_blank" rel="noopener noreferrer"><FaTelegram /></a>
                            <a href="https://github.com/Omondev" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                            <a href="https://github.com/Omondev" target="_blank" rel="noopener noreferrer"><FaCode /></a>
                            <a href="https://youtube.com/c/yourchannel" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
                        </div>
                    </div>
                    <div className="profile-card">
                        <h3 className="profile-name">Ilhom Omonov</h3>
                        <p className="profile-role">Web Developer</p>
                        <div className="contact-icons">
                            <div className="icon-container">
                                <FaPhone className="icon phone" />
                                <span className="tooltip">+998 88 136 06 15</span>
                            </div>
                            <div className="icon-container">
                                <FaEnvelope className="icon email" />
                                <span className="tooltip">omon964@gmail.com</span>
                            </div>
                            <div className="icon-container">
                                <FaCog className="icon settings" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Home;
