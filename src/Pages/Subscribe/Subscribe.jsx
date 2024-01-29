import Button from "../../Components/Button";


const Subscribe = () => {
    return (
        <div className="bg-[#FAF8F6] p-14">
            <div className="flex justify-around items-center">
                <div className="space-y-2">
                    <h1 className="text-[#333461] text-3xl font-extrabold">Get notified when I publish new articles</h1>
                    <p className="text-xl text-[#4A556C]">Stay up to date with the latest news, announcements, and articles.</p>
                </div>
                <div className="flex gap-5">
                    <input className="px-4 rounded-lg" type="email" placeholder="Enter your email" />
                    <Button content="Subscribe"></Button>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;