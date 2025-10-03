import Card from "../components/Card";
import { pageVariants } from "../components/FramerAnimation";
import { StreamerSchedule } from "../types/schedule";
import StarDreamLogo from "/STARDREAM_.png";
import { motion } from "framer-motion";

interface Day {
    key: "mon" | "tue" | "wed" | "thu" | "fri" | "sat" | "sun";
    label: string;
}

interface Streamer {
    schedule: StreamerSchedule;
    name: string;
}

interface MobileLayoutProps {
    days: readonly Day[];
    streamers: Streamer[];
    weeklyDate: string;
}

const MobileLayout = ({ days, streamers, weeklyDate }: MobileLayoutProps) => {
    return (
        <motion.div
            className="min-h-screen bg-[#feffef] p-4"
            variants={pageVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <div className="max-w-full mx-auto">
                <div className="flex justify-center text-center items-center gap-3 mb-5">
                    <a href="https://cafe.naver.com/stardreamco">
                        <img
                            src={StarDreamLogo}
                            alt="스타드림로고"
                            title="네이버 카페로 이동합니다"
                            className="w-[30px] h-[30px] xl:w-[36px] xl:h-[36px]"
                        />
                    </a>
                    <div className="text-xl font-bold text-center">
                        스타드림 {weeklyDate} 통합시간표
                    </div>
                </div>

                <div className="grid gap-2 mb-4" style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
                    {streamers.map((streamer) => (
                        <div key={streamer.name} className="text-center font-bold text-sm">
                            {streamer.name}
                        </div>
                    ))}
                </div>

                {days.map((day) => (
                    <div
                        key={day.key}
                        className="grid gap-2 mb-4"
                        style={{ gridTemplateColumns: "repeat(4, 1fr)" }}
                    >
                        {streamers.map((streamer) => (
                            <Card
                                key={`${day.key}-${streamer.name}`}
                                schedule={streamer.schedule}
                                day={day.key}
                                daylabel={day.label}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </motion.div>
    );
};

export default MobileLayout;
