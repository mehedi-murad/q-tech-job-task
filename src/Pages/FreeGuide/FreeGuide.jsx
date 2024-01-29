import Button from "../../Components/Button";
import guideImg from "../../assets/images/guide.png";
import chatImg from "../../assets/images/chat.png"

const FreeGuide = () => {
  return (
    <div className="py-36 px-40">
      <div className="flex justify-around items-center gap-32">
        <div className="flex-1 space-y-4">
          <h1 className="text-[#333461] font-extrabold text-5xl">
            Don’t miss out on my <br />
            ‘Live life at the full <br />
            potential’ free guide
          </h1>
          <p className="text-xl md:w-[550px] text-[#4A556C]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua minim
            veniam. <br /> <br /> <span className="text-base">Sed ut perspiciatis unde omnis iste natus
            error sit voluptatem accusantium doloremque laudantium, totam rem
            aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
            architecto beatae vitae dicta sunt explicabo.</span>
          </p>
          <Button content="Get your free guide now"></Button>
        </div>
        <div className="flex-1 relative">
          <img className="" src={guideImg} alt="" />
          <div className="bg-[#20AD96] w-24 h-24 rounded-full text-white font-semibold flex justify-center items-center absolute -top-10 -right-10">
            <h2 className="">Free Guide</h2>
          </div>

          <div className="flex justify-center gap-6 items-center glass -mt-32 p-4">
            <div>
                <img src={chatImg} alt="" />
            </div>
            <div className="text-white text-sm">
                <h2 className="font-semibold">Ready to start? Let's talk!</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeGuide;
