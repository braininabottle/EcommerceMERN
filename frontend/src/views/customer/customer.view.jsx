import Navbar from '../../components/navbar/Navbar.component'
import Login from '../../components/login/login.component'
import { Fragment } from 'react'
import Footer from '../../components/footer/Footer.component'

const Customer = () => {
    return(
        <Fragment>
            <Navbar/>
            <Login />
            <Footer />
        </Fragment>
    )
}

export default Customer