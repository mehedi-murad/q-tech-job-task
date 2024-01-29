import Article from '../Article/Article';
import Banner from '../Banner/Banner';
import BottomFooter from '../BottomFooter/BottomFooter';
import Footer from '../Footer/Footer';
import FreeGuide from '../FreeGuide/FreeGuide';
import Navbar from '../Navbar/Navbar';
import OnlineSession from '../OnlineSession/OnlineSession';
import SecondBanner from '../SecondBanner/SecondBanner';
import Subscribe from '../Subscribe/Subscribe';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div className='font-kumbh max-w-[1440px] mx-auto'>
            <Navbar></Navbar>
            <Banner></Banner>
            <SecondBanner></SecondBanner>
            <Testimonial></Testimonial>
            <Article></Article>
            <FreeGuide></FreeGuide>
            <OnlineSession></OnlineSession>
            <Subscribe></Subscribe>
            <Footer></Footer>
            <BottomFooter></BottomFooter>
        </div>
    );
};

export default Home;