import { useState } from "react";
import { motion } from "framer-motion";
import { StreamerSchedule } from "../types/schedule";

interface CardProps {
    schedule: StreamerSchedule;
    day: "mon" | "tue" | "wed" | "thu" | "fri" | "sat" | "sun";
}
const Card = ({ schedule, day }: CardProps) => {
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
        <div className="wrapper flex">
            <motion.div
                whileHover={{ y: -5, boxShadow: "0 8px 20px rgba(0,0,0,0.3)" }}
                className="border rounded-2xl text-center w-48 h-56 flex flex-col "
                style={{ transformStyle: "preserve-3d" }}
                transition={{ duration: 0.5 }}
                animate={{ rotateY: flip ? 0 : 180 }}
                onClick={() => setFlip((prev) => !prev)}
            >
                <motion.div
                    className="front flex flex-col h-full gap-1"
                    style={{ display: flip ? "flex" : "none" }}
                >
                    <div className="time-container flex justify-center min-h-10 mt-2">
                        <div className="border rounded-2xl w-28 p-1">
                            <div className="time text-xl">
                                {daySchedule.time ? daySchedule.time : `휴방`}
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-center todo-container min-h-[60px] ">
                        <div className="todo text-xl break-keep">{daySchedule.todo}</div>
                    </div>

                    <div className="chracterimage-container flex justify-center ">
                        <div className="w-[100px] h-[100px] flex items-center justify-center ">
                            <img
                                src={schedule.profileImg}
                                alt="멤버프로필사진"
                                className="h-full object-contain rounded-2xl"
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
                        <div className="border rounded-2xl w-28 p-1 hover:bg-gray-100">
                            <a href={schedule.chzzUrl}>
                                <div className="time text-xl">치지직</div>
                            </a>
                        </div>
                        <div className="border rounded-2xl w-28 p-1 hover:bg-gray-100">
                            <a href={schedule.youtubeUrl}>
                                <div className="time text-xl">유튜브</div>
                            </a>
                        </div>
                        <div className="border rounded-2xl w-28 p-1 hover:bg-gray-100">
                            <a href={schedule.xUrl}>
                                <div className="time text-xl">x</div>
                            </a>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Card;
