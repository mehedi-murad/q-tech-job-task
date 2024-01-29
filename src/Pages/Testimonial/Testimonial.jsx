import avatar1 from "../../assets/avatar/jane.png"
import avatar2 from "../../assets/avatar/catherine.png"
import avatar3 from "../../assets/avatar/jane1.png"

const Testimonial = () => {
    return (
        <div className="bg-[#FAF8F6] py-28 px-4">
            <div className="md:ml-40">
            <h1 className='text-[#333461] text-5xl font-extrabold mb-9'>Hear out what my <br />clients say about me.</h1>
            <div className="flex flex-col md:flex-row gap-9">
                <div className="bg-white w-[400px] p-10 space-y-4">
                    <p className="w-[304px]">"I gained so much <span className="font-bold">confidence</span> in my ability to connect and deepen my relationships with people. "</p>
                    <h2 className="font-bold">Jane</h2>
                    <div className="avatar">
                        <div className="w-12">
                            <img className='rounded-full' src={avatar1} />
                        </div>
                    </div><br />
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div>
                </div>
                <div className="bg-white w-[400px] p-10 space-y-4 opacity-85">
                    <p className="w-[304px]">"I gained so much <span>confidence</span> in my ability to connect and deepen my relationships with people."</p>
                    <h2 className="font-bold">Catherine</h2>
                    <div className="avatar">
                        <div className="w-12">
                            <img className='rounded-full' src={avatar2} />
                        </div>
                    </div><br />
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-gray-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-gray-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-gray-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-gray-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-gray-400" />
                    </div>
                </div>
                <div className="bg-white w-[400px] p-10 space-y-4 opacity-85">
                    <p className="w-[304px]">"I gained so much <span>confidence</span> in my ability to connect and deepen my relationships with people. "</p>
                    <h2 className="font-bold">Jane</h2>
                    <div className="avatar">
                        <div className="w-12">
                            <img className='rounded-full' src={avatar3} />
                        </div>
                    </div><br />
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-gray-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-gray-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-gray-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-gray-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-gray-400" />
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Testimonial;