
import '../App.css';
import Navbar from '../components/withoutlocking/navbar/navbar';
import Info from '../components/withoutlocking/info/info';
import Banner from '../components/withoutlocking/banner/banner';
import BannerEndPlan from '../components/withoutlocking/banner2/bannerendplan';
import Myaccount from '../components/withoutlocking/myaccount/myaccount';
import Sponsor from '../components/withoutlocking/sponsors/sponsor';
import Footer from '../components/withoutlocking/footer/footer';
import Header from '../components/withoutlocking/header/header';
import 'react-toastify/dist/ReactToastify.css';

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { ToastContainer, toast } from 'react-toastify';
function IndexWithout() {
    return (
        <div >
            <ToastContainer />
            {/* <Navbar /> */}
            <h3> Without Lockcing </h3>
            <Info />

            <Banner />
            <BannerEndPlan />
            <Myaccount />
            <Sponsor />
            <Footer />
        </div>
    );
}

export default IndexWithout;
