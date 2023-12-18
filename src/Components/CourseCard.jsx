import time from "../assets/images/time.png";
import students from "../assets/images/students.png";
import lessons from "../assets/images/lessons.png";

const CourseCard = ({card}) => {
    const {name, image, description, price, discount, listPrice} = card;
    console.log(listPrice);
    return (
        <div className="w-[236px] border rounded-xl shadow-lg hover:scale-105 duration-300 ">
            <div className="w-fit">
                <img src={image} alt="course image" />
            </div>

            <div className="p-2">
                <h3 className="font-medium text-base text-[#1E1E1E]">{name}</h3>
                <p className="text-xs text-[#353535]">{description}</p>
            </div>

            <div className="flex justify-between px-2 mb-2">
                {/* if list price does have any value then it will render here */}
                {
                    listPrice && 
                    <>
                        <span className="text-xs font-light text-[#353535] line-through">${listPrice}</span>
                    </>   
                }

                {/* if price does have any value then it will render here otherwise free tag will be shown */}
                {price ?
                    <>
                        <span className="text-xs font-medium text-[#1A9C9C]">${price}</span>
                    </> :
                    <span className="text-xs font-medium text-[#1A9C9C]">FREE</span>
                }

                {/* if discount does have any value then it will render here */}
                {
                    discount &&
                        <>
                            <span className="bg-[#95E3E3] rounded-full px-[5px] py-[2px] text-[10px] text-[#1E1E1E]">You Save ${discount}</span>
                            
                        </>
                }
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