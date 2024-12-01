import React from 'react'
import Layout from './Layout';
import Navbar from '../components/navbar/Navbar'
import ShopComp from '../components/shopComp/ShopComp'
import Footer from '../components/footer/Footer';

const Shop = () => {
    return (
        <Layout backgroundColor="#000000">
            <Navbar />
            <ShopComp />
            <Footer />
        </Layout>
    )
}

export default Shop
