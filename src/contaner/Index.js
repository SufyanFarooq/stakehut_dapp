
import '../App.css';
// import Navbar from '../components/locking/navbar/navbar';
import Info from '../components/locking/info/info';
import Banner from '../components/locking/banner/banner';
import BannerEndPlan from '../components/locking/banner2/bannerendplan';
import Myaccount from '../components/locking/myaccount/myaccount';
import Sponsor from '../components/locking/sponsors/sponsor';
import Footer from '../components/locking/footer/footer';
import Header from '../components/locking/header/header';
import 'react-toastify/dist/ReactToastify.css';

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';


import { ToastContainer, toast } from 'react-toastify';
function Index() {
    return (
        <div >
            <ToastContainer />
            {/* <Navbar /> */}
            <Info />

            <Banner />
            <BannerEndPlan />
            <Myaccount />
            <Sponsor />
            <Footer />
        </div>
    );
}

export default Index;
