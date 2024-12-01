import React from 'react'
import './CourseComp.css'
import course1 from '../../assets/course1.jpg'
import course2 from '../../assets/course2.jpg'
import course3 from '../../assets/course3.jpeg'
import course4 from '../../assets/course4.jpg'
import course5 from '../../assets/course5.jpg'
import course6 from '../../assets/course6.jpg'
import course7 from '../../assets/course7.jpg'
import { Link } from 'react-router-dom'

const CourseComp = () => {
    return (
        <>
            <h1 className='courseComp-h1'>Become a Full Stack Developer</h1>

            <div className='courseComp'>
                <div className="courseComp-left">
                    <img src={course1} className='html-border' alt="image" height='180' width='320' />
                </div>
                <div className="courseComp-right">
                    <h1>HTML</h1>
                    <p>HTML is the standard markup language for creating web pages and applications.</p>
                    <Link to='' ><button>Link</button></Link>
                </div>
            </div>

            <div className='courseComp courseComp2'>
                <div className="courseComp-left">
                    <img src={course2} alt="image" height='180' width='320' />
                </div>
                <div className="courseComp-right">
                    <h1>CSS</h1>
                    <p>Master CSS to design visually appealing, responsive, and user-friendly websites.</p>
                    <Link to='' ><button>Link</button></Link>
                </div>
            </div>

            <div className='courseComp courseComp2'>
                <div className="courseComp-left">
                    <img src={course3} alt="image" height='180' width='320' />
                </div>
                <div className="courseComp-right">
                    <h1>JavaScript</h1>
                    <p>Learn JavaScript from scratch to advanced concepts, building interactive web applications.</p>
                    <Link to='https://sites.google.com/view/sourcify-courses/home/javascript?authuser=0' target='_blank'><button>Link</button></Link>
                </div>
            </div>

            <div className='courseComp courseComp2'>
                <div className="courseComp-left">
                    <img src={course4} alt="image" height='180' width='320' />
                </div>
                <div className="courseComp-right">
                    <h1>ReactJS</h1>
                    <p>Learn ReactJS to build dynamic, interactive, and efficient user interfaces quickly.</p>
                    <Link to='' ><button>Link</button></Link>
                </div>
            </div>

            <div className='courseComp courseComp2'>
                <div className="courseComp-left">
                    <img src={course5} alt="image" height='180' width='320' />
                </div>
                <div className="courseComp-right">
                    <h1>NodeJS</h1>
                    <p>Master Node.js to build scalable, fast, and efficient server-side applications.</p>
                    <Link to='' ><button>Link</button></Link>
                </div>
            </div>

            <div className='courseComp courseComp2'>
                <div className="courseComp-left">
                    <img src={course6} alt="image" height='180' width='320' />
                </div>
                <div className="courseComp-right">
                    <h1>ExpressJS</h1>
                    <p>Learn Express.js to build fast, scalable web applications with minimal effort.</p>
                    <Link to='' ><button>Link</button></Link>
                </div>
            </div>

            <div className='courseComp courseComp2'>
                <div className="courseComp-left">
                    <img src={course7} alt="image" height='180' width='320' />
                </div>
                <div className="courseComp-right">
                    <h1>MongoDB</h1>
                    <p>Master MongoDB to manage and store data efficiently in NoSQL databases.</p>
                    <Link to='' ><button>Link</button></Link>
                </div>
            </div>
        </>
    )
}

export default CourseComp
