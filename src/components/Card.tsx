import { useState } from "react";
import iruneProfileImg from "../images/irune_profile.png";
import ureiProfileImg from "../images/urei_profile.png";
import { motion } from "framer-motion";

const Card = () => {
    const [flip, setFlip] = useState(true);
    return (
        <div className="wrapper flex">
            <motion.div
                className="border rounded-2xl text-center w-48 h-60 flex flex-col"
                style={{ transformStyle: "preserve-3d" }}
                transition={{ duration: 0.7 }}
                animate={{ rotateY: flip ? 0 : 180 }}
                onClick={() => setFlip((prev) => !prev)}
            >
                <motion.div
                    className="front flex flex-col h-full"
                    style={{ display: flip ? "flex" : "none" }}
                >
                    <div className="time-container flex justify-center mt-3">
                        <div className="border rounded-2xl w-28 p-1">
                            <div className="time text-xl">pm:03:00</div>
                        </div>
                    </div>
                    <div className="todo-container">
                        <div className="todo text-xl">on 챗</div>
                    </div>
                    <div className="chracterimage-container flex justify-center mt-auto">
                        <div className="w-[150px] h-[150px] flex items-center justify-center">
                            <img
                                src={iruneProfileImg}
                                alt="멤버프로필사진"
                                className="h-full object-contain"
                            />
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    className="back"
                    style={{
                        rotateY: 180,
                        display: flip ? "none" : "block",
                    }}
                >
                    <div className="time-container flex flex-col text-center justify-center items-center my-3">
                        <div className="border rounded-2xl w-28 p-1">
                            <div className="time text-xl">pm:05:00</div>
                        </div>
                        <div className="border rounded-2xl w-28 p-1">
                            <div className="time text-xl">pm:05:00</div>
                        </div>
                        <div className="border rounded-2xl w-28 p-1">
                            <div className="time text-xl">pm:05:00</div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Card;
