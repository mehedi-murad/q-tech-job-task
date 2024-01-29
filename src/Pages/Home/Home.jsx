import Banner from '../Banner/Banner';
import Navbar from '../Navbar/Navbar';
import SecondBanner from '../SecondBanner/SecondBanner';

const Home = () => {
    return (
        <div className='font-kumbh'>
            <Navbar></Navbar>
            <Banner></Banner>
            <SecondBanner></SecondBanner>
        </div>
    );
};

export default Home;