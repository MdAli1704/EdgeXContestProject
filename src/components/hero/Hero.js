import React, { useState, useEffect } from 'react'
import './Hero.css'
import heroImg from '../../assets/heroImg.jpg'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useTypewriter } from 'react-simple-typewriter'

const Hero = () => {
    const [bgColor, setBgColor] = useState('#1d2951');

    // For AOS Animation
    useEffect(() => {
        AOS.init({
            duration: 800,
        });

        // Set the initial background color for 3 seconds, then change it every 3 seconds
        const timer = setTimeout(() => {
            setBgColor(generateRandomColor()); // Change color after 3 seconds
        }, 1800);

        // Use setInterval to change background color every 2 seconds after 3 seconds delay
        const interval = setInterval(() => {
            setBgColor(generateRandomColor());
        }, 1800);

        // Cleanup on unmount
        return () => {
            clearTimeout(timer); // Clear the initial timer
            clearInterval(interval); // Clear the interval to stop color changes
        };
    }, []);

    // Type Writer
    const [text] = useTypewriter({
        words: ['Learn', 'Grow', 'Develop', 'Think', 'Innovate', 'Eat', 'Sleep', 'Code', 'Repeat'],
        loop: 100,
        typeSpeed: 150,
        deleteSpeed: 50,
        delaySpeed: 600
    })

    let colorPool = ['#704241', '#080808', '#2f4f4f'];
    let currentIndex = 0;

    const generateRandomColor = () => {
        if (currentIndex >= colorPool.length) {
            currentIndex = 0;  // Restart the process once all colors are used
        }
        const color = colorPool[currentIndex];
        currentIndex++;  // Move to the next color in the array
        return color;
    };


    return (
        <div className='hero' style={{ backgroundColor: bgColor }}>
            <div className="heroLeft">
                <h1 data-aos="flip-up" data-aos-delay="200">Welcome to AzionXSourcify - <span>{text}</span></h1>
                <p data-aos="fade" data-aos-delay="400" ><b>Azion</b> é uma empresa de serviços em nuvem que oferece soluções de computação em borda, entrega de conteúdo e segurança. Ela ajuda as empresas a acelerar sites, melhorar o desempenho e proteger dados globalmente. <b>Sourcify</b> in the e-learning space is a platform that provides online courses and various other educational services.</p>
                <Link to='/shop'><button className='btn1' data-aos="fade" data-aos-delay="600">Start Shopping</button></Link>
                <br />
                <Link to='/courses'><button className='btn2' data-aos="fade" data-aos-delay="600">Start Learning</button></Link>
            </div>

            <div className="heroRight">
                <img src={heroImg} alt="image" height='250' width='350' data-aos="zoom-in" data-aos-delay="800" />
            </div>
        </div>
    )
}

export default Hero

