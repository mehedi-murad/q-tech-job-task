import Banner from '../Banner/Banner';
import Navbar from '../Navbar/Navbar';
import SecondBanner from '../SecondBanner/SecondBanner';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div className='font-kumbh max-w-[1440px] mx-auto'>
            <Navbar></Navbar>
            <Banner></Banner>
            <SecondBanner></SecondBanner>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;