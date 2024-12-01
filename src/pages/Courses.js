import React from 'react'
import Navbar from '../components/navbar/Navbar'
import CourseComp from '../components/courseComp/CourseComp'
import Layout from './Layout';
import Footer from '../components/footer/Footer';

const Courses = () => {
    return (
        <Layout backgroundColor="white">
            <Navbar />
            <CourseComp />
            <Footer />
        </Layout>
    )
}

export default Courses
