import Button from "../../Components/Button";
import image1 from "../../assets/images/img1.png";
import image2 from "../../assets/images/img2.png";
import image3 from "../../assets/images/img3.png";

const Article = () => {
  return (
    <div className="py-24">
      <h1 className="text-5xl font-extrabold text-[#333461] text-center mb-16">
        Stay Motivated, read the <br />
        weekly blog articles.
      </h1>
      <div className="flex flex-col md:flex-row justify-center gap-10 px-4">
        <div>
          <div className="md:w-[356px] border border-gray-200">
            <figure>
              <img src={image1} alt="Human" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-[#333461] font-bold text-2xl">Balancing your love and work life.</h2>
              <p className="text-[#4A556C]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua minim
                veniam.
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="md:w-[356px] border border-gray-200">
            <figure>
              <img src={image2} alt="Human" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-[#333461] font-bold text-2xl">A short break from Social Media is important.</h2>
              <p className="text-[#4A556C]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua minim
                veniam.</p>
            </div>
          </div>
        </div>

        <div>
          <div className="md:w-[356px] border border-gray-200">
            <figure>
              <img src={image3} alt="Human" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-[#333461] font-bold text-2xl">How to be 1% Better Every Day</h2>
              <p className="text-[#4A556C]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua minim
                veniam.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-14">
        <Button content="Read more blogs"></Button>
      </div>
    </div>
  );
};

export default Article;
