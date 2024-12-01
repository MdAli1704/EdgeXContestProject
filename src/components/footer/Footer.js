import React from 'react'
import './Footer.css'
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    // openInNewTab function
    const openInNewTab = (url) => {
        const win = window.open(url, '_blank');
        win.focus();
    };

    return (
        <div className='footer'>
            <div className="footerOne">
                <div className='footerOne-linkedin' onClick={() => openInNewTab('https://www.linkedin.com/in/md-abdullah123/')}><FaLinkedin size={30} /></div>
                <div className='footerOne-github' onClick={() => openInNewTab('https://github.com/MdAli1704/EdgeXContestProject')}><FaGithub size={30} /></div>
                <div className='footerOne-instagram' onClick={() => openInNewTab('https://www.instagram.com/codewithinnovation/profilecard/?igsh=MTVsMjFpNWcwMGgxdQ%3D%3D')}><FaInstagram size={30} /></div>
            </div>

            <div className="footerTwo">
                <p>AzionXSourcify - {currentYear} | All Rights Reserved &copy;</p>
            </div>
        </div >
    )
}

export default Footer
