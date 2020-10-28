import React from 'react';
import './Footer.css';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
const Footer=()=>{
    return(
        <div className="footerbox">
             <div className="details">
                 <div className="firstset">
                 <div className="box1">
                     <h1>About Us</h1>
                     <a href= "www.google.com">How it works</a>
                     <a href= "www.google.com">Testimonials</a>
                     <a href= "www.google.com">Careers</a>
                     <a href= "www.google.com">Investors</a>
                     <a href= "www.google.com">Terms of Service</a>

                 </div>
                 <div className="box2">
                     <h1>Social Media</h1>
                     <a href= "www.google.com">Instagram</a>
                     <a href= "www.google.com">Facebook</a>
                     <a href= "www.google.com">Youtube</a>
                     <a href= "www.google.com">Twitter</a>
                 </div>
                 </div>
                 <div className="secondset">
                 <div className="box3">
                     <h1>Contact Us</h1>
                     <a href= "www.google.com">Contact</a>
                     <a href= "www.google.com">Support</a>
                     <a href= "www.google.com">Destinations</a>
                     <a href= "www.google.com">Sponsorships</a>
                 </div>
                 <div className="box4">
                     <h1>Videos</h1>
                     <a href= "www.google.com">Submit Video</a>
                     <a href= "www.google.com">Ambassadors</a>
                     <a href= "www.google.com">Agency</a>
                     <a href= "www.google.com">Influencer</a>
                 </div>
                 </div>
                 
             </div>
             <section className="mediabar">
                 <div className="mediaicons">
                     <a className="fbicon" target="_blank" aria-label="Facebook" href=
                     "www.google.com"><FacebookIcon></FacebookIcon></a>
                     <a className="instaicon" target="_blank" aria-label="Instagram" href=
                     "www.google.com"><InstagramIcon></InstagramIcon></a>
                     <a className="youicon" target="_blank" aria-label="Youtube" href=
                     "www.google.com"><YouTubeIcon></YouTubeIcon></a>                                           
                     <a className="twiticon" target= "_blank" aria-label="Twitter" href=
                     "www.google.com"><TwitterIcon></TwitterIcon></a>

                 </div>

             </section>
        </div>

    )
}
export default Footer;