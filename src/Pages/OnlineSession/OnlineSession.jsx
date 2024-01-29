import Button from "../../Components/Button";
import smileImg from "../../assets/images/smile.png";

const OnlineSession = () => {
  return (
    <div className="p-24">
      <div className="bg-[#FAF8F6] rounded-xl flex justify-end items-center gap-12">
        <div>
          <h1 className="mb-5 text-[#333461] text-4xl font-extrabold">
            Get 15-Minutes Complimentary <br />
            online session.
          </h1>
          <p className="mb-10 text-xl text-gray-300">
            Limited Period Offer. Claim Now.
          </p>
          <Button content="Book Now"></Button>
        </div>
        <div>
          <img className="rounded-br-xl mt-12" src={smileImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default OnlineSession;
