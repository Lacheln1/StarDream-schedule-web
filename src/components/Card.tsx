import { useState } from "react";
import { motion } from "framer-motion";
import { StreamerSchedule } from "../types/schedule";

interface CardProps {
    schedule: StreamerSchedule;
    day: "mon" | "tue" | "wed" | "thu" | "fri" | "sat" | "sun";
    daylabel?: string;
}
const Card = ({ schedule, day, daylabel }: CardProps) => {
    const [flip, setFlip] = useState(true);
    const daySchedule = schedule[day]?.[0];

    if (!daySchedule) {
        return (
            <div className="wrapper flex">
                <div className="border rounded-2xl text-center w-48 h-60 flex items-center justify-center">
                    <p className="text-gray-400">스케줄 없음</p>
                </div>
            </div>
        );
    }

    return (
        <div className="wrapper flex justify-center">
            <motion.div
                whileHover={{ y: -5, boxShadow: "0 8px 20px rgba(0,0,0,0.3)" }}
                className=" border rounded-2xl text-center w-20  lg:w-48 lg:h-60 flex flex-col "
                style={{
                    transformStyle: "preserve-3d",
                    backgroundColor: `${schedule.personalColor}`,
                }}
                transition={{ duration: 0.5 }}
                animate={{ rotateY: flip ? 0 : 180 }}
                onClick={() => setFlip((prev) => !prev)}
            >
                <motion.div
                    className="front flex flex-col h-full justify-center gap-1 px-2"
                    style={{ display: flip ? "flex" : "none" }}
                >
                    <div className="time-container flex text-center items-center justify-center min-h-10 mt-2">
                        <div className="flex items-center justify-center border rounded-2xl w-14 min-h-[50px] lg:w-20 xl:w-28 p-1 bg-white">
                            <div className="time text-sm lg:text-lg xl:text-xl">
                                {daySchedule.time
                                    ? `${daylabel ? `${daylabel} ` : ""}${daySchedule.time}`
                                    : `휴방`}
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-center todo-container min-h-[80px] xl:min-h-[70px] ">
                        <div className="todo text-sm lg:text-base xl:text-xl break-keep">
                            {daySchedule.todo}
                        </div>
                    </div>

                    <div className="chracterimage-container flex justify-center ">
                        <div className="w-[50px] h-[50px] mb-2 lg:w-[80px] lg:h-[80px] xl:w-[90px] xl:h-[90px] flex items-center justify-center ">
                            <img
                                src={schedule.profileImg}
                                alt="멤버프로필사진"
                                title="치지직 채널로 이동합니다."
                                className="h-full object-contain rounded-full "
                            />
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    className="back flex flex-col justify-center h-full"
                    style={{
                        rotateY: 180,
                        display: flip ? "none" : "flex",
                    }}
                >
                    <div className="time-container flex flex-col items-center gap-5 my-3">
                        <div className="border rounded-2xl w-14 lg:w-28 p-1 bg-white hover:bg-gray-100">
                            <a href={schedule.chzzUrl} target="_blank">
                                <div className="time text-sm lg:text-xl">치지직</div>
                            </a>
                        </div>
                        <div className="border rounded-2xl w-14 lg:w-28 p-1 bg-white hover:bg-gray-100">
                            <a href={schedule.youtubeUrl} target="_blank">
                                <div className="time text-sm lg:text-xl">유튜브</div>
                            </a>
                        </div>
                        <div className="border rounded-2xl w-14 lg:w-28 p-1 bg-white hover:bg-gray-100">
                            <a href={schedule.xUrl} target="_blank">
                                <div className="time text-sm lg:text-xl">X</div>
                            </a>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Card;
