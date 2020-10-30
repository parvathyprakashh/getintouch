import React from 'react';
import './Footer.css';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import YouTubeIcon from '@material-ui/icons/YouTube';
import CopyrightIcon from '@material-ui/icons/Copyright'; 
const Footer=()=>{
    return(
        <div className="footerbox">
            <div className="small"></div> 
             <div className="details">
                 <div className="firstset">
                 <div className="box1">
                    <h3>AIA Studies</h3> 
                 </div>
                 <div className="box2">
                 <h1>Institution</h1>
                     <a href= "www.google.com">About Us</a>
                     <a href= "www.google.com">How it works</a>
                     <a href= "www.google.com">Terms of Service</a>
                 </div>
                 </div>
                 <div className="secondset">
                 <div className="box3">
                     <h1>Social Media</h1>
                     <a href= "www.google.com">Instagram</a>
                     <a href= "www.google.com">Facebook</a>
                     <a href= "www.google.com">Youtube</a>
                     <a href= "www.google.com">Whatsapp</a>
                 </div>
                 <div className="box4">
                     <h1>Assistance</h1>
                     <a href= "www.google.com">FAQ's</a>
                     <a href= "www.google.com">Contact Us</a>
                     <a href= "www.google.com">Blog</a>
                 </div>
                 </div>
                 
             </div>
             <section className="mediabar">
                 <div className="copy">
                     <p className="copyright"><CopyrightIcon></CopyrightIcon>Copyright 2020.All Rights Reserved</p> 
                 </div>
                 <div className="mediaicons">
                     <a className="fbicon" target="_blank" aria-label="Facebook" href=
                     "www.google.com"><FacebookIcon></FacebookIcon></a>
                     <a className="instaicon" target="_blank" aria-label="Instagram" href=
                     "www.google.com"><InstagramIcon></InstagramIcon></a>
                     <a className="youicon" target="_blank" aria-label="Youtube" href=
                     "www.google.com"><YouTubeIcon></YouTubeIcon></a>                                           
                     <a className="whaticon" target= "_blank" aria-label="Whatsapp" href=
                     "www.google.com"><WhatsAppIcon></WhatsAppIcon></a>

                 </div>

             </section>
        </div>

    )
}
export default Footer;