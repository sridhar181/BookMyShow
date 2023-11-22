import React from 'react';
import './Footer.css';

const Footer = () => {
    return(
        <footer>
            <div className="Lstshow">
                <div className="Lstimg">
                    <img src="https://i.ibb.co/VYJJQyY/hut.jpg" alt="hut"/>
                </div>
                <div className="Lsttxt">
                    <div className="Lsttxt1">
                        <span>List your Show </span>
                        <span className="Lsttxt2">Got a show event, activity or a great experience? Partner with us & get listed on BookMyShow</span>
                    </div>
                </div>
                <button className="Lstsign">Contact today!</button>
            </div>
            <div className="sm1">
                <a href="#" className="care-icon"><img src="https://i.ibb.co/NmgryCb/Customercare.jpg" alt="Customer care"/></a>
                <a href="#" className="care-icon cr1"><img src="https://i.ibb.co/ZKKqj5X/Resendtickets.jpg" alt="Customer care"/></a>
                <a href="#" className="care-icon cr2"><img src="https://i.ibb.co/L5B9pLr/Letter.jpg" alt="Customer care"/></a>
            </div>
            <div className="container1">
                <div className="horizontal-line left"></div>
                <img src="https://i.ibb.co/Lz5Wqk7/Bms.jpg" alt="Bms Logo" className="centered-image"/>
                <div className="horizontal-line right"></div>
            </div>
            <div className="socialmedia">
                <a href="#" className="social-icon"><i className="fa-brands fa-facebook smcolor"></i></a>
                <a href="#" className="social-icon"><i className="fa-brands fa-x-twitter smcolor"></i></a>
                <a href="#" className="social-icon"><i className="fa-brands fa-instagram smcolor"></i></a>
                <a href="#" className="social-icon"><i className="fa-brands fa-youtube smcolor"></i></a>
                <a href="#" className="social-icon"><i className="fa-brands fa-pinterest-p smcolor"></i></a>
                <a href="#" className="social-icon"><i className="fa-brands fa-linkedin smcolor"></i></a>
            </div>
            <div className="copyright">
                <div className="copytxt">
                    <span>Copyright &copy; Bigtree Entertainment Pvt. Ltd. All rights Reserved.</span> <br></br>
                    <span>The content and images used on this site are copyright protected and copyrights vests with the respective owner. the usage of the content and images on this website is in intended to promote the works and no endorsement of the artist shall be implied. unauthorized use is prohibited and punishable by law.</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer;