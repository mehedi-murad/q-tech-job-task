import Button from "../../Components/Button";
import guideImg from "../../assets/images/guide.png";
import chatImg from "../../assets/images/chat.png"

const FreeGuide = () => {
  return (
    <div className="py-36 md:px-40 px-4">
      <div className="flex flex-col md:flex-row justify-around items-center gap-32">
        <div className="flex-1 space-y-4">
          <h1 className="text-[#333461] font-extrabold text-5xl md:w-[490px]">
            Don’t miss out on my 
            ‘Live life at the full
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
          <img src={guideImg} alt="" />
          <div className="bg-[#20AD96] w-24 h-24 rounded-full text-white font-semibold flex justify-center items-center absolute md:-top-10 md:-right-10 -top-0 right-0">
            <h2>Free Guide</h2>
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
