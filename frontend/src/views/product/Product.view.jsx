import Navbar from '../../components/navbar/Navbar.component'
import React from 'react'
import { Fragment } from 'react'
import SingleProductView from '../../components/single-product-view/SingleProductView.component'
import Footer from '../../components/footer/Footer.component'



const Product = () => {
    

    return (
        <Fragment>
            <div>
                <Navbar />
                <SingleProductView/>
                <Footer />
            </div>
        </Fragment>
    )
}

export default Product