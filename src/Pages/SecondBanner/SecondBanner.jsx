import vectorImg from "../../assets/images/vector1.png";
import Frame1 from "../../assets/images/frame1.png";
import Frame2 from "../../assets/images/frame2.png";
import Frame3 from "../../assets/images/frame3.png";

const SecondBanner = () => {
  return (
    <div className="py-40">
        <div className="px-36 flex justify-evenly gap-20 mb-20">
          <div className="space-y-6">
            <img src={vectorImg} alt="" />
            <h1 className="text-5xl font-extrabold text-[#333461]">
              I can help you in these <br /> particular areas.
            </h1>
          </div>
          <div>
            <p className="md:w-[468px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua minim
              veniam. <br />
              <br /> Sed ut perspiciatis unde omnis iste natus error sit
              voluptatem accusantium doloremque laudantium, totam rem aperiam,
              eaque ipsa quae ab illo inventore veritatis et quasi architecto
              beatae vitae dicta sunt explicabo.
            </p>
          </div>
        </div>
        <div className="px-36 flex justify-around items-center gap-10">
          <div>
            <img src={Frame1} alt="" />
            <h2 className="text-2xl font-bold mt-6">1:1 Coaching</h2>
            <p className="md:w-[300px] mt-3 text-[#4A556C]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua minim
              veniam.
            </p>
          </div>
          <div>
            <img src={Frame2} alt="" />
            <h2 className="text-2xl font-bold mt-6">Consultation</h2>
            <p className="md:w-[300px] mt-3 text-[#4A556C]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua minim
              veniam.
            </p>
          </div>
          <div>
            <img src={Frame3} alt="" />
            <h2 className="text-2xl font-bold mt-6">Group Coaching Sessions</h2>
            <p className="md:w-[300px] mt-3 text-[#4A556C]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua minim
              veniam.
            </p>
          </div>
        </div>
    </div>
  );
};

export default SecondBanner;
