import React from 'react'
import Navbar from '../components/navbar/Navbar'
import CartItem from '../components/cartItem/CartItem';
import Layout from './Layout';
import Footer from '../components/footer/Footer';

const Cart = () => {
    return (
        <Layout backgroundColor="#000000">
            <Navbar />
            <CartItem />
            <Footer/>
        </Layout>
    )
}

export default Cart
