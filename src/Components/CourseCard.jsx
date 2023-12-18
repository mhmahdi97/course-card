import tempImage from "../assets/images/img-1.png";
import time from "../assets/images/time.png";
import students from "../assets/images/students.png";
import lessons from "../assets/images/lessons.png";

const CourseCard = () => {
    return (
        <div className="w-[236px] border rounded-xl shadow-lg hover:scale-105 duration-300 ">
            <div className="w-fit">
                <img src={tempImage} alt="course image" />
            </div>
            <div className="p-2">
                <h3 className="font-medium text-base text-[#1E1E1E]">This is a one line title</h3>
                <p className="text-xs text-[#353535]">Two line paragraph Lorem ipsum dolor sit amet, consectetur</p>
            </div>
            <div className="flex justify-between px-2 mb-2">
                <span className="text-xs font-light text-[#353535] line-through">$1050</span>
                <span className="text-xs font-medium text-[#1A9C9C]">$750</span>
                <span className="bg-[#95E3E3] rounded-full px-[5px] py-[2px] text-[10px] text-[#1E1E1E]">You Save $250</span>
            </div>
            <div className="border-t-[.5px] text-[10px] text-[#878787] p-2 flex gap-3">
                <div className="flex items-center gap-1"> <img src={time} alt="" /> <span>10 hrs</span></div>
                <div className="flex items-center gap-1"> <img src={students} alt="" /> <span>308</span> </div>
                <div className="flex items-center gap-1"> <img src={lessons} alt="" /> <span>17</span></div>
            </div>
        </div>
    );
};

export default CourseCard;